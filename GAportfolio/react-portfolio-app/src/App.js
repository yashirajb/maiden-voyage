import React from 'react';
import Nav from './Nav/Nav';
import About from './About/About';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';
import './App.css';
//you can rename browserrouter to whatever you'd like, we also want switch and route 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//route renders out a component based on the url




function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      {/* <About /> */}
      <Route path="/about" component={About} />
      {/* <Projects /> */}
      <Route path="/projects" component={Projects} />
      {/* <Resume /> */}
      <Route path="/resume" component={Resume} />
      {/* <Contact />  */}
      <Route path="/contact" component={Contact} />
    </div>
    </Router>
  );
}

export default App;
