export const container = {
  maxWidth: "sm",
  position: "relative",
  width: "400px",
  height: "555px",
  background: "rgba(255, 255, 255, .1)",
  border: "2px solid rgba(255, 255, 255, .2)",
  borderRadius: "16px",
  padding: "20px",
};

export const caja = {
  position: "relative",
  width: "100%",
  height: "55px",
  display: "flex",
  alignItems: "center",
  gap: 2,
  // background: "#ECEFF1",
};

export const inputText = {
  flex: 1,
  position: "absolute",
  height: "100%",
  background: "transparent",
  border: "2px solid rgba(255, 255, 255, .2)",
  outline: "none",
  borderRadius: "10px",
  fontSize: "22px",
  color: "black",
  fontWeight: "700",
  textTransform: "uppercase",
  padding: "0 48px 0 42px",
  "&::placeholder": {
    color: "#fff",
    textTransform: "capitalize",
  },
};

export const botonBuscar = {
  position: "absolute",
  right: 0,
  width: "40px",
  height: "100%",
  background: "transparent",
  border: "none",
  outline: "none",
  fontSize: "28px",
  color: "#fff",
  padding: "0 15px 0 15px",
  cursor: "pointer",
};

//           <i
//           className="bx bxs-map"
//           sx={{
//             position: 'absolute',
//             left: '10px',
//             fontSize: '28px',
//           }}
//         ></i>
