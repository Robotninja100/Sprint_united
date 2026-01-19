import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--color-bg-dark)',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <div className="success-card" style={{
                maxWidth: '600px',
                background: 'var(--color-bg-card)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-glow-blue)',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                <div style={{
                    fontSize: '5rem',
                    marginBottom: '1rem'
                }}>
                    ✅
                </div>
                <h1 className="success-title" style={{
                    background: 'var(--gradient-primary)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '1rem'
                }}>
                    Aanvraag Verzonden!
                </h1>
                <p className="success-text" style={{
                    color: 'var(--color-text-muted)',
                    marginBottom: '2.5rem'
                }}>
                    Bedankt voor je aanmelding voor een proeftraining bij Sprint United.
                    We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.
                </p>
                <Link to="/" className="btn btn-primary">
                    Terug naar Home
                </Link>
            </div>
        </div>
    );
};

export default SuccessPage;
