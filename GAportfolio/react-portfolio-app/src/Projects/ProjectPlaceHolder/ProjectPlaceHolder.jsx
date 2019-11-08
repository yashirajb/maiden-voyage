import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


function ProjectPlaceHolder() {
    return (
      <div className="App">
           {/* <h1>Resume</h1>    */}
           <div>
     
     <Row>

     <Col sm="10">
        <Card body>
          <CardTitle>Chicago School Finder App</CardTitle>
          <CardText>This following app was created to help Chicago caregivers find a suitable public K-12 school for the children in their care.  </CardText>
          <a href="https://eager-jackson-a46f14.netlify.com"><Button>Chicago School Finder App</Button></a>
        </Card>
      </Col>


     </Row>
  
      </div>
      </div>
    );
  }




export default ProjectPlaceHolder;