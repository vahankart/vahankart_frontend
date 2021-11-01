import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import SideNav from './components/SideNav/SideNav'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/side" component={SideNav} />
          <Route path="/cart" component={Cart} />
          </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
