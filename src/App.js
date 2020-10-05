import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"; 
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
// import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
// import Search from "./pages/Search";
//import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  console.log(About);
  return (
    <Router>
      <Redirect to = "/about" />
      <div>
        <Navbar />
        <Switch>
           <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} /> 
          <Route exact path="/portfolio" component={Portfolio} />
           {/* <Route exact path="/resume" component={Resume} /> */}
          <Route exact path="/contact" component={Contact} />
          
          {/* <Route exact path="/search" component={Search} />    */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;