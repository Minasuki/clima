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
import locacion from "../img/locacion.svg";
import WeatherInfo from "./WeatherInfo";
import { container, formulario, informacion, principal } from "./stylesFrom";

const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_SOME_KEY
}&lang=es&q=`;

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
    temperature: 0,
    condition: "",
    conditionText: "",
    icon: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError({ error: false, message: "" });
    setLoading(true);

    try {
      if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };

      const res = await fetch(API_WEATHER + city);
      const data = await res.json();

      if (data.error) {
        throw { message: data.error.message };
      }

      // console.log(data);

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temperature: data.current.temp_c,
        condition: data.current.condition.code,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
      });
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
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            ClearSky: Tu Pronóstico
          </Typography>
          <Box
            sx={{ display: "grid", gap: 2 }}
            component="form"
            autoComplete="off"
            onSubmit={onSubmit}
          >
            <TextField
              id="city"
              label="Ciudad"
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
                      alt="Paella dish"
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
    </Box>
  );
}
