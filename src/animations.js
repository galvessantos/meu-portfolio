import ScrollReveal from 'scrollreveal';
window.ScrollReveal = ScrollReveal;

class LoadingManager {
  constructor() {
    this.init();
  }

  init() {
    this.createLoadingScreen();
    
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.hideLoading();
      }, 1500);
    });
  }

  createLoadingScreen() {
    const loadingHTML = `
      <div id="loading-screen" class="loading-screen">
        <div class="loader-container">
          <div class="loader"></div>
          <div class="loading-text">Carregando...</div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', loadingHTML);
    
    const style = document.createElement('style');
    style.textContent = `
      .loading-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #0c0a0f 0%, #1a1625 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease, visibility 0.5s ease;
      }
      
      .loading-screen.hidden {
        opacity: 0;
        visibility: hidden;
      }
      
      .loader-container {
        text-align: center;
      }
      
      .loader {
        width: 50px;
        height: 50px;
        border: 3px solid rgba(199, 112, 240, 0.3);
        border-top: 3px solid #c770f0;
        border-radius: 50%;
        animation: loading-spin 1s linear infinite;
        margin: 0 auto;
      }
      
      .loading-text {
        color: #c770f0;
        margin-top: 20px;
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
        animation: loading-pulse 1.5s ease-in-out infinite;
      }
      
      @keyframes loading-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      @keyframes loading-pulse {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  hideLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }
  }
}

class ParallaxStars {
  constructor() {
    this.init();
  }

  init() {
    this.createStarsLayers();
    this.bindEvents();
  }

  createStarsLayers() {
    const starsHTML = `
      <div class="parallax-stars">
        <div class="stars-layer stars-layer-1"></div>
        <div class="stars-layer stars-layer-2"></div>
        <div class="stars-layer stars-layer-3"></div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', starsHTML);
    
    const style = document.createElement('style');
    style.textContent = `
      .parallax-stars {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
      }
      
      .stars-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      
      .stars-layer-1 {
        background-image:
          radial-gradient(2px 2px at 20px 30px, white, rgba(0,0,0,0)),
          radial-gradient(2px 2px at 40px 70px, white, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 90px 40px, white, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 130px 80px, white, rgba(0,0,0,0));
        background-repeat: repeat;
        background-size: 200px 200px;
        animation: parallax-stars-1 20s linear infinite;
        opacity: 0.4;
      }
      
      .stars-layer-2 {
        background-image:
          radial-gradient(1px 1px at 40px 60px, white, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 80px 20px, white, rgba(0,0,0,0)),
          radial-gradient(2px 2px at 120px 50px, white, rgba(0,0,0,0));
        background-repeat: repeat;
        background-size: 300px 300px;
        animation: parallax-stars-2 25s linear infinite;
        opacity: 0.3;
      }
      
      .stars-layer-3 {
        background-image:
          radial-gradient(1px 1px at 160px 30px, white, rgba(0,0,0,0)),
          radial-gradient(2px 2px at 200px 80px, white, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 240px 20px, white, rgba(0,0,0,0));
        background-repeat: repeat;
        background-size: 400px 400px;
        animation: parallax-stars-3 30s linear infinite;
        opacity: 0.2;
      }
      
      @keyframes parallax-stars-1 {
        0% { transform: translateX(0) translateY(0); }
        100% { transform: translateX(-200px) translateY(-200px); }
      }
      
      @keyframes parallax-stars-2 {
        0% { transform: translateX(0) translateY(0); }
        100% { transform: translateX(-300px) translateY(-150px); }
      }
      
      @keyframes parallax-stars-3 {
        0% { transform: translateX(0) translateY(0); }
        100% { transform: translateX(-400px) translateY(-100px); }
      }
    `;
    document.head.appendChild(style);
  }

  bindEvents() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  updateParallax() {
    const scrolled = window.pageYOffset;
    const layers = document.querySelectorAll('.stars-layer');
    
    layers.forEach((layer, index) => {
      const speed = (index + 1) * 0.1;
      const yPos = -(scrolled * speed);
      layer.style.transform = `translateY(${yPos}px)`;
    });
  }
}

class ScrollRevealManager {
  init() {
    if (typeof ScrollReveal === 'undefined') {
      console.warn('ScrollReveal não está carregado');
      return;
    }

    ScrollReveal().reveal('.reveal', {
      duration: 1000,
      distance: '60px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      reset: false
    });

    ScrollReveal().reveal('.header', {
      origin: 'top',
      duration: 1000,
      delay: 500
    });

    ScrollReveal().reveal('.heading', {
      origin: 'left',
      duration: 1200,
      delay: 600
    });

    ScrollReveal().reveal('.typing-text', {
      origin: 'left',
      duration: 1200,
      delay: 800
    });

    ScrollReveal().reveal('.button-wrapper', {
      origin: 'bottom',
      duration: 1000,
      delay: 1000
    });

    ScrollReveal().reveal('.img-fluid', {
      origin: 'right',
      duration: 1200,
      delay: 700
    });

    ScrollReveal().reveal('.about-header', {
      origin: 'top',
      duration: 1000,
      delay: 200
    });

    ScrollReveal().reveal('.profile-card', {
      origin: 'left',
      duration: 1200,
      delay: 400
    });

    ScrollReveal().reveal('.about-text', {
      origin: 'right',
      duration: 1200,
      delay: 600
    });

    ScrollReveal().reveal('.skills-header', {
      origin: 'top',
      duration: 1000
    });

    ScrollReveal().reveal('.tech-card', {
      origin: 'bottom',
      duration: 800,
      delay: 200,
      interval: 100
    });

    ScrollReveal().reveal('.projects-header', {
      origin: 'top',
      duration: 1000
    });

    ScrollReveal().reveal('.project-card', {
      origin: 'bottom',
      duration: 1000,
      delay: 200,
      interval: 150
    });

    ScrollReveal().reveal('.contact-header', {
      origin: 'top',
      duration: 1000
    });

    ScrollReveal().reveal('.contact-info', {
      origin: 'left',
      duration: 1200,
      delay: 300
    });

    ScrollReveal().reveal('.contact-form', {
      origin: 'right',
      duration: 1200,
      delay: 500
    });
  }
}

class RippleEffect {
  init() {
    document.addEventListener('click', (e) => {
      const button = e.target.closest('.custom-button, .project-button, .submit-button, .cta-button');
      if (button) {
        this.createRipple(e, button);
      }
    });
  }

  createRipple(event, button) {
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);

    const style = document.createElement('style');
    style.textContent = `
      .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
      }
      
      @keyframes ripple-animation {
        to {
          transform: scale(2);
          opacity: 0;
        }
      }
    `;
    
    if (!document.querySelector('style[data-ripple]')) {
      style.setAttribute('data-ripple', 'true');
      document.head.appendChild(style);
    }
  }
}

class SmoothScrollManager {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          this.smoothScrollTo(target);
        }
      });
    });
  }

  smoothScrollTo(target) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const ease = this.easeInOutCubic(progress / duration);
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }

  easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }
}

class HoverAnimations {
  init() {
    this.techCardsHover();
    this.projectCardsHover();
    this.socialIconsHover();
  }

  techCardsHover() {
    const techCards = document.querySelectorAll('.tech-card');
    techCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.05)';
        card.style.boxShadow = '0 25px 50px rgba(199, 112, 240, 0.3)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '';
      });
    });
  }

  projectCardsHover() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const img = card.querySelector('.project-image img');
        if (img) {
          img.style.transform = 'scale(1.1)';
        }
      });

      card.addEventListener('mouseleave', () => {
        const img = card.querySelector('.project-image img');
        if (img) {
          img.style.transform = 'scale(1)';
        }
      });
    });
  }

  socialIconsHover() {
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-8px) rotate(5deg)';
      });

      icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0) rotate(0deg)';
      });
    });
  }
}

class PulseAnimations {
  init() {
    setInterval(() => {
      this.pulseContactIcons();
    }, 3000);
  }

  pulseContactIcons() {
    const contactIcons = document.querySelectorAll('.contact-icon');
    contactIcons.forEach((icon, index) => {
      setTimeout(() => {
        icon.style.animation = 'pulse-glow 0.8s ease-in-out';
        setTimeout(() => {
          icon.style.animation = '';
        }, 800);
      }, index * 200);
    });

    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse-glow {
        0%, 100% { 
          transform: scale(1);
          box-shadow: 0 5px 15px rgba(199, 112, 240, 0.3);
        }
        50% { 
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(199, 112, 240, 0.6);
        }
      }
    `;
    
    if (!document.querySelector('style[data-pulse]')) {
      style.setAttribute('data-pulse', 'true');
      document.head.appendChild(style);
    }
  }
}

class AnimationOrchestrator {
  constructor() {
    this.loadingManager = new LoadingManager();
    this.parallaxStars = new ParallaxStars();
    this.scrollRevealManager = new ScrollRevealManager();
    this.rippleEffect = new RippleEffect();
    this.smoothScrollManager = new SmoothScrollManager();
    this.hoverAnimations = new HoverAnimations();
    this.pulseAnimations = new PulseAnimations();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        this.scrollRevealManager.init();
        this.rippleEffect.init();
        this.smoothScrollManager.init();
        this.hoverAnimations.init();
        this.pulseAnimations.init();
      }, 100);
    });
  }
}

const animationOrchestrator = new AnimationOrchestrator();
animationOrchestrator.init();