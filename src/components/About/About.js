import React from "react";
import { Container } from "react-bootstrap";

function About() {
  const technologies = [
    { name: "Java", icon: "☕" },
    { name: "Spring Boot", icon: "🌱" },
    { name: "Angular", icon: "🅰️" },
    { name: "REST APIs", icon: "🔗" },
    { name: "Swagger", icon: "📄" },
    { name: "Postman", icon: "📬" },
    { name: "MySQL", icon: "🐬" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Git", icon: "📝" },
    { name: "GitHub", icon: "🐱" },
    { name: "JUnit 5", icon: "🧪" },
    { name: "Mockito", icon: "🎭" },
    { name: "SonarQube", icon: "🔍" },
    { name: "Scrum", icon: "📆" },
    { name: "Kanban", icon: "📋" }
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
            
            <div className="about-text">
              <p>
                Olá! meu nome é Gabriel Alves, sou <span className="highlight">Estagiário de Desenvolvimento de Software</span> na <span className="highlight">Montreal</span>, referência em tecnologia e inovação no Brasil. Atualmente, curso <span className="highlight">Ciência da Computação</span> e sou apaixonado por desenvolvimento de software, sempre em busca de aprender e aprimorar minhas habilidades.
              </p>

              <p>
                Tenho experiência com projetos full-stack, incluindo o desenvolvimento de um sistema de gestão para <span className="highlight">recuperação de garantias veiculares</span>, com módulos de consulta, apreensão, perfil de usuários e relatórios. 
              </p>
              
              <p>
                Tenho sólida experiência em <span className="highlight">Java e Spring Boot</span>, e venho ampliando meu repertório através de bootcamps e projetos <span className="highlight">Full-stack</span>, explorando tecnologias como <span className="highlight">Angular</span>.
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