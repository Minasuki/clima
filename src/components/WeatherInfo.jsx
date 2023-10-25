import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/material";

const WeatherInfo = ({ temperature }) => {
  
console.log(temperature);
  return (
    <>
    {temperature ?
   <Card>
   <CardContent>
     <Typography variant="h6">Información Climática</Typography>
     <Typography variant="body1">
       Temperatura Actual: {temperature.current} °C
     </Typography>
     <Typography variant="body1">
       Temperatura Máxima: {temperature.max} °C
     </Typography>
     <Typography variant="body1">
       Temperatura Mínima: {temperature.min} °C
     </Typography>
   </CardContent>
 </Card>
   :null}
    </>
    );
};

WeatherInfo.propTypes = {
    temperature: PropTypes.object.isRequired,
  };

export default WeatherInfo;
