import React from 'react';
import { Camera } from 'lucide-react';
import trainingAction from '../assets/gallery/training_action.jpg';
import team1 from '../assets/gallery/team_1.jpg';
import team2 from '../assets/gallery/team_2.jpg';
import team3 from '../assets/gallery/team_3.jpg';
import team4 from '../assets/gallery/team_4.jpg';
import threeKids from '../assets/gallery/three_kids.jpg';

const GalleryImage = ({ src, alt, height, caption }) => (
    <div
        className="gallery-item"
        style={{
            position: 'relative',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-card)',
            border: '1px solid rgba(255,215,0,0.15)',
            cursor: 'pointer',
            height: height || '100%'
        }}
    >
        <img
            src={src}
            alt={alt}
            loading="lazy"
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.6s ease'
            }}
        />
        <div
            className="gallery-overlay"
            style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(5,5,16,0.75) 0%, rgba(5,5,16,0.1) 50%, transparent 100%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.5rem',
                opacity: 0,
                transition: 'opacity 0.4s ease'
            }}
        >
            {caption && (
                <p style={{
                    color: 'var(--color-primary-gold)',
                    fontFamily: 'var(--font-family-heading)',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                }}>
                    {caption}
                </p>
            )}
        </div>
    </div>
);

const Gallery = () => {
    return (
        <section
            id="galerij"
            className="section-padding"
            style={{
                padding: 'var(--spacing-xl) 0',
                background: 'var(--color-bg-dark)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    top: '-200px',
                    right: '-200px',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(255,69,0,0.08) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    bottom: '-200px',
                    left: '-200px',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(0,71,171,0.1) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', width: '100%' }}>
                    <Camera size={36} strokeWidth={2} style={{ color: 'var(--color-accent-cyan)', flexShrink: 0 }} />
                    Onze Club in Actie
                </h2>
                <p style={{
                    textAlign: 'center',
                    fontSize: '1.2rem',
                    color: 'var(--color-text-muted)',
                    maxWidth: '700px',
                    margin: '0 auto var(--spacing-lg)',
                    lineHeight: 1.7
                }}>
                    Van training met pionnen tot het hele team bij elkaar —
                    zo ziet een middag bij Sprint United eruit.
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                    <GalleryImage
                        src={trainingAction}
                        alt="Sprint United training met pionnen"
                        height="clamp(280px, 45vw, 520px)"
                        caption="Training in actie"
                    />
                </div>

                <div
                    className="gallery-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '1.5rem',
                        marginBottom: '1.5rem'
                    }}
                >
                    <GalleryImage src={team1} alt="Sprint United team — groepsfoto 1" height="clamp(220px, 32vw, 360px)" />
                    <GalleryImage src={team2} alt="Sprint United team — groepsfoto 2" height="clamp(220px, 32vw, 360px)" />
                    <GalleryImage src={team3} alt="Sprint United team — groepsfoto 3" height="clamp(220px, 32vw, 360px)" />
                    <GalleryImage src={team4} alt="Sprint United team — groepsfoto 4" height="clamp(220px, 32vw, 360px)" />
                </div>

                <GalleryImage
                    src={threeKids}
                    alt="Kinderen lopen bij het water"
                    height="clamp(240px, 38vw, 440px)"
                    caption="Samen onderweg"
                />
            </div>
        </section>
    );
};

export default Gallery;
