import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: '"DM Sans", sans-serif',
        gap: '16px',
      }}>
        <h1 style={{ fontSize: '6rem', fontWeight: 900, margin: 0, color: '#0f0f0f' }}>404</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>This page doesn't exist.</p>
        <Link to="/" style={{
          marginTop: '8px',
          padding: '10px 28px',
          borderRadius: '999px',
          color: '#fff',
          fontWeight: 'bold',
          textDecoration: 'none',
          fontSize: '15px',
          textShadow: '1px 1px 1px rgba(0,0,0,0.5)',
          border: '1px solid #c1c3c4',
          background: 'linear-gradient(to bottom, #c2e0f2, #a0c4db, #6fa5c9, #72a0bd, #446d8e, #457ea2)',
          boxShadow: 'inset 0 2px 4px rgba(110,154,207,0.6), inset 0 -2px 4px rgba(0,0,0,0.3), 0 4px 8px rgba(113,113,113,0.4)',
        }}>
          Go Home
        </Link>
      </div>
    </PageTransition>
  );
}
