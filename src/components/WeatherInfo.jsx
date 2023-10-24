import PropTypes from 'prop-types';

const WeatherInfo = ({weatherData}) => {
    return ( 
    <>
    {weatherData.coord}
    </> );
}

WeatherInfo.propTypes = {
    weatherData: PropTypes.object.isRequired,
}
 
export default WeatherInfo;