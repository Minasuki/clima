import { Box, CssBaseline } from "@mui/material";
import WeatherInfo from "./components/today/WeatherInfo";
import WeatherForm from "./components/today/WeatherForm";
import { body } from "./stylesApp";
import WeatherLater from "./components/5Later/WeatherLater";

function App() {
  return (
    <>
    <Box sx={body}>
      <CssBaseline />
      <WeatherForm />
      <WeatherInfo />
      <WeatherLater />
    </Box>
    </>
  );
}

export default App;
