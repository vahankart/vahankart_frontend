import {
  Container,
  Grid,
  Select,
  TextField,
  Button,
  MenuItem,
  Typography,
  Card,
  CardMedia,
} from "@material-ui/core";
import useStyles from "../styles/loginStyle";
import { useState } from "react";
import OtpInput from "react-otp-input";

function LoginScreen() {
  const classes = useStyles();
  const [code, setcode] = useState("+91");
  const [number, setnumber] = useState("");
  const [showLogin, setshowLogin] = useState(true);
  const [otp, setotp] = useState();
  const changeCode = (event) => {
    setcode(event);
    console.log(code);
  };

  const changeNo = (event) => {
    setnumber(event.target.value);
    console.log(number);
  };

  const displayOTP = () => {
    setshowLogin(false);
  };

  const changeOTP = (event) => {
    setotp(event);
  };

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          style={{ marginTop: 30, display: showLogin ? "flex" : "none" }}
        >
          <Container className={`${classes.grid} ${classes.svgPos}`}>
            <Card className={classes.svgCard}>
              <CardMedia
                component="img"
                height="250"
                image="/images/Group374.svg"
                alt="svg"
              />
            </Card>
          </Container>
        </Grid>
        <Grid item style={{ display: showLogin ? "flex" : "none" }}>
          <Container className={`${classes.grid} ${classes.form}`}>
            <div className={classes.head}>
              <Typography
                variant="h1"
                display="inline"
                className={classes.bold}
              >
                Login
              </Typography>
              <Typography display="inline"> or </Typography>
              <Typography display="inline" className={classes.bold}>
                Sign Up
              </Typography>
            </div>
            <div className={classes.content}>
              <form method="POST">
                <div className="inputTel">
                  <Select
                    className={classes.select}
                    value={code}
                    onChange={changeCode}
                  >
                    <MenuItem value="+91"> +91</MenuItem>
                  </Select>
                  <TextField
                    type="tel"
                    className={classes.textField}
                    value={number}
                    onChange={changeNo}
                    placeholder="Mobile number"
                  />
                </div>
                <div className={classes.btnC}>
                  <Button
                    classes={{ root: classes.btn, label: classes.btnLabel }}
                    onClick={displayOTP}
                  >
                    Continue
                  </Button>
                </div>
                <Typography className={classes.skip}>Skip</Typography>
              </form>
            </div>
          </Container>
        </Grid>

        {/* OTP FORM */}

        <Grid item style={{ display: showLogin ? "none" : "flex" }}>
          <Container className={classes.otpContainer}>
            <Container className={classes.optForm}>
              <Typography variant="h5" className={classes.optHead}>
                Verify with OTP
              </Typography>

              <OtpInput
                inputStyle={classes.otpInpt}
                value={otp}
                onChange={changeOTP}
                numInputs={4}
                separator={<span>&nbsp;&nbsp;</span>}
                placeholder="6666"
              />
              <Typography variant="caption">Resend OTP</Typography>

              <Typography className={classes.skip}>Skip</Typography>
            </Container>
            <Container className={classes.optSvg}>
              <Card className={classes.optSvg}>
                <CardMedia
                  component="img"
                  height="470"
                  image="/images/Group370.svg"
                  alt="svg"
                />
              </Card>
            </Container>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LoginScreen;
