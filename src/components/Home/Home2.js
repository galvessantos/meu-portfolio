import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import aboutImg from "../../assets/about.svg"; // Importa a imagem

function Home2() {
  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
    >
      <Particle />

      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <img src={aboutImg} alt="About Gabriel" className="img-fluid" />
          </Col>

          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "3em" }}>
              <span className="purple">SOBRE</span> MIM
            </h1>
            <br /><br />
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
