import React from 'react';
import { Jumbotron, Container } from 'reactstrap';


function Homepage() {
    return (
      <div className="App">
               <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Welcome</h1>
            <p className="lead">Nice to see you, please take a look around.</p>
          </Container>
        </Jumbotron>
        <br />
        <br />
        <br />
        <div className="resumeplaceholder">
           {/* <ProjectPlaceHolder /> */}
          <br/>
          <br/>
          <br/>
           {/* <ProjectPlaceHolder /> */}
           <br/> 
           <br/>
           <br/>
           {/* <ProjectPlaceHolder /> */}
           <br/>
           <br/>
           <br/>
     
      </div>
      </div>
      </div>
    );
  }


export default Homepage;