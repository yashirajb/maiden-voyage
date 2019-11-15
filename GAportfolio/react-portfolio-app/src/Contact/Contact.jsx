// import React, {Component} from 'react';
import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, Row, Col } from 'reactstrap';
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
       
          <Card style={{border: '10px solid orange'}} body className="email">
           {/* <CardImg className="gmailImage"top width="50%" src="https://i.imgur.com/zgddV8h.png" alt="Card image cap" />   */}
           <div className="emailImage">
           <svg width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z"/></svg>          </div>
            <br />
            <CardTitle>Email:</CardTitle>
            <CardText>yashirajacobs@gmail.com</CardText>
            {/* <Button>Go somewhere</Button> */}
          </Card>
        </Col>
        <br />
        <br />
        <Col sm="6">
     
          <Card style={{border: '10px solid orange'}} body className="linkedin">
            <div className="linkedInImage">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg>
          </div>
          <br />
            {/* <CardImg top width="20%" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyem0tMiA4YzAgLjU1Ny0uNDQ3IDEuMDA4LTEgMS4wMDhzLTEtLjQ1LTEtMS4wMDhjMC0uNTU3LjQ0Ny0xLjAwOCAxLTEuMDA4czEgLjQ1MiAxIDEuMDA4em0wIDJoLTJ2Nmgydi02em0zIDBoLTJ2Nmgydi0yLjg2MWMwLTEuNzIyIDIuMDAyLTEuODgxIDIuMDAyIDB2Mi44NjFoMS45OTh2LTMuMzU5YzAtMy4yODQtMy4xMjgtMy4xNjQtNC0xLjU0OHYtMS4wOTN6Ii8+PC9zdmc+" alt="Card image cap" /> */}
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
       
          <Card style={{border: '10px solid orange'}} body className="github">
          <div className="githubImage">
           <svg width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/></svg>          
           </div>
          <br />
            {/* <CardImg top width="50%" src="https://i.imgur.com/z8N939p.png" alt="Card image cap" /> */}
            <CardTitle>GitHub</CardTitle>
            <CardText>https://github.com/yashirajb</CardText>
            {/* <Button>Go somewhere</Button> */}
          </Card>
        </Col>   
        <br />
        <br />

        
        <Col sm="6">
          <Card style={{border: '10px solid orange'}} body className="medium">
          <div className="mediumImage">
          {/* <svg width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/></svg>           */}
           <svg width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm-2.426 14.741h-3.574v-.202l1.261-1.529c.134-.139.195-.335.162-.526v-5.304c.015-.147-.041-.293-.151-.392l-1.121-1.35v-.201h3.479l2.689 5.897 2.364-5.897h3.317v.201l-.958.919c-.083.063-.124.166-.106.269v6.748c-.018.103.023.206.106.269l.936.919v.201h-4.706v-.201l.969-.941c.095-.095.095-.123.095-.269v-5.455l-2.695 6.844h-.364l-3.137-6.844v4.587c-.026.193.038.387.174.526l1.26 1.529v.202z"/></svg>          
           </div>
           <br />
           {/* <CardImg className="mediumImage" top width="10%" height="10%" src="https://i.imgur.com/ExQRoTYs.png" alt="Card image cap" />   */}
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