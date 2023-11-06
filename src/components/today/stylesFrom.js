export const principal = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: "1%",
  flexWrap: "wrap",

  "@media(max-width: 540px)": {
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  },
};

export const container = {
  width:'50%',
  mt: 2,
  display: "flex",

  "@media(max-width: 1280px)": {
    width: "50%",
  },

  "@media(max-width: 1024px)": {
    width: "50%",
  },

  "@media(max-width: 540px)": {
    width: "90%",
  },
};

export const formulario = {
  width: "70%",
  height: "240px",
  border: "1px solid rgba(0, 0, 0, 0.2)",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
  backgroundColor: "rgba(255, 255, 255, 0.4)",
  padding: "15px",
  borderRadius: "15px",
  backdropFilter: "blur(15px)",
  display:'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',

  "@media(max-width: 1280px)": {
    width: "100%",
  },

  "@media(max-width: 540px)": {
    height: "100%",
  },
};

export const informacion = {
  width: "30%",
  display: "flex",

  "@media(max-width: 1024px)": {
    width: "40%",
  },

  "@media(max-width: 768px)": {
    width: "50%",
  },

  "@media(max-width: 540px)": {
    width: "90%",
    justifyContent: "center",
  },
};

export const informacionLater = {
  width: "95%",
  display: "flex",
};

export const info = {
  width: "90%",
  display: "grid",
  textAlign: "center",
  height: "100%",
  border: "1px solid rgba(0, 0, 0, 0.2)",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
  backgroundColor: "rgba(255, 255, 255, 0.4)",
  padding: "15px",
  borderRadius: "15px",
  backdropFilter: "blur(15px)",

  "@media(max-width: 1280px)": {
    gap: 1,
  },
};

export const textTitulo = {
  fontSize: 44,

  "@media(max-width: 1024px)": {
    fontSize: 36,
  },
};
