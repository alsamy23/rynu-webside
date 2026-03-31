import React from 'react';
import { motion } from 'framer-motion';

const JourneySection = () => {
  const qualifications = [
    "M.Sc. Counselling Psychology",
    "Certified Career Counsellor",
    "Psychometric Assessment Specialist",
    "Relationship & Marital Therapy Expert"
  ];

  const focusAreas = [
    "Career & Skill Mapping",
    "Pre-marital & Marital Harmony",
    "Anxiety & Stress Resilience",
    "Holistic Mental Wellness"
  ];

  return (
    <section id="about" className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'flex-start' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ 
            borderRadius: '1.5rem', 
            overflow: 'hidden', 
            aspectRatio: '4/3', 
            background: 'linear-gradient(135deg, #e5e7eb, #f3f4f6)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-light)',
            fontSize: '1.2rem',
            fontWeight: '500'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200" 
              alt="Professional Setting" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>The Professional Journey</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8', marginBottom: '3rem' }}>
            With a decade of clinical experience, B. Raynu Sri has dedicated her career to the intersection of traditional psychology and modern empathetic care. Her approach is grounded in the belief that everyone deserves a bespoke pathway to mental wellness.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent-teal)', marginBottom: '1.2rem', letterSpacing: '0.05em' }}>Qualifications</h4>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '0.8rem' }}>
                {qualifications.map((q, idx) => (
                  <li key={idx} style={{ fontSize: '1rem', color: 'var(--text-dark)', fontWeight: '500' }}>{q}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent-teal)', marginBottom: '1.2rem', letterSpacing: '0.05em' }}>Focus Areas</h4>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '0.8rem' }}>
                {focusAreas.map((f, idx) => (
                  <li key={idx} style={{ fontSize: '1rem', color: 'var(--text-dark)', fontWeight: '500' }}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
