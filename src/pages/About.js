import React from "react";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Row from "../components/Row";
import Col from "../components/Col";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "../images/img1.JPG";
import img2 from "../images/img2.JPG";
import img3 from "../images/img3.JPG";
import "./about.css";

function About() {
  return (
    <Wrapper>
    <div className="container-fluid">
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12"> 
          <AliceCarousel autoPlay autoPlayInterval="3000">
          <img src={img2} className="sliderimg"/>
          <img src={img1} className="sliderimg"/>
          <img src={img3} className="sliderimg"/>
          </AliceCarousel>
          </Col> 
        </Row>
        <Row >
          <Col size="md-6">
          <h1>About Me</h1>
            <p>
             Full-Stack developer/GIS Analyst. I live in Cary, North Carolina. My hobbies include gardening, painting and playing musical instruments. I have 8yrs experience in web development and more than 3yrs experince in Geospatial Information systems. My dream job is to become a Full Stack Web developer.
            </p>
            <p>
            I am Detail-oriented with excellent verbal and written communication skills including presentation skills. I have ability to collect, conduct research, analyze complex data sets, resolve problems and prepare reports. Possess advanced computer skills and knowledge of multiple databases/software systems along with good interpersonal and time management skills with a positive attitude and ability to work with people at all levels. Proficient in web development and Geospatial Information Systems.
            </p>
          </Col>
          <Col size="md-6">
          <h1>Connect with me</h1>
          Email: sudha1k@yahoo.com<br />
          Github: <a href="https://github.com/sskumar4" target="_bank">(sskumar4)</a><br />
          LinkedIn: <a href="https://bit.ly/2ZQFPL1" target="_bank">Sudha Kumar</a><br />
          Portfolio: <a href="https://bit.ly/2Gvo8dd" target="_bank">My Portfolio link</a><br />
          Phone: 984-242-7510
          </Col>
        </Row>
      </Container>
    </div>
    </Wrapper>
  );
}
export default About;
