import {
  Container,
  Grid,
  Select,
  TextField,
  Button,
  MenuItem,
} from "@material-ui/core";
import useStyles from "../styles/loginStyle";
import { useState } from "react";

function LoginScreen() {
  const classes = useStyles();
  const [code, setcode] = useState("+91");
  const [number, setnumber] = useState("");

  const changeCode = (event) => {
    setcode(event.target.value);
    console.log(code);
  };

  const changeNo = (event) => {
    setnumber(event.target.value);
    console.log(number);
  };

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Container className={classes.grid}></Container>
        </Grid>
        <Grid item>
          <Container className={`${classes.grid} ${classes.form}`}>
            <div className={classes.head}>
              <span className={classes.bold}>Login </span>
              <span> or</span>
              <span className={classes.bold}> SignUp</span>
            </div>
            <div className={classes.content}>
              <form method="POST">
                <div className="inputTel">
                  <Select
                    className={classes.select}
                    value={code}
                    onChange={changeCode}
                  >
                    <MenuItem value="+91">😀+91</MenuItem>
                  </Select>
                  <TextField
                    type="tel"
                    className={classes.textField}
                    value={number}
                    onChange={changeNo}
                  />
                </div>
                <div className={classes.btnC}>
                  <Button
                    classes={{ root: classes.btn, label: classes.btnLabel }}
                  >
                    Continue
                  </Button>
                </div>
                <div className={classes.skip}>
                  <u>Skip</u>
                </div>
              </form>
            </div>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginScreen;
