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
// import { format, addDays, parse } from "date-fns";

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
console.log(filteredWeather);
  return (
    <>
      {weatherLater && weatherLater.length > 0 ? (
        <Box>
          {filteredWeather.map((weatherItem, index) => (
            <Box key={index}>
              <Box>
                <Typography variant="h3">
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
              />
              <Typography variant="h4" component="h2">
                {weatherLater.conditionText}
              </Typography>

              <Box>
                <Box>
                  <Box component="img" alt={"viento"} src={viento} />
                  <Box>
                    <Typography variant="h4">
                      {Math.round(weatherItem.viento * 3.6)} Km/h
                    </Typography>
                    <Typography variant="h4">Wind speed</Typography>
                  </Box>
                </Box>

                <Box>
                  <Box component="img" alt={"humedad"} src={humedal} />
                  <Box>
                    <Typography variant="h4">
                      {weatherItem.humedad} %
                    </Typography>
                    <Typography variant="h4">Humidity</Typography>
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

// import { LoadingButton } from "@mui/lab";
// import {
//   Box,
//   Container,
//   TextField,
//   Typography,
//   InputAdornment,
//   CardMedia,
// } from "@mui/material";
// import { useState } from "react";
// import locacion from "../img/locacion.svg";
// import WeatherInfo from "./WeatherInfo";
// import { container, formulario, informacion, principal } from "./stylesFrom";

// const API_WEATHER = import.meta.env.VITE_SOME_KEY;

// export default function WeatherForm() {
//   const [city, setCity] = useState("");
//   const [error, setError] = useState({
//     error: false,
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const [weather, setWeather] = useState({
//     city: "",
//     country: "",
//     temperature: "",
//     temperatureMax: "",
//     temperatureMin: "",
//     conditionText: "",
//     icon: "",
//     viento:"",
//     humedad: '',
//   });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setError({ error: false, message: "" });
//     setLoading(true);

//     try {
//       if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };
// //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
//       const res = await fetch(
//         `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_WEATHER}&units=metric`
//       );
//       const data = await res.json();

//       console.log(data);

//       setWeather({
//         city: data.city.name,
//         country: data.city.country,
//         temperature: data.list[0].main.temp,
//         conditionText: data.list[0].weather[0].description,
//         temperatureMax: data.list[0].main.temp_max,
//         temperatureMin: data.list[0].main.temp_min,
//         icon: data.list[0].weather[0].main,
//         viento: data.list[0].wind.speed,
//         humedad: data.list[0].main.humidity,
//       });
//     } catch (error) {
//       console.log(error);
//       setError({ error: true, message: error.message });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box sx={principal}>
//       <Container sx={container}>
//         <Box sx={formulario}>
//           <Typography variant="h3" component="h1" align="center" gutterBottom fontSize={44}>
//             ClearSky: Your Prognosis
//           </Typography>
//           <Box
//             sx={{ display: "grid", gap: 2 }}
//             component="form"
//             autoComplete="off"
//             onSubmit={onSubmit}
//           >
//             <TextField
//               id="city"
//               label="Ciudad"
//               variant="outlined"
//               size="small"
//               required
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               error={error.error}
//               helperText={error.message}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <CardMedia
//                       component="img"
//                       height="22"
//                       image={locacion}
//                       alt="Paella dish"
//                     />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <LoadingButton
//               type="submit"
//               variant="contained"
//               loading={loading}
//               loadingIndicator="Buscando..."
//             >
//               Buscar
//             </LoadingButton>
//           </Box>
//         </Box>
//       </Container>
//       <Box sx={informacion}>
//         {weather.city && <WeatherInfo weather={weather} />}
//       </Box>
//     </Box>
//   );
// }
