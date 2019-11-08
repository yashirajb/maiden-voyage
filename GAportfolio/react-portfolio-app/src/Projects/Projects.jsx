import React from 'react';
// import MainContent from '../MainContent/MainContent';
import { Jumbotron, Container } from 'reactstrap';
import ProjectPlaceHolder from './ProjectPlaceHolder/ProjectPlaceHolder';

function Projects() {
  return (
    <div className="App">
             <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Projects</h1>
          <p className="lead">A little bit of what I've been up to.</p>
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
         <ProjectPlaceHolder />
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

export default Projects;


// import React from 'react';
// import { Jumbotron, Container } from 'reactstrap';
// import ResumePlaceHolder from './ResumePlaceHolder/ResumePlaceHolder';


// function Resume() {
//   return (
//     <div className="App">
//          {/* <h1>Resume</h1>    */}
//          <div>
//       <Jumbotron fluid>
//         <Container fluid>
//           <h1 className="display-1">Fluid jumbotron</h1>
//           <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
//         </Container>
//       </Jumbotron>
//       <br />
//       <br />
//       <br />
//     <div className="resumeplaceholder">
//     <ResumePlaceHolder />
//     </div>

//     </div>
//     </div>
//   );
// }