import { Typography } from "@mui/material";

const Agradecimientos = () => {
  return (
    <>
      Imagen de{" "}
      <a href="https://pixabay.com/es/users/kaushal_bhatol-20362848/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6052476">
        Kaushal Bhatol
      </a>{" "}
      en{" "}
      <a href="https://pixabay.com/es//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6052476">
        Pixabay
      </a>
      Imagen de{" "}
      <a href="https://pixabay.com/es/users/elg21-3764790/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7911302">
        Enrique
      </a>{" "}
      en{" "}
      <a href="https://pixabay.com/es//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7911302">
        Pixabay
      </a>
      <Typography textAlign="center" sx={{ mt: 2, fontSize: "10px" }}>
        Powered by:{" "}
        <a href="https://www.weatherapi.com/" title="Weather API">
          WeatherAPI.com
        </a>
      </Typography>
      ;
    </>
  );
};

export default Agradecimientos;
