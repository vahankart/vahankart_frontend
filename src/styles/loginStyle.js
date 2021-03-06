import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  parent:{
    backgroundColor: "#E8DEF1",
    height: "100vh",
  },
  root: {
   
    height: "120vh",
    width: "100%",
    "@media (max-width:450px)": {
      margin: 0,
      padding: 0,
    },
  },
  grid: {
    //borderStyle: "solid",
    height: 320,
    margin: "auto",
    width: "40vw",
    padding: "auto",
    "@media (max-width:450px)": {
      width: 300,
      margin: 0,
      padding: 0,
      height: "260px",
    },
  },
  svgPos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  svgCard: {
    backgroundColor: "transparent",
    border: 0,
    position: "relative",
    boxShadow: "none",
    marginBottom: "-4rem",
  },

  form: {
    backgroundColor: "white",
    textAlign: "center",
    padding: 10,
  },
  content: {
    marginTop: 30,
    paddingTop: 30,
  },

  head: {
    marginTop: 10,
  },
  bold: {
    fontWeight: 700,
    fontSize: 25,
    fontFamily: "monospace",
  },
  select: {
    border: "1px solid #aaa",
    borderRight: 0,
    borderRadius: "5px 0 0 5px",
    width: "15%",
    height: 52,
    padding: 0,
    "& .MuiSelect-select": {
      paddingRight: 5,
    },
    "&:before": {
      display: "none",
    },
    "&:after": {
      display: "none",
    },
  },
  textField: {
    border: "1px solid #aaa",
    borderLeft: 0,
    borderRadius: "0 5px 5px 0",
    width: "45%",
    height: 50,
    "& div": {
      color: "#aaa",
      paddingLeft: "10px",
      paddingTop: "10px",
      "&:before": {
        display: "none",
      },
      "&:after": {
        display: "none",
      },
    },
  },

  btn: {
    border: 0,
    backgroundColor: "#d00",
    outline: "none",
    width: "60%",
    height: 40,
    borderRadius: 5,
    textTransform: "none",
    margin: 10,
    "&:hover": {
      backgroundColor: "#d00",
    },
  },

  btnLabel: {
    color: "white",
    fontWeight: "bold",
    fontVariantCaps: "normal",
  },
  btnC: {
    marginTop: "30px",
  },
  skip: {
    color: "#aaa",
    marginTop: 10,
    textDecoration: "underline",
  },
  otpContainer: {
    height: 350,
    minWidth: 500,
    margin: 20,
    width: "45vw",
    backgroundColor: "white",
    position: "relative",
    top: "200px",
    padding: 0,
    display: "flex",
    flexDirection: "row",
    "@media (max-width:450px)": {
      width: 300,
      margin: 0,
      height: "400px",
    },
  },

  optForm: {
    flex: 0.7,
    margin: "auto",
  },
  optSvg: {
    flex: 0.3,
    margin: 0,
    padding: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    position: "relative",
    bottom: 55,
    left: 15,
    width: 170,
  },

  otpHead: {
    fontWeight: "500",
    fontSize: 25,
    fontFamily: "monospace",
  },

  otpInpt: {
    border: 0,
    borderBottom: "2px solid #000",
    fontSize: 25,
    minWidth: 48,
    height: 31,
    marginTop: 30,
    marginBottom: 25,
    fontWeight: "bold",
  },
});

export default useStyles;
