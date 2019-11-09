import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, Row, Col } from 'reactstrap';


function ResumePlaceHolder() {
    return (
      <div className="App">
           {/* <h1>Resume</h1>    */}
           <div>
     
     <Row>

     <Col sm="50">
        <Card body className="resume">
          {/* <CardTitle>My Resume</CardTitle> */}
          <br />
          {/* <CardText>Click below to view:</CardText> */}
         
          <CardImg top width="50%" src="https://i.imgur.com/nzhYnp3.png?1" alt="Card image cap" />
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