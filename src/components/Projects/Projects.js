import React from "react";
import { Container } from "react-bootstrap";
import Sensor from "../../assets/Sensor.jpg";
import Totem from "../../assets/Totem.jpg";
import APIBlog from "../../assets/APIBlog.jpg";
import BlogFront from "../../assets/BlogFront.jpg";
import GameList from "../../assets/GameList.jpg";
import Filmes from "../../assets/Filmes.jpg";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Blog Twinterior - Backend",
      description: "API RESTful para blog com sistema de usuários, temas e postagens. Desenvolvida com Spring Boot, implementa autenticação JWT, validações, documentação Swagger e testes automatizados. Projeto do Bootcamp Acelera Maker, com Deploy na plataforma Railway.",
      technologies: ["Java", "Spring Boot", "Spring Security", "MySQL", "JWT", "Swagger"],
      image: APIBlog,
      deployUrl: null,
      githubUrl: "https://github.com/galvessantos/projeto-blog-aceleramaker-backend"
    },
    {
      id: 2,
      title: "Blog Twinterior - Frontend",
      description: "Interface moderna e responsiva para o blog Twinterior, desenvolvida em Angular com consumo da API RESTful. Implementa autenticação, gerenciamento de posts e interface administrativa. Deploy realizado na plataforma Vercel.",
      technologies: ["Angular", "TypeScript", "RxJS", "SCSS", "Chart.js", "Angular Material"],
      image: BlogFront,
      deployUrl: "https://projeto-blog-aceleramaker-frontend1.vercel.app/#/login",
      githubUrl: "https://github.com/galvessantos/projeto-blog-aceleramaker-frontend1"
    },
    {
      id: 3,
      title: "GameList API",
      description: "API RESTful para gerenciamento de jogos desenvolvida durante intensivo de Java com Spring Boot. Permite listar, organizar e manipular informações de jogos com funcionalidades de reordenação dinâmica. Implementa DTOs, consultas otimizadas, perfis de projeto e deploy automatizado.",
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Docker", "CI/CD"],
      image: GameList,
      deployUrl: null,
      githubUrl: "https://github.com/galvessantos/projeto-dslist-javaspring"
    },
    {
      id: 4,
      title: "Gerenciador de Filmes",
      description: "Este projeto consiste em um site de listagem de filmes, onde é possível cadastrar novos filmes, visualizar detalhes, editar e excluir o cadastro desses filmes e navegar por uma lista de filmes já cadastrados. Desenvolvido com as tecnologias React, Node.js, TailwindCSS, Vite e MySQL, o site oferece uma experiência de uso simples e eficiente.",
      technologies: ["Node.js", "React", "TypeScript", "Vite", "MySQL"],
      image: Filmes,
      deployUrl: null,
      githubUrl: "https://github.com/galvessantos/projeto-gerenciadorfilmes"
    },
    {
      id: 5,
      title: "Estação Meteorológica",
      description: "Sistema IoT completo para captação e monitoramento de dados meteorológicos reais. Desenvolvido como projeto acadêmico, integra hardware Arduino com sensores para coleta de temperatura, umidade e precipitação, enviando dados para aplicação web que apresenta e armazena as informações em banco de dados.",
      technologies: ["Java", "Hibernate", "Arduino", "HTML", "CSS", "JavaScript", "SQL Server"],
      image: Sensor,
      deployUrl: null,
      githubUrl: "https://github.com/galvessantos/projeto-sensor-chuva-java-sql-javascript"
    },
    {
      id: 6,
      title: "Totem interativo",
      description: "Totem interativo sobre robôs exploradores em Marte, desenvolvido em Java com boas práticas de POO. Conta com cadastro personalizado, visualização de 5 rovers, quiz com correção automática, avaliação de satisfação e resumo final com desempenho do usuário. Projeto de APS – 3º semestre de Ciência da Computação (UNIP).",
      technologies: ["Java"],
      image: Totem,
      deployUrl: null,
      githubUrl: "https://github.com/galvessantos/projeto-sensor-chuva-java-sql-javascript"
    }
  ];

  return (
    <Container
      fluid
      className="projects-section"
      id="projetos"
    >
      <Container>
        <div className="projects-header">
          <h1>
            Meus <span className="highlight-word">Projetos</span>
          </h1>
          <p>
            Aqui estão alguns dos principais projetos que desenvolvi, 
            demonstrando minhas habilidades em desenvolvimento full-stack 
            e back-end com diferentes tecnologias.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="image-placeholder">
                    🖼️
                    <span>Imagem do Projeto</span>
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag-small">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-buttons">
                  {project.deployUrl && (
                    <a 
                      href={project.deployUrl} 
                      className="project-button deploy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="button-icon">🚀</span>
                      <span>Ver Projeto</span>
                    </a>
                  )}
                  
                  <a 
                    href={project.githubUrl} 
                    className={`project-button github ${!project.deployUrl ? 'full-width' : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="button-icon">📁</span>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Projects;