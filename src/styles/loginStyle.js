import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    //backgroundColor: "red",
  },
  grid: {
    //borderStyle: "solid",
    height: "45vh",
    margin: "10px 0 10px 0",
    minWidth: "45vw",
    width: 500,
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
    borderRightStyle: "none",
  },
  countryCode: {
    width: 70,
    border: "1px solid #aaa",
    borderRightStyle: "none",
    outline: "none",
    height: 34,
    backgroundColor: "transparent",
    borderRadius: "5px 0 0 5px",
  },
  mobileNo: {
    border: "1px solid #aaa",
    borderLeftStyle: "none",
    outline: "none",
    height: 30,
    backgroundColor: "transparent",
    borderRadius: "0 5px 5px 0",
  },
  btn: {
    backgroundColor: "#f00",
    border: "none",
    outline: "none",
    width: "245px",
    height: 27,
    borderRadius: 5,
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
