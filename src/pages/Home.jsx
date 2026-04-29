import React from 'react';
import { Users, Clock, MapPin, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import SignupForm from '../components/SignupForm';
import Gallery from '../components/Gallery';
import groupImg from '../assets/sprint_united_group.jpg';
import useSEO from '../hooks/useSEO';
import site from '../content/site.json';
import { renderInline } from '../utils/inlineMarkdown';

const Home = () => {
    const { about, training } = site;

    useSEO({
        title: 'Sprint United | Hardloopclub voor kinderen (6-12 jaar) in Putten',
        description: 'Sprint United is dé hardloopclub voor kinderen van 6 tot 12 jaar in Putten. Elke vrijdag 17:30 training waarin techniek, conditie en plezier centraal staan. Meld je aan voor een gratis proeftraining!',
        path: '/',
    });

    return (
        <>
            <Hero />

            <section id="over-ons" className="section-padding" style={{ padding: 'var(--spacing-xl) 0', background: 'var(--color-bg-dark)' }}>
                <div className="container grid-2">
                    <div>
                        <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 2rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Users size={36} strokeWidth={2} style={{ color: 'var(--color-primary-orange)', flexShrink: 0 }} />
                            {about.title}
                        </h2>
                        {about.paragraphs.map((p, i) => (
                            <p key={i} style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                                {renderInline(p)}
                            </p>
                        ))}
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                            border: '1px solid rgba(255,215,0,0.2)'
                        }}>
                            <img src={groupImg} alt={about.groupImageAlt} loading="lazy" style={{ width: '100%', display: 'block' }} />
                        </div>
                        <div style={{
                            position: 'absolute',
                            bottom: '-20px',
                            right: '-20px',
                            background: 'var(--gradient-primary)',
                            padding: '1rem',
                            borderRadius: 'var(--radius-md)',
                            color: 'white',
                            fontWeight: 'bold',
                            boxShadow: 'var(--shadow-glow-blue)',
                            zIndex: 2
                        }}>
                            {about.athletesBadge}
                        </div>
                    </div>
                </div>
            </section>

            <section id="training-info" className="section-padding" style={{ padding: 'var(--spacing-xl) 0', background: 'rgba(255,255,255,0.02)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
                        <Clock size={36} strokeWidth={2} style={{ color: 'var(--color-accent-cyan)', flexShrink: 0 }} />
                        {training.title}
                    </h2>
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        background: 'var(--color-bg-card)',
                        padding: '2rem',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ color: 'var(--color-primary-gold)', fontSize: '1.8rem', marginBottom: '1rem' }}>{training.schedule}</h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>{training.scheduleDesc}</p>
                        </div>

                        <div className="grid-2" style={{ textAlign: 'left' }}>
                            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)' }}>
                                <h4 style={{ color: 'white', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <MapPin size={20} style={{ color: 'var(--color-text-muted)' }} />
                                    {training.currentLocation.label}
                                </h4>
                                <p style={{ color: 'var(--color-text-muted)' }}>{training.currentLocation.value}</p>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'rgba(255,215,0,0.1)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,215,0,0.2)' }}>
                                <h4 style={{ color: 'var(--color-primary-gold)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Sparkles size={20} style={{ color: 'var(--color-primary-gold)' }} />
                                    {training.futureLocation.label}
                                </h4>
                                <p style={{ color: 'var(--color-text-muted)' }}>{training.futureLocation.value}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Gallery />

            <SignupForm />
        </>
    );
};

export default Home;
