import { Box, CssBaseline } from "@mui/material";
import WeatherInfo from "./components/WeatherInfo";
import WeatherForm from "./components/WeatherForm";
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
