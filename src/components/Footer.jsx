import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: '#f2f2f2', padding: '8rem 0 4rem', color: 'var(--text-dark)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '5rem', marginBottom: '8rem' }}>
          
          <div style={{ gridColumn: 'span 2' }}>
            <h3 style={{ fontSize: '1.8rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>Psyray Care</h3>
            <p style={{ color: 'var(--text-light)', lineHeight: '1.8', maxWidth: '400px' }}>
              Professional counselling provides a diagnostic nature for the mental soul in a high-end, supportive digital environment.
            </p>
          </div>
          
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1.5rem', color: 'var(--text-dark)', letterSpacing: '0.1em' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '0.8rem' }}>
              <li><a href="#" style={{ color: 'var(--text-light)', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: 'var(--text-light)', textDecoration: 'none', fontSize: '0.9rem' }}>Terms of Service</a></li>
              <li><a href="#" style={{ color: 'var(--text-light)', textDecoration: 'none', fontSize: '0.9rem' }}>FAQs</a></li>
              <li><a href="#" style={{ color: 'var(--text-light)', textDecoration: 'none', fontSize: '0.9rem' }}>Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1.5rem', color: 'var(--text-dark)', letterSpacing: '0.1em' }}>Connect</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '0.8rem' }}>
              <li style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>contact@psyraycare.com</li>
              <li style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>+91 8056390144</li>
              <li style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <a href="#" style={{ color: 'var(--text-dark)' }}><Globe size={20} /></a>
                <a href="#" style={{ color: 'var(--text-dark)' }}><Mail size={20} /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '3rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.05em' }}>
          © {new Date().getFullYear()} PSYRAY CARE SERVICES. PROFESSIONAL COUNSELLING BY B. RAYNU SRI.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
