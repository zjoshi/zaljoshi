import React from 'react';
import SELFIE from './images/SELFIE.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaMapPin } from "react-icons/fa";
import Resume from './Resume';
import ResumePaper from './files/resumepaper.pdf';
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
    <section id="home">
      <Container>
        <Row className="ml-5 mr-5 mt-4">
          <Col>
              <Row className="mt-4">
                <h2>Hi. I'm <span>Zal</span>.</h2>
              </Row>
              <Row className="mt-4">
                I’m a developer and designer focusing on front-end development,
                UI/UX design, and user research.
                <div className="mt-4"> <FaMapPin /> New York, NY </div>
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
  return (

    <section id="about">
      <Container>
        <Row md="auto" className="mr-5 mt-4">
          <Col className="ml-5">
            <h3>About me</h3>

          </Col>

          <Col md={8}>
            <Row>
                <p>
                  I am a front-end developer and software engineer. My interests include
                  <span style={{color: "#1696B9"}}> human-computer interaction</span>,
                  <span style={{color: "#0EC7A9"}}> the psychology of technology</span>,
                  <span style={{color: "#8559FD"}}> art and design</span>, and
                  <span style={{color: "#1A42AF"}}> prototyping</span>.

                  <br />
                  <br />

                  In my free time I enjoy digital art on Procreate and photography.
                  I am always looking to express my creativity in fun, new technological ways!

                </p>
            </Row>

            <Row className="mt-4">
              <h4>Tools I love</h4>
              <br />
              <br />
              <ul>
                <li><span>Javascript</span></li>
                <li><span>HTML/CSS</span></li>
                <li><span>C#</span></li>
                <li><span>.NET</span></li>
                <li><span>React</span></li>
                <li><span>Typescript</span></li>
                <li><span>Vue.js</span></li>
                <li><span>Python</span></li>
                <li><span>C++</span></li>
                <li><span>Figma</span></li>
                <li><span>Photoshop</span></li>
                <li><span>Adobe XD</span></li>
                <li><span>Illustrator</span></li>
                <li><span>InVision</span></li>
                <li><span>Procreate</span></li>
              </ul>
            </Row>

          </Col>


        </Row>

      </Container>



    </section>
  );

}

function renderResume() {
  return (
    <section id="resume">
      <Container>
        <Row>
          <Col className="ml-5">
            <h3>Resume</h3>
          </Col>
          <Col className="mr-5 text-right">
            <Button
              variant="primary"
              className="btn btn-primary btn-resume"
              href={ResumePaper}
              target="_blank"

            >

              Download Paper</Button>
          </Col>

          <br />
          <br />
          <br />
          <Resume></Resume>

        </Row>
      </Container>

    </section>
  )
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
