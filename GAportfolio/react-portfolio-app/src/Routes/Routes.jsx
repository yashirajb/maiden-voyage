import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from '../Nav/Nav';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Homepage from '../Homepage/Homepage';
// import './App.css';
// import FooterContainer from './FooterContainer/FooterContainer';




function Routes() {
    return (
      <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home} />
        {/* <About /> */}
        <Route path="/about" component={About} />
        {/* <Projects /> */}
        <Route path="/projects" component={Projects} />
        {/* <Resume /> */}
        <Route path="/resume" component={Resume} />
        {/* <Contact />  */}
        <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <div>
      </div>
      </Router>

      
    
    );
  }
  
  const Home = () => (
    <div>
  <Homepage />
    </div>
  )
  
  export default Routes; 