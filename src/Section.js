import React, { Component } from "react";
import SELFIE from './images/SELFIE.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { FaMapPin } from "react-icons/fa";
import Resume from './Resume';
import ResumePaper from './files/resumepaper.pdf';
import Projects from './Projects';
import Art from './Art';
import Contact from './Contact';
import './Section.css';



class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {isMobile: false};
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
        this.setState({
            isMobile: window.innerWidth < 768
        });
    }, false);
}


  renderHome() {
    return (
      <section id="home">
        <Container>
          <Row className="ml-1 ml-md-5 mr-1 mr-md-5">
            <Col className="mt-4">
                <Row className="mt-4">
                  <h2>Hi. I'm <span>Zal</span>.</h2>
                </Row>
                <Row className="mt-4">
                  <h5>I’m a developer and designer focusing on front-end development,
                  UI/UX design, and user research.</h5>
                </Row>
                <Row>
                  <div className="mt-4"> <h5> <span><FaMapPin /> </span> New York, NY </h5> </div>
                  <div className="mt-4" style={{display: 'inline-flex', }} >
                    <Button variant="primary" className="btn btn-primary" href="#about" style={{width:'50%'}}>About Me</Button>
                    <Button variant="outline-primary" className="btn btn-outline-primary" href="#contact" style={{width:'50%'}}>Contact Me</Button>
                  </div>
                  <br/>
                  <br/>
                </Row>

            </Col>


            <Col className="mt-4">
                <Image id="selfie" className="shadow" src={SELFIE}/>

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

  renderAbout() {
    return (

      <section id="about">
        <Container>
          <Row>
            <Col lg='auto' className="ml-5">
              <h3>About me</h3>

            </Col>

            <Col className="mr-4 ml-4 pl-2 pr-2">
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

  renderResume() {
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
          </Row>


          <Row className="mt-5">
            <Resume></Resume>
          </Row>

        </Container>

      </section>
    )
  }

  renderProjects() {
    return (
      <section id='projects'>
        <Projects isMobile={this.state.isMobile}></Projects>
      </section>
    );
  }

  renderArt() {
    return (
      <section id='art'>
        <Container>
          <Row className="ml-5 mb-5"><h3>Art</h3></Row>

          <Art></Art>
        </Container>
      </section>
    );
  }


  renderContact() {

    return (
      <section id="contact">
        <Contact></Contact>
        <br />
        <br />
        <br />
      </section>


    )
  }

  render() {
    switch (this.props.title) {
      case "Home":
        return this.renderHome();
      case "About":
        return this.renderAbout();
      case "Resume":
        return this.renderResume();
      case "Projects":
        return this.renderProjects();
      case "Art":
        return this.renderArt();
      case "Contact":
        return this.renderContact();
      default:
        return (<div></div>);
    }
  }
}






export default Section;
