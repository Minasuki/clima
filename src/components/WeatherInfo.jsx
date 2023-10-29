import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { info } from "./stylesFrom";

const WeatherInfo = ({ weather }) => {
  return (
    <>
      {weather ? (
        <Box
          sx={info}
        >
          <Typography variant="h4" component="h2">
            {weather.city}, {weather.country}
          </Typography>
          <Box
            component="img"
            alt={weather.conditionText}
            src={weather.icon}
            sx={{ margin: "0 auto" }}
          />
          <Typography variant="h5" component="h3">
            {weather.temperature} °C
          </Typography>
          <Typography variant="h6" component="h4">
            {weather.conditionText}
          </Typography>
        </Box>
      ):null}
    </>
  );
};

WeatherInfo.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default WeatherInfo;
