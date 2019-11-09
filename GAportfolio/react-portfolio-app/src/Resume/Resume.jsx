import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import ResumePlaceHolder from './ResumePlaceHolder/ResumePlaceHolder';


function Resume() {
  return (
    <div className="App">
         {/* <h1>Resume</h1>    */}
         <div>
      <Jumbotron fluid >
        <Container fluid>
          <h1 className="display-3">Resume</h1>
          <p className="lead">A bit of my background, skills, and accomplishments. </p>
        </Container>
      </Jumbotron>
      <br />
      <br />
      <br />
    <div className="resumeplaceholder">
    <ResumePlaceHolder />
    </div>

    </div>
    </div>
  );
}

export default Resume;