import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


function ResumePlaceHolder() {
    return (
      <div className="App">
           {/* <h1>Resume</h1>    */}
           <div>
     
     <Row>

     <Col sm="200">
        <Card body className="resume">
          {/* <CardTitle>My Resume</CardTitle> */}
          <br />
          <CardText>Click below to view:</CardText>
         
        
          {/* <Button variant="secondary"> <a href="https://docs.google.com/document/d/1rvWvkS7De7f_hSjvhVlltJyNh6rOYfp0el3Zyn405w8/edit?usp=sharing">Resume</a></Button> */}
          <a href="https://docs.google.com/document/d/1rvWvkS7De7f_hSjvhVlltJyNh6rOYfp0el3Zyn405w8/edit?usp=sharing"><Button>Yashira Jacobs Resume</Button></a>
        </Card>
<br />
<br />
<br />
<br />
<br />

      </Col>


     </Row>
  
      </div>
      </div>
    );
  }




export default ResumePlaceHolder;