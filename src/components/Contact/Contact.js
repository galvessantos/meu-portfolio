import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaLinkedinIn, 
  FaGithub, 
  FaInstagram, 
  FaTwitter,
  FaCheckCircle 
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Nome deve ter pelo menos 2 caracteres';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Assunto é obrigatório';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Assunto deve ter pelo menos 5 caracteres';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('https://formspree.io/f/xvgaedrw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container
      fluid
      className="contact-section"
      id="contato"
    >
      <Container>
        <div className="contact-header">
          <h1>Entre em <span className="highlight-word">Contato</span></h1>
          <p>Vamos conversar sobre oportunidades, projetos ou apenas trocar uma ideia sobre tecnologia!</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Informações de Contato</h3>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p><a href="mailto:gabriel@exemplo.com">gabrielww1@hotmail.com</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h4>Localização</h4>
                <p>Sorocaba, São Paulo, Brasil</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaWhatsapp />
              </div>
              <div className="contact-details">
                <h4>WhatsApp</h4>
                <p><a href="https://wa.me/5515998116521" target="_blank" rel="noopener noreferrer">(15) 99811-6521</a></p>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Redes Sociais</h4>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/galvessantos/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com/galvessantos" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Seu nome completo" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                {errors.name && <div className="error-message show">{errors.name}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="seu@email.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                {errors.email && <div className="error-message show">{errors.email}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Assunto *</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Assunto da mensagem" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
                {errors.subject && <div className="error-message show">{errors.subject}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensagem *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Descreva sua mensagem aqui..." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.message && <div className="error-message show">{errors.message}</div>}
              </div>
              
              <button type="submit" className={`submit-button ${isSubmitting ? 'loading' : ''}`} disabled={isSubmitting}>
                <div className="loading-spinner"></div>
                <span className="button-text">
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </span>
              </button>
              
              {showSuccess && (
                <div className="success-message show">
                  <FaCheckCircle style={{marginRight: '10px'}} />
                  Mensagem enviada com sucesso! Retornarei o contato em breve.
                </div>
              )}
            </form>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Contact;