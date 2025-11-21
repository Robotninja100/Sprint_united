import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import TrainingPage from './pages/TrainingPage';
import InfoPage from './pages/InfoPage';
import logo from './assets/logo.jpg';

function App() {
  return (
    // 👇 HIER ZAT HET PROBLEEM! Ik heb de basename toegevoegd.
    // Let op: Dit moet PRECIES matchen met je repository naam.
    <Router basename="/Sprint_united/">
      <div className="app">
        <nav style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          padding: '1rem 2rem',
          background: 'rgba(5, 5, 16, 0.9)',
          backdropFilter: 'blur(10px)',
          zIndex: 100,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src={logo} alt="Sprint United Logo" style={{ height: '50px', borderRadius: '50%' }} />
            <span style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              SPRINT UNITED
            </span>
          </Link>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link to="/info" className="nav-link">Info</Link>
            <Link to="/training" className="nav-link">Training</Link>
            <Link to="/#signup" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Lid Worden</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>

        <footer style={{
          textAlign: 'center',
          padding: '2rem',
          background: 'black',
          color: 'var(--color-text-muted)',
          marginTop: 'auto'
        }}>
          <p>&copy; 2025 Sprint United. Alle rechten voorbehouden.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;