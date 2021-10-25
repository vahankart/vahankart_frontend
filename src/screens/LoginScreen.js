import { Container, Grid, Select, TextField, Button } from "@material-ui/core";
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
                  <Select className={classes.select}></Select>
                  <TextField type="tel" className={classes.textField} />
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
