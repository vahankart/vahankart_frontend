import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
} from "@material-ui/core";
import useStyles from "../styles/loginStyle";
import OtpInput from "react-otp-input";
import { useState } from "react";

function OtpScreen() {
  const classes = useStyles();
  const [otp, setotp] = useState();

  const changeOTP = (event) => {
    setotp(event);
  };
  return (
    <div       className={classes.parent}>


    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"

    >
      <Grid item >
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
    </div>

  );
}

export default OtpScreen;
