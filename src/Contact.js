import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail } from 'react-icons/ai';
import './Contact.css';



class Contact extends Component {



  render() {
    return (
      <Container>
        <Row className="ml-5 mr-5" >
          <h3>Contact me</h3>
        </Row>

        <Row className="ml-5 mr-5">
          <br />
          <br />
          <p> Questions? Comments? Email me at <span style={{fontWeight: 'bold'}}>zj42@cornell.edu</span> or visit my socials. </p>
        </Row>

        <Row className="ml-5 mr-5">
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <a href="https://www.linkedin.com/in/zal-joshi-057255141/" target="_blank"><AiFillLinkedin className="social-icon" style={{backgroundColor: '#1696B9'}}/></a>
            <a href="https://www.github.com/zjoshi" target="_blank"><AiFillGithub className="social-icon" style={{backgroundColor: '#0EC7A9'}}/></a>
            <a href="https://www.instagram.com/zaljoshinaround/" target="_blank"><AiFillInstagram className="social-icon" style={{backgroundColor: '#8559FD'}}/></a>
            <a href="mailto: zj42@cornell.edu"><AiFillMail className="social-icon" style={{backgroundColor: '#1A42AF'}}/></a>


          </div>

        </Row>
      </Container>

    )
  }
}

export default Contact;
