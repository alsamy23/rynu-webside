import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Services = () => {
  const categories = [
    {
      title: "Individual Therapy",
      desc: "Evidence-based Cognitive Behavioral Therapy (CBT) and eclectic techniques tailored to your life.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Corporate Wellness",
      desc: "Skill mapping and mental resilience workshops for high-performance teams and leadership.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" style={{ background: '#FAF9F6' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>The Healing Philosophy</h2>
          <div style={{ width: '80px', height: '1px', background: 'var(--accent-teal)', margin: '0 auto' }}></div>
        </div>
        
        {/* Philosophy Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', marginBottom: '8rem' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: '#F2F2F2' }}
          >
             <h3 style={{ fontSize: '2rem' }}>Empathetic <i>Guidance</i></h3>
             <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
               I prioritize creating a "Digital Sanctuary" where you feel heard, not analyzed. My method moves beyond clinical logic to understand the human story behind the struggle.
             </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            style={{ borderRadius: '1.5rem', overflow: 'hidden', height: '350px' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200" 
              alt="Nature/Calm" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </div>
        
        {/* Detailed Services Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <div style={{ borderRadius: '1.5rem', overflow: 'hidden', height: '240px', marginBottom: '1rem' }}>
                <img src={cat.image} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.8rem' }}>{cat.title}</h4>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.7' }}>{cat.desc}</p>
              <a href="#contact" className="btn btn-link" style={{ alignSelf: 'flex-start', fontWeight: '700' }}>LEARN MORE</a>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ background: 'var(--accent-teal)', color: 'white', padding: '3rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <h3 style={{ color: 'white', fontSize: '2.2rem', marginBottom: '1.5rem' }}>The Mission</h3>
            <p style={{ opacity: 0.9, lineHeight: '1.8', fontSize: '1.1rem' }}>
              To democratise high-end mental healthcare, making professional counselling feel like a natural, essential part of a well-lived life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
