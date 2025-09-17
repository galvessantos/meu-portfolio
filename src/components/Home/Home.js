import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import homeLogo from "../../assets/home-main.svg";
import { FaChevronDown } from "react-icons/fa";

function Home() {
  return (
    <section className="home-wrapper" id="home">
      <Container
        fluid
        className="home-section"
        id="home-section"
      >
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">Olá! <span className="wave">👋🏽</span></h1>
              <h1 className="heading">
                Meu nome é <strong className="main-name">Gabriel Alves</strong>.
              </h1>
              <div className="typing-container">
                <h2 className="typing-text">
                <br></br>
                  <Typewriter
                    words={['Software Developer.', 'Java | Spring | Angular']}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
              </div>
              <div className="button-wrapper">
                  <a href="#projetos" className="custom-button">
                    Projetos
                  </a>
                  <a href="#contato" className="custom-button">
                    Contato
                  </a>
              </div>
            </Col>
            <Col md={5}>
              <img 
                src={homeLogo} 
                alt="home pic" 
                className="img-fluid"
                loading="eager"
                decoding="async"
              />
            </Col>
          </Row>
        </Container>

        <div className="scroll-down-indicator">
        <br></br>
          <FaChevronDown />
        </div>
      </Container>
    </section>
  );
}

export default Home;
