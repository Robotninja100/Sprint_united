import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SignupForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comments: ''
    });

    // VERVANG DIT DOOR HET EMAILADRES WAAR DE BERICHTEN HEEN MOETEN:
    const TARGET_EMAIL = "huibjansen@gmail.com"; // Bijv. info@sprintunited.nl

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Naam: formData.name,
                    Email: formData.email,
                    Opmerkingen: formData.comments,
                    _subject: `Proeftraining aanvraag: ${formData.name}`
                })
            });

            if (response.ok) {
                setFormData({ name: '', email: '', comments: '' });
                navigate('/success');
            } else {
                throw new Error('FormSubmit error');
            }
        } catch (error) {
            alert('Er ging iets mis bij het versturen. Controleer het emailadres of probeer het later nog eens.');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const inputStyle = {
        width: '100%',
        padding: '1rem',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 'var(--radius-sm)',
        color: 'white',
        marginBottom: '1rem',
        fontSize: '1rem',
        fontFamily: 'inherit'
    };

    return (
        <section id="signup" style={{ padding: 'var(--spacing-xl) 0' }}>
            <div className="container">
                <div style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    background: 'var(--color-bg-card)',
                    padding: 'var(--spacing-lg)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-glow-blue)'
                }}>
                    <h2 className="section-title" style={{ marginBottom: '2rem' }}>Aanmelden Proeftraining</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Naam</label>
                            <input
                                type="text"
                                name="name"
                                style={inputStyle}
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Jouw naam"
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Emailadres</label>
                            <input
                                type="email"
                                name="email"
                                style={inputStyle}
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="je@email.com"
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Eventuele opmerkingen</label>
                            <textarea
                                name="comments"
                                style={{ ...inputStyle, height: '120px', resize: 'vertical' }}
                                value={formData.comments}
                                onChange={handleChange}
                                placeholder="Heb je vragen of opmerkingen?"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                            Verstuur Aanvraag
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignupForm;
