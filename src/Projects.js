import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import UNIVIEMED from './images/univiemed@2x.png';
import MYGARDEN from './images/mygarden@2x.png';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Projects.css';

//src: 'https://live.staticflickr.com/65535/51813135186_e02dbf924b_o.png',
//thumbnail: 'https://live.staticflickr.com/65535/51813135186_e02dbf924b_o.png'
//  src: 'https://live.staticflickr.com/65535/51813240158_f847d98a31_o.png',
//  thumbnail: 'https://live.staticflickr.com/65535/51813240158_f847d98a31_o.png'

class Projects extends Component {


  constructor(props) {
    super(props);
    this.state = { image: 0, isOpen: false};
  }

  Lightbox() {
    const { image, isOpen } = this.state;

    return(
        <Lightbox
          mainSrc={image}
          onCloseRequest={() => this.setState({ isOpen: false })}
        />
    )
  }




  UnivieMed() {
    return (
      <Row className="ml-5 mr-4 mt-4 mb-5">
        <Col className="mt-4" lg={5}>
          <h4 style={{fontWeight: 'bold'}}>UnivieMed, a refugee health portal</h4>
          <h6>Cornell Tech x Univie Health</h6>
          <p>
          Refugee health is a global health issue. With 84 million people forcibly
          displaced as of 2021, the refugee health crisis is a global health issue.
          UnivieMed attempts to relieve some of the pressure placed on refugees by
          making it easier for them to take control of their own healthcare. Using
          Univie Health's refugee EMR system, UnivieMed collects missing refugee health
          information and medication use and creates a comprehensive refugee health
          heatmap and portal for pharmacies and aid organizations.
          </p>
        </Col>

        <Col className="mt-4" lg={true}>
          <Image className="project-image" onClick={() => this.setState({ isOpen: true, image: UNIVIEMED })} src={UNIVIEMED}/>
        </Col>

      </Row>
    );
  }

  MyGarden() {
    return (
      <Row className="ml-5 mr-4 mt-4 mb-5">
        <Col className="mt-4" lg={5}>
          <h4 style={{fontWeight: 'bold'}}>MyGarden, a plant tracking mobile application</h4>
          <h6>Adobe XD</h6>
          <p>
          It's the 2020s and plants are the new pets. This custom design for a plant
          tracking application allows a user to register and store information
          about their house plants and track growth and activity. In addition,
          the design allows for a shopping portion where a user can browse for
          plants they might like to buy.
          <br/>
          I used Adobe XD and a variety of plug-ins to create this design.
          </p>
        </Col>

        <Col className="mt-4" lg={true}>
          <Image className="project-image" onClick={() => this.setState({ isOpen: true, image: MYGARDEN })} src={MYGARDEN}/>
        </Col>

      </Row>
    );
  }

  render() {
    let lightbox = "";
    if (this.state.isOpen) {
      lightbox = this.Lightbox();
    }

    return (
      <Container>
        <Row>
          <Col className="ml-5">
            <h3>Selected Projects</h3>
          </Col>
        </Row>
        {this.UnivieMed()}
        {this.MyGarden()}
        {lightbox}

      </Container>
    );
  }

}





export default Projects;
