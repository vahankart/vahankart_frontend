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


function LoginScreen() {
  const classes = useStyles();
  const [code, setcode] = useState("+91");
  const [number, setnumber] = useState("");

  const changeCode = (event) => {
    setcode(event);
  };

  const changeNo = (event) => {
    setnumber(event.target.value);
  };

  return (

    <div className={classes.parent}>
    <Container className={classes.root}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
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
        <Grid item >
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
                  >
                    Continue
                  </Button>
                </div>
                <Typography className={classes.skip}>Skip</Typography>
              </form>
            </div>
          </Container>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
}

export default LoginScreen;
