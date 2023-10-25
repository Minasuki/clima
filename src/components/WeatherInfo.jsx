import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/material";

const WeatherInfo = ({ temperature }) => {
  console.log(temperature);
  return (
    <>
      {temperature ? (
        <Card>
          <CardContent>
            <Typography variant="h3">Información Climática</Typography>
            <Typography variant="h6">{temperature.ciudad}</Typography>
            <Typography variant="body1">
              Temperatura Actual: {temperature.temperatura} °C
            </Typography>
            <Typography variant="body1">
              Temperatura Máxima: {temperature.temMax} °C
            </Typography>
            <Typography variant="body1">
              Temperatura Mínima: {temperature.temMin} °C
            </Typography>
          </CardContent>
        </Card>
      ) : null}
    </>
  );
};

WeatherInfo.propTypes = {
  temperature: PropTypes.object.isRequired,
};

export default WeatherInfo;
