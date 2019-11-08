import React, {Component} from 'react';
// import Nav from './Nav/Nav';
// import About from './About/About';
// import Projects from './Projects/Projects';
// import Resume from './Resume/Resume';
// import Contact from './Contact/Contact';
import './App.css';
//you can rename browserrouter to whatever you'd like, we also want switch and route 
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import MainFooter from './FooterContainer/MainFooter';
// import SocialButtonsContainer from './SocialButtonsContainer/SocialButtonsContainer';
// import MainFooter from './FooterContainer/MainFooter';
import FooterContainer from './FooterContainer/FooterContainer';
import Routes from './Routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContent from './MainContent/MainContent';
//route renders out a component based on the url
//exact makes only the component referenced by the slash work
//swirtch as soon as it finds the route with the specific path, that's what will render out


// function App() {
//   return (
//     <Router>
//     <div className="App">
//       <Nav />
//       <Switch>
//       <Route path="/" exact component={Home} />
//       {/* <About /> */}
//       <Route path="/about" component={About} />
//       {/* <Projects /> */}
//       <Route path="/projects" component={Projects} />
//       {/* <Resume /> */}
//       <Route path="/resume" component={Resume} />
//       {/* <Contact />  */}
//       <Route path="/contact" component={Contact} />
//       </Switch>
//     </div>
//     <div>
//     <FooterContainer />
//     </div>
//     </Router>
  
//   );
// }

// const Home = () => (
//   <div>
//   <h1>Home Page</h1>
//   </div>
// )




class App extends Component {
        constructor(){
             super();
             this.state={

             }
            }   

render(){
return (
  <div>
    <Routes />
    <br />
    <br />
    {/* <MainContent /> */}
    <FooterContainer />   
  </div>


)

}
}

export default App;

