import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import SideNav from './components/SideNav/SideNav'
import ProductDetails from './components/ProductDetails/ProductDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SideNav />
        {/* <ProductDetails></ProductDetails> */}
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
