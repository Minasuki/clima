import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { info } from "./stylesFrom";
import { useEffect, useState } from "react";
import sol from "../img/sun.svg";
import nieve from "../img/nieve.svg";
import sol__nublado from "../img/sol__nublado.svg";
import lluviecita from "../img/lluviecita.svg";
import { MaxMin, imagen, tem } from "./stylesInfo";

const WeatherInfo = ({ weather }) => {
  const [img, setImg] = useState();

  const [roundedTemperature, setRoundedTemperature] = useState(0);
  const [roundedTemperatureMax, setRoundedTemperatureMax] = useState(0);
  const [roundedTemperatureMin, setRoundedTemperatureMin] = useState(0);

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
        default:
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
            <Typography variant="h4" component="h2">
              {roundedTemperature}°C
            </Typography>
            <Box sx={MaxMin}>
              <Typography variant="h4" component="h2">
                <Typography
                  variant="h4"
                  component="span"
                  sx={{ fontSize: "2rem" }}
                >
                  &uarr;
                </Typography>{" "}
                {roundedTemperatureMax}°C
              </Typography>
              <Typography variant="h4" component="h2">
                <Typography
                  variant="h4"
                  component="span"
                  sx={{ fontSize: "2rem" }}
                >
                  &darr;
                </Typography>{" "}
                {roundedTemperatureMin}°C
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
        </Box>
      ) : null}
    </>
  );
};

WeatherInfo.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default WeatherInfo;
