import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import humedal from "../../img/humedal.svg";
import viento from "../../img/viento.svg";
import sol from "../../img/sun.svg";
import nieve from "../../img/nieve.svg";
import sol__nublado from "../../img/sol__nublado.svg";
import lluviecita from "../../img/lluviecita.svg";
import mist from "../../img/mist.svg";
import { useEffect, useState } from "react";
import {
  imagen,
  info,
  principal,
  temp,
  wind,
  windHumedal,
  windImg,
  windText,
  windTextFS,
} from "./styles";

const WeatherLater = ({ weatherLater }) => {
  const [filteredWeather, setFilteredWeather] = useState([]);

  useEffect(() => {
    if (weatherLater && weatherLater.length > 0) {
      // 1. Obtén las fechas únicas de weatherLater
      const uniqueDates = Array.from(
        new Set(weatherLater.map((item) => item.tiempoText.split(" ")[0]))
      );

      // 2. Ordena las fechas en orden ascendente
      uniqueDates.sort();

      // 3. Filtra los elementos con las fechas deseadas
      const filteredData = uniqueDates.slice(1).map((date) => {
        return weatherLater.find((item) => item.tiempoText.includes(date));
      });

      setFilteredWeather(filteredData);
    }
  }, [weatherLater]);

  return (
    <>
      {weatherLater && weatherLater.length > 0 ? (
        <Box sx={principal}>
          {filteredWeather.map((weatherItem, index) => (
            <Box key={index} sx={info}>
              <Box>
                <Typography variant="h3" sx={temp}>
                  {Math.round(weatherItem.temperature)}°
                </Typography>
              </Box>

              <Box
                component="img"
                alt={weatherItem.icon}
                src={
                  (weatherItem.icon === "Clouds" && sol__nublado) ||
                  (weatherItem.icon === "Clear" && sol) ||
                  (weatherItem.icon === "Rain" && lluviecita) ||
                  (weatherItem.icon === "Snow" && nieve) ||
                  (weatherItem.icon === "Mist" && mist)
                }
                sx={imagen}
              />
              <Typography variant="h4" component="h2">
                {weatherItem.conditionText}
              </Typography>

              <Box sx={windHumedal}>
                <Box sx={wind}>
                  <Box
                    component="img"
                    alt={"viento"}
                    src={viento}
                    sx={windImg}
                  />
                  <Box sx={windText}>
                    <Typography variant="h4" sx={windTextFS}>
                      {Math.round(weatherItem.viento * 3.6)} Km/h
                    </Typography>
                    <Typography variant="h4" sx={windTextFS}>
                      Wind speed
                    </Typography>
                  </Box>
                </Box>

                <Box sx={wind}>
                  <Box
                    component="img"
                    alt={"humedad"}
                    src={humedal}
                    sx={windImg}
                  />
                  <Box sx={windText}>
                    <Typography variant="h4" sx={windTextFS}>
                      {weatherItem.humedad} %
                    </Typography>
                    <Typography variant="h4" sx={windTextFS}>
                      Humidity
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      ) : null}
    </>
  );
};

WeatherLater.propTypes = {
  weatherLater: PropTypes.array.isRequired,
};

export default WeatherLater;
