import React from "react";
import { Container } from "react-bootstrap";

function About() {
  const technologies = [
    { name: "Java", icon: "☕" },
    { name: "Spring", icon: "🍃" },
    { name: "React.js", icon: "⚛️" },
    { name: "Angular", icon: "🅰️" },
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MySQL", icon: "🐬" },
    { name: "Git", icon: "📝" },
    { name: "Docker", icon: "🐋" },
    { name: "Node.js", icon: "🟢" },
    { name: "HTML/CSS", icon: "🎨" }
  ];

  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
    >
      <Container>
        <div className="about-main-header">
          <h1>
            Sobre <span className="highlight-word">Mim</span>
          </h1>
        </div>

        <div className="about-profile-card">
          <div className="about-content">
            <div className="profile-card">
              <div className="profile-avatar">
                👨‍💻
              </div>
              <div className="profile-name">Gabriel Alves</div>
              <div className="profile-title">Software Developer</div>
            </div>
            
            <div className="about-text">
              <p>
                Meu nome é Gabriel Alves, sou um <span className="highlight">Desenvolvedor de Software</span> que mora em Sorocaba, São Paulo. Atualmente cursando <span className="highlight">Ciência da Computação</span>.
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

        <div className="about-skills-card">
          <div className="skills-header-separated">
            <h2>
              Professional <span className="highlight-word">Skillset</span>
            </h2>
          </div>

          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon">{tech.icon}</div>
                <div className="tech-name">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default About;