import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"; 
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  console.log(About);
  return (
    <Router>
      <div>
        <Navbar />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} /> 
            <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/resume" component={Resume} /> 
            <Route exact path="/contact" component={Contact} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;