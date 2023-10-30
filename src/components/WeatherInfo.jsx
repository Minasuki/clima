import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { info } from "./stylesFrom";
import { useEffect, useState } from "react";
import sol from "../img/sun.svg";
import nieve from "../img/nieve.svg";
import sol__nublado from "../img/sol__nublado.svg";
import lluviecita from "../img/lluviecita.svg";

const WeatherInfo = ({ weather }) => {
  const [img, setImg] = useState();

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

  return (
    <>
      {weather ? (
        <Box sx={info}>
          <Typography variant="h4" component="h2">
            {weather.city}, {weather.country}
          </Typography>
          <Typography variant="h4" component="h2">
            Temperatura {weather.temperature}°C
          </Typography>
          <Box
            component="img"
            alt={weather.conditionText}
            src={img}
            sx={{ margin: "0 auto" }}
          />
          <Typography variant="h4" component="h2">
            {weather.conditionText}
          </Typography>
          <Typography variant="h4" component="h2">
            Temperatura Maxica {weather.temperatureMax}°C, Temperatura Minima{" "}
            {weather.temperatureMin}°C
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
