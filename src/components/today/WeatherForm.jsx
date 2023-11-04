import { LoadingButton } from "@mui/lab";
import {
  Box,
  Container,
  TextField,
  Typography,
  InputAdornment,
  CardMedia,
} from "@mui/material";
import { useState } from "react";
import locacion from "../../img/locacion.svg";
import WeatherInfo from "../today/WeatherInfo";
import {
  container,
  formulario,
  informacion,
  informacionLater,
  principal,
  textTitulo,
} from "./stylesFrom";
import WeatherLater from "../5Later/WeatherLater";

const API_WEATHER = import.meta.env.VITE_SOME_KEY;

export default function WeatherForm() {
  const [city, setCity] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: "",
    temperatureMax: "",
    temperatureMin: "",
    conditionText: "",
    icon: "",
    viento: "",
    humedad: "",
  });

  const [weatherLater, setWeatherLater] = useState({
    temperature: "",
    conditionText: "",
    icon: "",
    viento: "",
    humedad: "",
    tiempoText: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError({ error: false, message: "" });
    setLoading(true);

    try {
      if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_WEATHER}&units=metric`
      );

      const resLater = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_WEATHER}&units=metric`
      );

      const data = await res.json();
      const dataLater = await resLater.json();

      console.log(data);
      console.log(dataLater);

      setWeather({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        conditionText: data.weather[0].description,
        temperatureMax: data.main.temp_max,
        temperatureMin: data.main.temp_min,
        icon: data.weather[0].main,
        viento: data.wind.speed,
        humedad: data.main.humidity,
      });

      const weatherData = dataLater.list.map((item) => ({
        temperature: item.main.temp,
        conditionText: item.weather[0].description,
        icon: item.weather[0].main,
        viento: item.wind.speed,
        humedad: item.main.humidity,
        tiempoText: item.dt_txt,
      }));

      setWeatherLater(weatherData);
    } catch (error) {
      console.log(error);
      setError({ error: true, message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={principal}>
      <Container sx={container}>
        <Box sx={formulario}>
          <Typography
            variant="h3"
            component="h1"
            align="center"
            gutterBottom
            sx={textTitulo}
          >
            ClearSky: Your Prognosis
          </Typography>
          <Box
            sx={{ display: "grid", gap: 2 }}
            component="form"
            autoComplete="off"
            onSubmit={onSubmit}
          >
            <TextField
              id="city"
              label="City"
              variant="outlined"
              size="small"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              error={error.error}
              helperText={error.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CardMedia
                      component="img"
                      height="22"
                      image={locacion}
                      alt="locacion"
                    />
                  </InputAdornment>
                ),
              }}
            />
            <LoadingButton
              type="submit"
              variant="contained"
              loading={loading}
              loadingIndicator="Buscando..."
            >
              Buscar
            </LoadingButton>
          </Box>
        </Box>
      </Container>
      <Box sx={informacion}>
        {weather.city && <WeatherInfo weather={weather} />}
      </Box>
      <Box sx={informacionLater}>
        {weatherLater.length > 0 && (
          <WeatherLater weatherLater={weatherLater} />
        )}
      </Box>
    </Box>
  );
}
