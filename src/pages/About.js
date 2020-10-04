import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
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
      {/* <Header backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Sudha Kumar Portfolio</h1>
        <h2>Web Designer/Developer/GIS Analyst</h2>
      </Header> */}
     
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          <AliceCarousel autoPlay autoPlayInterval="3000">
          <img src={img1} className="sliderimg"/>
          <img src={img2} className="sliderimg"/>
          <img src={img3} className="sliderimg"/>
          </AliceCarousel>
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
             I live in Cary, North Carolina. My hobbies include gardening, painting and playing musical instruments. I have 8yrs experience in web development and more than 3yrs experince in Geospatial Information systems. My dream job is to become a Full Stack Web developer.
            </p>
            <p>
            I am Detail-oriented with excellent verbal and written communication skills including presentation skills. I have ability to collect, conduct research, analyze complex data sets, resolve problems and prepare reports. Possess advanced computer skills and knowledge of multiple databases/software systems along with good interpersonal and time management skills with a positive attitude and ability to work with people at all levels. Proficient in web development and Geospatial Information Systems.
            </p>

          </Col>
        </Row>
      </Container>
      
    </div>
    </Wrapper>
  );
}

export default About;
