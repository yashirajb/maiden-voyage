import React from 'react';
import Paragraph1 from './Paragraph1/Paragraph1';
import Photo from './Photo/Photo';
import Paragraph2 from './Paragraph 2/Paragraph2';
// import MainContent from '../MainContent/MainContent';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Photo2 from './Photo 2/Photo2';
import { Jumbotron, Container } from 'reactstrap';


function About() {
  return (
    <div className="App">
        <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-2">About Me</h1>
          <Photo2 />
        </Container>
      </Jumbotron>
        {/* <h1>About Me</h1> */}
        <br />
        <br />

        <div>
            {/* <Photo2 /> */}
            <br />
            <br />
            <Paragraph1 />
            <br />
            <br />
            <Photo />  
            <br />
            <br />
            <Paragraph2 />
        {/* <MainContent /> */}
        </div>
        <br />
        <br />
        <br />
        {/* <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row> */}
    <br />
    <br />
    <br />
    <br />
 

    </div>
  
  );
  
}



export default About;