import { Box, Button, CardMedia, Container, Input } from "@mui/material";
import { Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import {
  botonBuscar,
  caja,
  container,
  info,
  inputText,
  later,
  locacion,
  principal,
  secundario,
} from "./stylesFrom";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Lupa from "../img/lagruesa.svg";
import WeatherLater from "./WeatherLater";
import location from "../img/locacion.svg";

const WheaterFrom = () => {
  const form = useRef();
  const apiKey = import.meta.env.VITE_SOME_KEY;

  const [city, setCity] = useState("");

  const [temperature, setTemperature] = useState();

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {

        if (response.data.main) {
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
        }
      })
      .catch((error) => {
        console.error("Error al cargar datos del clima:", error);
        console.error("Respuesta de error de la API:", error.response);
      });
  }, [city, apiKey]);

  // console.log(weatherData);

  return (
    <>
      <Box sx={principal}>
        <Formik
          initialValues={{
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
                    <CardMedia
                      title=""
                      image={location}
                      component="img"
                      alt={""}
                      sx={locacion}
                    />
                    <Input
                      type="text"
                      placeholder="Ingrese una Ciudad"
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
                    />
                    <Button
                      sx={botonBuscar}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      <CardMedia
                        title=""
                        image={Lupa}
                        component="img"
                        alt={""}
                      />
                    </Button>
                  </Box>
                </Container>
              </form>
            </Box>
          )}
        </Formik>
      </Box>
      <Box sx={info}>
        {temperature !== undefined ? (
          <WeatherInfo temperature={temperature} />
        ) : null}
      </Box>
      <Box sx={later}>
        <WeatherLater />
      </Box>
    </>
  );
};

export default WheaterFrom;
