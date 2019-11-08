import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function Photo2() {
    return (
    
      <div className="App">
{/*      
     <img top width="25%" src="https://i.imgur.com/RyFVZ5s.jpg" alt="me" />
     <img top width="25%" src="https://i.imgur.com/swrX0KP.jpg" alt="me" /> */}
     {/* <a href="https://imgur.com/IN468BW"><img src="https://i.imgur.com/IN468BW.jpg?1" title="source: imgur.com" /></a> */}

     <div>
     <img src="https://i.imgur.com/ylZp5QOt.jpg" class="img-circle" alt="personal_pic" width="200" height="200" />  
      {/* <Card> <a href="https://imgur.com/ylZp5QO"><img src="https://i.imgur.com/ylZp5QOt.jpg" title="source: imgur.com" /></a>
        <CardImg top width="30%" src="https://i.imgur.com/ylZp5QOt.jpg" alt="Card image cap" />
        {/* <CardBody>   
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody> */}
      {/* </Card> */} 
    </div>
      </div>
    );
  }

  export default Photo2; 