import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
      style={{
        backgroundColor: "#0a192f", 
        minHeight: "100vh",
        paddingTop: "100px",
      }}
    >
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UM POUCO <span className="purple"> SOBRE </span> MIM
            </h1>
            <br /><br />
            <p className="home-about-body">
              Meu nome é Gabriel Alves, sou um Desenvolvedor Back-end que mora em Sorocaba, São Paulo - Brasil. No momento, sou estudante de Ciência da Computação 💻.
              <br /><br />
              Trabalho com <b className="purple">Java, Spring, React</b>.
              <br /><br />
              Meu principal interesse é na construção de novos <b className="purple">Produtos e aplicações</b>.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
