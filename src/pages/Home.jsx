import React from 'react';
import Hero from '../components/Hero';
import SignupForm from '../components/SignupForm';
import groupImg from '../assets/sprint_united_group.jpg';

const Home = () => {
    return (
        <>
            <Hero />

            <section id="over-ons" className="section-padding" style={{ padding: 'var(--spacing-xl) 0', background: 'var(--color-bg-dark)' }}>
                <div className="container grid-2">
                    <div>
                        <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>Over Sprint United</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                            Sprint United is een hardloopclub voor kinderen van 6 - 12 jaar.
                            De club is opgericht door <strong>Huib Jansen</strong> in augustus 2025 en is inmiddels
                            uitgegroeid tot een enthousiaste groep van 12 jonge atleten.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                            Onze trainer is <strong>Herbert Jansen</strong>. Samen zorgen we voor trainingen
                            waarin techniek, conditie en vooral plezier in het hardlopen centraal staan.
                        </p>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                            border: '1px solid rgba(255,215,0,0.2)'
                        }}>
                            <img src={groupImg} alt="Sprint United Groep" style={{ width: '100%', display: 'block' }} />
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
                            12 Atleten
                        </div>
                    </div>
                </div>
            </section>

            <section id="training-info" className="section-padding" style={{ padding: 'var(--spacing-xl) 0', background: 'rgba(255,255,255,0.02)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">Wanneer & Waar</h2>
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        background: 'var(--color-bg-card)',
                        padding: '2rem',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ color: 'var(--color-primary-gold)', fontSize: '1.8rem', marginBottom: '1rem' }}>Vrijdag 17:30 - 18:30</h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>Elke week trainen we samen aan onze conditie en techniek.</p>
                        </div>

                        <div className="grid-2" style={{ textAlign: 'left' }}>
                            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)' }}>
                                <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Nu (Winterlocatie)</h4>
                                <p style={{ color: 'var(--color-text-muted)' }}>Parkeerplaats van SDC Putten</p>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'rgba(255,215,0,0.1)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,215,0,0.2)' }}>
                                <h4 style={{ color: 'var(--color-primary-gold)', marginBottom: '0.5rem' }}>Vanaf Maart 2026</h4>
                                <p style={{ color: 'var(--color-text-muted)' }}>Grasveld aan de Driestweg in Krachtighuizen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SignupForm />
        </>
    );
};

export default Home;
