import React from "react";
import { Container } from "react-bootstrap";

function Skills() {
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

  const methodologies = [
    "Metodologias Ágeis",
    "Scrum",
    "Clean Code",
  ];

  return (
    <Container
      fluid
      className="skills-section"
      id="skills"
    >
      <Container>
        <div className="skills-header">
          <h1>
            Professional <span className="highlight-word">Skillset</span>
          </h1>
        </div>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-icon">{tech.icon}</div>
              <div className="tech-name">{tech.name}</div>
            </div>
          ))}
        </div>

        <div className="methodologies-section">
          <h2 className="methodologies-title">
            <span className="highlight-word">Metodologias</span> & Práticas
          </h2>
          <div className="methodologies-grid">
            {methodologies.map((methodology, index) => (
              <div key={index} className="methodology-card">
                {methodology}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Skills;