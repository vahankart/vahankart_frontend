import { Button } from "@mui/material";
import { Container, Grid, Select, TextField } from "@mui/material";
import useStyles from "../styles/loginStyle";
function LoginScreen() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Container className={classes.grid}></Container>
        </Grid>
        <Grid item xs={6}>
          <Container className={`${classes.grid} ${classes.form}`}>
            <div className={classes.head}>
              <span className={classes.bold}>Login </span>
              <span> or</span>
              <span className={classes.bold}> SignUp</span>
            </div>
            <div className={classes.content}>
              <form method="POST">
                <div className="inputTel">
                  <select className={classes.countryCode}>
                    <option>📩+91</option>
                  </select>
                  <input
                    type="tel"
                    className={classes.mobileNo}
                    placeholder="Mobile number"
                  />
                </div>
                <div className={classes.btnC}>
                  <button className={classes.btn}>Continue</button>
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
