import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <Router>
      <div className="App">
        <h1>VahanKArt</h1>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
