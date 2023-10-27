import {
  Box,
  Button,
  CardMedia,
  Container,
  Input,
  Paper,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import { principal, secundario } from "./stylesFrom";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import { botonBuscar, caja, container, inputText } from "./stylesFrom2";
import Lupa from "../img/lagruesa.svg";

const WheaterFrom = () => {
  const form = useRef();
  const apiKey = import.meta.env.VITE_SOME_KEY;

  const [city, setCity] = useState("");

  const [temperature, setTemperature] = useState({
    temperatura: null,
    temMax: null,
    temMin: null,
    pais: null,
    ciudad: null,
    humedad: null,
    senReal: null,
    presion: null,
    viento: null,
  });
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang={es}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);

        setTemperature({
          temperatura: response.data.main.temp,
          temMax: response.data.main.temp_max,
          temMin: response.data.main.temp_min,
          pais: response.data.sys.country,
          ciudad: response.data.name,
          humedad: response.data.main.humidity,
          senReal: response.data.main.feels_like,
          presion: response.data.main.pressure,
          viento: response.data.wind.speed,
        });
      })
      .catch((error) => {
        console.error("Error al cargar datos del clima:", error);
      });
  }, [city, apiKey]);

  console.log(weatherData);

  return (
    <>
    <Box sx={principal}>
      <Formik
        initialValues={{
          pais: "",
          ciudad: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion ciudad
          if (!valores.ciudad) {
            errores.ciudad = "Ciudad inválido";
          } else if (!/^[a-zA-ZÁ-ÿ\s]{1,40}$/.test(valores.ciudad)) {
            errores.ciudad = "Ingrese un Ciudad válido";
          }

          return errores;
        }}
        onSubmit={(valores) => {
          setCity(valores.ciudad);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <Box sx={secundario}>
            <form onSubmit={handleSubmit} ref={form}>
              <Container sx={container}>
                <Box sx={caja}>
                  <i className="bx bxs-map"></i>
                  <Input
                    type="text"
                    placeholder="nombre de la locacion"
                    sx={inputText}
                    fullWidth
                    name="ciudad"
                    value={values.ciudad}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(errors.ciudad && touched.ciudad)}
                    helperText={
                      errors.ciudad && touched.ciudad && errors.ciudad
                    }
                    autoComplete="off"
                    focused
                  />
                  <Button
                    sx={botonBuscar}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <CardMedia title="" image={Lupa} component="img" alt={""} />
                  </Button>
                </Box>
                <Box className="weather__box" sx={{ mt: 4 }}>
                  <Box component={Paper} sx={{ p: 2 }}>
                    <Box
                      className="info__weather"
                      sx={{ display: "flex", alignItems: "center", gap: 2 }}
                    >
                      <img src="" alt=" " />
                      <Typography variant="h5">
                        Información del clima
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Container>
            </form>
          </Box>
        )}
      </Formik>
    </Box>
      {weatherData ? (
        <WeatherInfo temperature={temperature} />
      ) : (
        <p>Cargando...</p>
      )}
      </>
  );
};

export default WheaterFrom;
