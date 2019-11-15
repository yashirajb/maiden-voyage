import React from 'react';
import { Card, Button, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';


function ProjectPlaceHolder() {
    return (
      <div className="App">
           {/* <h1>Resume</h1>    */}
           <div className="ChicagoImage">
           {/* <img src="https://i.imgur.com/sK6Glb5.png" title="source: imgur.com" /> */}
          <img src="https://i.imgur.com/sK6Glb5.png?1" title="source: imgur.com" />
           </div>
           <div>
     
     <Row>

     <Col sm="10" className="AppBody">
        <Card style={{border: '10px solid orange'}} body>
        {/* <CardImg top width="20%" src="https://i.imgur.com/q8sUKR0.png?1" alt="Card image cap" /> */}
        {/* <br/>
        <br/>
        <br/> */}
          <CardTitle className="AppTitle">Chicago Public School Finder App</CardTitle>
          <CardText className="AppText">This app was developed to help Chicago caregivers find a suitable public K-12 school for the children in their care.  </CardText>
          <a href="https://eager-jackson-a46f14.netlify.com"><Button className="AppButton">Click Here</Button></a>
        </Card>
      </Col>


     </Row>
  
      </div>
      </div>
    );
  }




export default ProjectPlaceHolder;