import { Box, CssBaseline } from "@mui/material";
import WeatherInfo from "./components/today/WeatherInfo";
import WeatherForm from "./components/today/WeatherForm";
import { body } from "./stylesApp";

function App() {
  return (
    <>
    <Box sx={body}>
      <CssBaseline />
      <WeatherForm />
      <WeatherInfo />
    </Box>
    </>
  );
}

export default App;
