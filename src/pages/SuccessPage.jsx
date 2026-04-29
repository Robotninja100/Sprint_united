import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import site from '../content/site.json';

const SuccessPage = () => {
    const { successPage } = site;

    useSEO({
        title: 'Aanmelding ontvangen | Sprint United',
        description: 'Bedankt voor je aanmelding bij Sprint United. We nemen zo snel mogelijk contact met je op.',
        path: '/success',
        noindex: true,
    });

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
                    {successPage.title}
                </h1>
                <p className="success-text" style={{
                    color: 'var(--color-text-muted)',
                    marginBottom: '2.5rem'
                }}>
                    {successPage.message}
                </p>
                <Link to="/" className="btn btn-primary">
                    {successPage.backLabel}
                </Link>
            </div>
        </div>
    );
};

export default SuccessPage;
