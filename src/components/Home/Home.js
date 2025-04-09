import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import Home2 from "./Home2";
import homeLogo from "../../assets/home-main.svg";
import { FaChevronDown } from "react-icons/fa";

function Home() {
  return (
    <section className="home-wrapper">
      <Container
        fluid
        className="home-section"
        id="home"
      >
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">Olá! <span className="wave">👋🏻</span></h1>
              <h1 className="heading">
                Meu nome é <strong className="main-name">Gabriel Alves</strong>.
              </h1>
              <div className="typing-container">
                <h2 className="typing-text">
                  <Typewriter
                    words={['Back-end Developer.', 'Java | Spring | React']}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
              </div>
            </Col>
            <Col md={5}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
        <div className="scroll-down-indicator">
          <FaChevronDown />
        </div>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
