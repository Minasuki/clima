import montaña from "./img/mountains.png";

export const body = {
  backgroundImage: `url(${montaña})`,
  position: "relative",
  width: "100vw",
  height: "100vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center center",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "wrap",

  "@media(max-width: 1024px)": {
    height:'100%',
  },

  "@media(max-width: 768px)": {
    backgroundSize: "cover",
    backgroundAttachment: "scroll",
  },
};
