import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { info } from "./stylesFrom";
import { useEffect, useState } from "react";
import sol from "../../img/sun.svg";
import nieve from "../../img/nieve.svg";
import sol__nublado from "../../img/sol__nublado.svg";
import lluviecita from "../../img/lluviecita.svg";
import haze from "../../img/haze.svg";
import drizzle from "../../img/drizzle.svg";
import {
  MaxMin,
  arrows,
  flechasMaxMin,
  imagen,
  tamañoH3,
  tem,
  wind,
  windHumedal,
  windImg,
  windText,
  windTextFS,
} from "./stylesInfo";
import arrowUp from "../../img/arrowUp.svg";
import arrowDow from "../../img/arrowDow.svg";
import viento from "../../img/viento.svg";
import humedal from "../../img/humedal.svg";

const WeatherInfo = ({ weather }) => {
  const [img, setImg] = useState();

  const [roundedTemperature, setRoundedTemperature] = useState(0);
  const [roundedTemperatureMax, setRoundedTemperatureMax] = useState(0);
  const [roundedTemperatureMin, setRoundedTemperatureMin] = useState(0);

  const [velocidadViento, setVelocidadViento] = useState();

  useEffect(() => {
    if (weather) {
      switch (weather.icon) {
        case "Clear":
          setImg(sol);
          break;
        case "Clouds":
          setImg(sol__nublado);
          break;
        case "Rain":
          setImg(lluviecita);
          break;
        case "Snow":
          setImg(nieve);
          break;
        case "Mist":
          setImg(sol__nublado);
          break;
        case "Haze":
          setImg(haze);
          break;
        case "Drizzle":
          setImg(drizzle);
          break;
      }
    }
  }, [weather]);

  useEffect(() => {
    if (weather) {
      const temperature = Math.round(weather.temperature);
      const temperatureMax = Math.round(weather.temperatureMax);
      const temperatureMin = Math.round(weather.temperatureMin);

      setRoundedTemperature(temperature);
      setRoundedTemperatureMax(temperatureMax);
      setRoundedTemperatureMin(temperatureMin);
      setVelocidadViento(Math.round(weather.viento * 3.6));
    }
  }, [weather]);

  return (
    <>
      {weather ? (
        <Box sx={info}>
          <Typography variant="h4" component="h2">
            {weather.city}, {weather.country}
          </Typography>

          <Box sx={tem}>
            <Typography variant="h3" sx={tamañoH3}>
              {roundedTemperature}°
            </Typography>
            <Box sx={MaxMin}>
              <Typography variant="h4" component="h2" sx={flechasMaxMin}>
                <Typography
                  variant="h4"
                  component="span"
                  sx={{ fontSize: "2rem" }}
                >
                  <Box
                    component="img"
                    alt={"ArrowUp"}
                    src={arrowUp}
                    sx={arrows}
                  />
                </Typography>{" "}
                {roundedTemperatureMax}°
              </Typography>
              <Typography variant="h4" component="h2">
                <Typography
                  variant="h4"
                  component="span"
                  sx={{ fontSize: "2rem" }}
                >
                  <Box
                    component="img"
                    alt={"ArrowDow"}
                    src={arrowDow}
                    sx={arrows}
                  />
                </Typography>{" "}
                {roundedTemperatureMin}°
              </Typography>
            </Box>
          </Box>

          <Box
            component="img"
            alt={weather.conditionText}
            src={img}
            sx={imagen}
          />
          <Typography variant="h4" component="h2">
            {weather.conditionText}
          </Typography>

          <Box sx={windHumedal}>
            <Box sx={wind}>
              <Box component="img" alt={"viento"} src={viento} sx={windImg} />
              <Box sx={windText}>
                <Typography variant="h4" sx={windTextFS}>
                  {velocidadViento} Km/h
                </Typography>
                <Typography variant="h4" sx={windTextFS}>
                  Wind speed
                </Typography>
              </Box>
            </Box>

            <Box sx={wind}>
              <Box component="img" alt={"humedad"} src={humedal} sx={windImg} />
              <Box sx={windText}>
                <Typography variant="h4" sx={windTextFS}>
                  {weather.humedad} %
                </Typography>
                <Typography variant="h4" sx={windTextFS}>
                  Humidity
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
};

WeatherInfo.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default WeatherInfo;
