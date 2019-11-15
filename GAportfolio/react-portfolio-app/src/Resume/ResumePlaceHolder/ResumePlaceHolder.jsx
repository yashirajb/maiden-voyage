import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, Row, Col } from 'reactstrap';


function ResumePlaceHolder() {
    return (
      <div className="App">
           {/* <h1>Resume</h1>    */}
           <div>
     
     <Row>

     <Col sm="50">
        <Card style ={{border: '10px solid orange'}}body className="resume">
        {/* <p>Open a PDF file <a href="https://pdfhost.io/v/JiXmu25tc__YashiraJacobsResume_2pdf.pdf">example</a>.</p>
        <iframe src="https://pdfhost.io/v/JiXmu25tc__YashiraJacobsResume_2pdf.pdf" width="100%" height="500px"> */}
    {/* </iframe> */}
          {/* <CardTitle>My Resume</CardTitle> */}
          <br />
          {/* <CardText>Click below to view:</CardText> */}
          {/* <h1>PDF Example with iframe</h1>
    <iframe src="/Users/Yashira/desktop/_YashiraJacobs-Resume (2).pdf" width="100%" height="500px">
    </iframe> */}
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 24 24"><path d="M13 6c3.469 0 2 5 2 5s5-1.594 5 2v9h-12v-16h5zm.827-2h-7.827v20h16v-11.842c0-2.392-5.011-8.158-8.173-8.158zm.173-2l-3-2h-9v22h2v-20h10z"/></svg>
          {/* <CardImg top width="50%" src="" alt="Card image cap" /> */}
          {/* <Button variant="secondary"> <a href="https://docs.google.com/document/d/1rvWvkS7De7f_hSjvhVlltJyNh6rOYfp0el3Zyn405w8/edit?usp=sharing">Resume</a></Button> */}
          <br />
          <br />
          <a href="https://pdfhost.io/v/JiXmu25tc__YashiraJacobsResume_2pdf.pdf"><Button>Click Here</Button></a>
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