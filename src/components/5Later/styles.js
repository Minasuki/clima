export const principal = {
  display: "flex",
  width: "70%",
  justifyContent: "space-between",

  "@media(max-width: 1280px)": {
    width: "75%",
  },

  "@media(max-width: 1024px)": {
    width: "100%",
  },

  "@media(max-width: 540px)": {
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "space-evenly",
  },
};

export const info = {
  width: "18%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textAlign: "center",
  height: "95%",
  border: "1px solid rgba(0, 0, 0, 0.2)",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
  backgroundColor: "rgba(255, 255, 255, 0.4)",
  padding: "15px",
  borderRadius: "15px",
  backdropFilter: "blur(15px)",
  flexDirection: "column",
  mt: 1,
  gap: "5px",

  "@media(max-width: 540px)": {
    width: "40%",
    height: "auto",
  },
};

export const temp = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
};

export const imagen = {
  margin: "0 auto",
  width: "85px",
  height: "85px",
};

export const windHumedal = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: 1,
  alignItems: "flex-start",
};

export const wind = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 15px",
};

export const windImg = {
  width: "50px",
  height: "50px",
  paddingRight: "5px",
};

export const windText = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

export const windTextFS = {
  fontSize: 18,
};

export const condition = {
  fontSize: 24,
};
