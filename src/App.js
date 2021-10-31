import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import SideNav from './components/SideNav/SideNav'
import Carousel from './components/Carousel/Carousel'
import { ThemeProvider, createTheme } from '@mui/material/styles';


const THEME = createTheme({
  typography: {
   "fontFamily": `"Open Sans","Roboto", "Helvetica", "Arial", sans-serif`,
    h2: {
      "fontWeight": "700"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <div className="App">
          <Navbar />
          {/* <SideNav /> */}
          <Carousel />
          {/* <Footer/> */}
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App;
