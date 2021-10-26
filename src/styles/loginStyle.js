import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    //backgroundColor: "red",
    width: "100%",
    "@media (max-width:450px)": {
      margin: 0,
      padding: 0,
    },
  },
  grid: {
    //borderStyle: "solid",
    height: "240px",
    margin: "10px 0 10px 0",
    width: 400,
    padding: "auto",
    "@media (max-width:450px)": {
      width: "100%",
      margin: 0,
      padding: 0,
      height: "260px",
    },
  },
  form: {
    backgroundColor: "whitesmoke",
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
    fontSize: 20,
    fontFamily: "monospace",
  },
  select: {
    border: "1px solid #aaa",
    borderRight: 0,
    borderRadius: "5px 0 0 5px",
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
    "& div": {
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
    backgroundColor: "red",
    outline: "none",
    width: "245px",
    height: 27,
    borderRadius: 5,
    "&:hover": {
      backgroundColor: "#d00",
    },
  },

  btnLabel: {
    color: "white",
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
