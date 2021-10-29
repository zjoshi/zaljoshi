import React from 'react';
import SELFIE from './images/SELFIE.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './Section.css';



function Section(props) {

  switch (props.title) {
    case "Home":
      return renderHome();
    case "About":
      return renderAbout();
    case "Resume":
      return renderResume();
    case "Projects":
      return renderProjects();
    case "Art":
      return renderArt();
    case "Contact":
      return renderContact();
    default:
      return (<div></div>);
  }
}

function renderHome() {
  return (
    <section id="about">
      <Container>
        <Row className="ml-5 mr-5 mt-4">
          <Col>
              <Row className="mt-4">
                <h2>Hi. I'm <span>Zal</span>.</h2>
              </Row>
              <Row className="mt-4">
                I’m a designer and developer focusing on UI/UX design, visual design, and user research.
                <div className="mt-4"> <i className="fas fa-map-marker-alt"></i> New York, NY </div>
                <div className="mt-4 button-div">
                  <br/>
                  <br/>
                  <Button variant="primary" className="btn btn-primary">About Me</Button>
                  <Button variant="outline-primary" className="btn btn-outline-primary">Contact Me</Button>
                </div>

              </Row>

          </Col>


          <Col>
              <img id="selfie" className="shadow" src={SELFIE}/>

              <Row >
              </Row>
          </Col>

        </Row>



        <br/>
        <br/>
      </Container>
  </section>
);
}

function renderAbout() {
  return;
}

function renderResume() {
  return;
}

function renderProjects() {
  return;
}

function renderArt() {
  return;
}

function renderContact() {
  return;
}






export default Section;
