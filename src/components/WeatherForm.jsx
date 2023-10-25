import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import { principal } from "./stylesFrom";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

const WheaterFrom = () => {
  const form = useRef();
  const apiKey = import.meta.env.VITE_SOME_KEY;

  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");
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
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;

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
          senReal: response.data.feels_like,
          presion: response.data.pressure,
          viento: response.data.wind.speed,
        });
      })
      .catch((error) => {
        console.error("Error al cargar datos del clima:", error);
      });
  }, [city, countryCode, apiKey]);

  console.log(weatherData);

  return (
    <>
      <Box sx={principal}>
        <Typography variant="h4" gutterBottom fontWeight={700}>
          Pais
        </Typography>
        <Typography variant="body1" gutterBottom fontWeight={400} fontSize={22}>
          Ciudad
        </Typography>
        <Formik
          initialValues={{
            pais: "",
            ciudad: "",
          }}
          validate={(valores) => {
            let errores = {};

            // Validacion Pais
            if (!valores.pais) {
              errores.pais = "Pais inválido";
            } else if (!/^[a-zA-ZÁ-ÿ\s]{1,40}$/.test(valores.pais)) {
              errores.pais = "Ingrese un Pais válido";
            }

            // Validacion ciudad
            if (!valores.ciudad) {
              errores.ciudad = "Ciudad inválido";
            } else if (!/^[a-zA-ZÁ-ÿ\s]{1,40}$/.test(valores.ciudad)) {
              errores.ciudad = "Ingrese un Ciudad válido";
            }

            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {
            resetForm();
            setCountryCode(valores.pais);
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
            <form onSubmit={handleSubmit} ref={form}>
              <TextField
                fullWidth
                label="Pais"
                variant="outlined"
                name="pais"
                placeholder="Pais"
                value={values.pais}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.pais && touched.pais)}
                helperText={errors.pais && touched.pais && errors.pais}
                autoComplete="off"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Ciudad"
                variant="outlined"
                name="ciudad"
                placeholder="Ciudad"
                value={values.ciudad}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.ciudad && touched.ciudad)}
                helperText={errors.ciudad && touched.ciudad && errors.ciudad}
                autoComplete="off"
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                Buscar
              </Button>
            </form>
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
