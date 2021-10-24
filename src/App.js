import { Container } from "@mui/material";
import React from "react";
import LoginScreen from "./screens/LoginScreen";
import useStyles from "./styles/style";

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <LoginScreen />
    </Container>
  );
}

export default App;
