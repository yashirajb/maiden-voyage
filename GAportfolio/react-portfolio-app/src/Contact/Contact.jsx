// import React, {Component} from 'react';
import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import ParagraphContact1 from './Paragraph1/Paragraph1';
import { Jumbotron, Container } from 'reactstrap';

function Contact() {
    return (
      <div className="App">
      
          <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Let's Keep In Touch</h1>
          <p className="lead">Feel free to send me an email or connect with me through social media: </p>
        </Container>
      </Jumbotron>
          {/* <h1>Let's Keep In Touch</h1> */}
          <div>
              {/* <Paragraph1 /> */}
              <br />
              <br />
              {/* <Photo />   */}
              <br />
              <br />
              <br />
            {/* <ParagraphContact1 /> */}
          {/* <MainContent /> */}
          </div>
          <br />
          <br />
       
          <Row>
        <Col sm="6">
       
          <Card body className="email">
            <CardTitle>Email:</CardTitle>
            <CardText>yashirajacobs@gmail.com</CardText>
            {/* <Button>Go somewhere</Button> */}
          </Card>
        </Col>
        <br />
        <br />
        <Col sm="6">
     
          <Card body className="linkedin">
            <CardTitle>LinkedIn</CardTitle>
            <CardText>https://www.linkedin.com/in/yashirajacobs</CardText>
            {/* <Button>Go somewhere</Button> */}
          </Card>
          <br />
          <br />
        </Col>   
        <br />
        <br />
        <Col sm="6">
       
          <Card body className="github">
            <CardTitle>GitHub</CardTitle>
            <CardText>https://github.com/yashirajb</CardText>
            {/* <Button>Go somewhere</Button> */}
          </Card>
        </Col>   
        <br />
        <br />
        <Col sm="6">
          <Card body className="medium">
           <CardTitle>Medium</CardTitle>
            <CardText>@yashirajacobs</CardText>
            {/* <Button>Go somewhere</Button> */}
          </Card>
          <br />
          <br />
          <br />
        </Col>  
         
      </Row>


<br />
<br />
<br />
<br />
<br />

      </div>

    );
  }

// class Contact extends Component {
//     render(){
//         return(
//             <div className="contact-body">
//                 {/* <Grid className="contact-grid">
//                     <Cell col={6}>half page</Cell>
//                     <Cell col={6}>half page</Cell>
//                 </Grid> */}

//             </div>
//         )
//     }
// }



// function Contact() {
//   return (
//     <div className="App">
//         <h1>Contact</h1>
//     </div>
//   );
// }

export default Contact;