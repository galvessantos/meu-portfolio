import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../../assets/about.svg";

function Home2() {
  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
    >
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={4} className="text-center text-md-start">
            <img src={aboutImg} alt="About Gabriel" className="img-fluid" />
          </Col>
          
          <Col md={8} className="home-about-description">
            <h1>
              <span className="purple">SOBRE</span> MIM
            </h1>
            <p className="home-about-body">
              Meu nome é Gabriel Alves, sou um Desenvolvedor Back-end que mora em Sorocaba, São Paulo - Brasil. No momento, sou estudante de Ciência da Computação 💻.
              <br /><br />
              Possuo experiência com <b className="purple">Java, Spring, React.js, Angular, Git e Metodologias Ágeis</b>.
              <br /><br />
              Meu principal interesse é na construção de novos <b className="purple">Produtos e Aplicações</b>, aprimorando minhas habilidades por meio de novos desafios.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
