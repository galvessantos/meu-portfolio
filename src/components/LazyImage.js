import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, className = '', loading = 'lazy' }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageRef, setImageRef] = useState();

  const onLoad = (event) => {
    event.target.classList.add('loaded');
  };

  const onError = () => {
    console.error(`Failed to load image: ${src}`);
  };

  useEffect(() => {
    let observer;
    
    if (imageRef && imageSrc === null) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          { threshold: 0.1, rootMargin: '100px' }
        );
        observer.observe(imageRef);
      } else {
        // Fallback para navegadores sem suporte
        setImageSrc(src);
      }
    }
    
    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, imageSrc, src]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'}
      alt={alt}
      className={`lazy-image ${className}`}
      loading={loading}
      decoding="async"
      onLoad={onLoad}
      onError={onError}
      style={{
        opacity: imageSrc ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
    />
  );
};

export default LazyImage;