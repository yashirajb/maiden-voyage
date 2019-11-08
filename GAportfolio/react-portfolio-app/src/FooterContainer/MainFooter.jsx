
import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
// import SocialButtonsContainer from '../SocialButtonsContainer/SocialButtonsContainer';

const MainFooter = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <div className="footerElements">
        {/* <Button color="link">About Us</Button>
        <Button color="link">Get Email Updates</Button>
        <Button color="link">Contact Us</Button>
        <Button color="link">Give Us Feedback</Button> */}
        <Container fluid>
        <p className="copyright">&copy; Copyright 2019, OEG Corporation. All Rights Reserved.</p>
        </Container>
        </div>
        {/* <SocialButtonsContainer /> */}
      </Jumbotron>
  
    </div>

  );
};

export default MainFooter;