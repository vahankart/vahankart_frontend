import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    //backgroundColor: "red",
    height: "120vh",
    width: "100%",
    "@media (max-width:450px)": {
      margin: 0,
      padding: 0,
    },
  },
  grid: {
    //borderStyle: "solid",
    height: 300,
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
    justifyContent: "center",
    alignItems: "end",
  },
  svgCard: {
    backgroundColor: "transparent",
    border: 0,
    position: "relative",
    boxShadow: "none",
    width: 270,
    height: 250,
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
  },
});

export default useStyles;
