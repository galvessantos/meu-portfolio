import React from "react";
import { Container } from "react-bootstrap";

function Home2() {
  const skills = [
    "Java", "Spring", "React.js", "Angular", 
    "Git", "Metodologias Ágeis", "PostgreSQL", "MongoDB"
  ];

  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
    >
      <Container>
        <div className="about-card">
          <div className="about-header">
            <h1>SOBRE MIM</h1>
          </div>
          
          <div className="about-content">
            <div className="profile-card">
              <div className="profile-avatar">
                👨‍💻
              </div>
              <div className="profile-name">Gabriel Alves</div>
              <div className="profile-title">Back-end Developer</div>
            </div>
            
            <div className="about-text">
              <p>
                Meu nome é Gabriel Alves, sou um <span className="highlight">Desenvolvedor Back-end</span> que mora em Sorocaba, São Paulo. Atualmente cursando <span className="highlight">Ciência da Computação</span>.
              </p>
              
              <p>
                Tenho sólida experiência em <span className="highlight">Java e Spring Boot</span>, e venho ampliando meu repertório através de bootcamps e projetos <span className="highlight">Full-stack</span>, explorando tecnologias como <span className="highlight">React.js e Angular</span>.
              </p>
              
              <p>
                Meu principal interesse é na construção de <span className="highlight">Produtos e Aplicações</span> robustas, sempre buscando aprimorar minhas habilidades tanto no back-end quanto no front-end através de novos desafios.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Home2;