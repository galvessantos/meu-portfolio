import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaDownload, FaArrowLeft, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Resume() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv-gabriel-alves.pdf';
    link.download = 'CV-Gabriel-Alves.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPDF = () => {
    window.open('/cv-gabriel-alves.pdf', '_blank');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="stars">
      <div className="resume-page">
        <Container className="resume-container">
          
          {!isMobile ? (
            <>
              <div className="resume-header">
                <button className="back-button" onClick={handleBack}>
                  <FaArrowLeft />
                  <span>Voltar</span>
                </button>
                
                <div className="resume-title">
                  <h1>Currículo</h1>
                  <p>Gabriel Alves Santos</p>
                </div>
                
                <button className="download-button" onClick={handleDownload}>
                  <FaDownload />
                  <span>Download PDF</span>
                </button>
              </div>

              <div className="pdf-viewer">
                <iframe
                  src="/cv-gabriel-alves.pdf#zoom=100"
                  width="100%"
                  height="1000px"
                  title="Currículo Gabriel Alves"
                  style={{
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(199, 112, 240, 0.2)',
                    backgroundColor: 'white'
                  }}
                />
              </div>

              <div className="pdf-fallback">
                <p>Não consegue visualizar o PDF? 
                  <button className="download-link" onClick={handleDownload}>
                    Clique aqui para fazer o download
                  </button>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="mobile-resume-header">
                <button className="mobile-back-button" onClick={handleBack}>
                  <FaArrowLeft />
                </button>
                <h1 className="mobile-resume-title">Currículo</h1>
              </div>

              <div className="mobile-pdf-preview">
                <div className="pdf-icon">📄</div>
                <h2>Gabriel Alves Santos</h2>
                <p>Visualize ou faça o download do meu currículo completo</p>
              </div>
              
              <div className="mobile-action-buttons">
                <button className="mobile-view-button" onClick={handleViewPDF}>
                  <FaEye />
                  <span>Visualizar PDF</span>
                </button>
                
                <button className="mobile-download-button" onClick={handleDownload}>
                  <FaDownload />
                  <span>Download PDF</span>
                </button>
              </div>
            </>
          )}

        </Container>
      </div>
    </div>
  );
}

export default Resume;