import React from 'react';
import huibRunning from '../assets/sprint_united_huib.jpg';

const Hero = () => {
  return (
    <section className="hero" style={{
      position: 'relative',
      height: '95vh',
      minHeight: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <div className="hero-bg" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${huibRunning})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 15%',
        filter: 'brightness(0.4)'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h1 className="hero-title" style={{
          background: 'var(--gradient-primary)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem',
          textTransform: 'uppercase',
          letterSpacing: '5px',
          filter: 'drop-shadow(0 0 10px rgba(255,69,0,0.5))'
        }}>
          Sprint United
        </h1>
        <p className="hero-subtitle" style={{
          margin: '0 auto 2rem',
          color: 'var(--color-text-light)'
        }}>
          Dé hardloopclub voor kinderen van 6 - 12 jaar in Putten.
          Plezier, beweging en vriendschap.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#signup" className="btn btn-primary animate-float">Proeftraining aanvragen</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
