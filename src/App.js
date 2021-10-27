import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1>VahanKArt</h1>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
