import React from 'react';
import { motion } from 'framer-motion';

import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="container" style={{ paddingBottom: '2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">OUR FOUNDER & LEAD PSYCHOLOGIST</span>
          <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: '1.05' }}>
            B. Raynu Sri
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-light)', maxWidth: '500px', marginBottom: '2.5rem', lineHeight: '1.8' }}>
            "I believe therapy is not just about solving problems, but about discovering the quiet resilience that already resides within you."
          </p>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#contact" className="btn btn-primary">
              BOOK A CONSULTATION
            </a>
            <a href="#contact" className="btn btn-link" style={{ fontWeight: '600' }}>
              CONTACT US
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative' }}
        >
          <div style={{ 
            borderRadius: '1.5rem', 
            overflow: 'hidden', 
            boxShadow: '0 40px 60px rgba(0, 31, 61, 0.1)',
            position: 'relative',
            zIndex: 2
          }}>
            {/* Header Overlay */}
            <div style={{ position: 'absolute', top: '2rem', right: '2rem', textAlign: 'right', color: 'var(--text-dark)', mixBlendMode: 'multiply' }}>
                <h4 style={{ fontSize: '1.8rem', fontWeight: '500' }}>B. RAYNU SRI</h4>
                <p style={{ fontSize: '0.7rem', fontWeight: '600', letterSpacing: '0.1em' }}>COUNSELLING PSYCHOLOGIST</p>
            </div>
            
            <img 
              src={profileImg} 
              alt="B. Raynu Sri" 
              style={{ width: '100%', height: 'auto', display: 'block', grayscale: '0' }}
            />
          </div>
          
          {/* Decorative Background Blob */}
          <div style={{ 
            position: 'absolute', 
            top: '10%', 
            right: '-10%', 
            width: '120%', 
            height: '100%', 
            background: '#F2F2F2', 
            borderRadius: '50%', 
            zIndex: 1,
            filter: 'blur(100px)',
            opacity: 0.5
          }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
