import { CssBaseline } from "@mui/material";
import WeatherInfo from "./components/WeatherInfo";
import WeatherForm from "./components/WeatherForm";

function App() {
  return (
    <>
      <CssBaseline />
      <WeatherForm />
      <WeatherInfo />
    </>
  );
}

export default App;
