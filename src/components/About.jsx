import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Star, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <GraduationCap />, label: "MSc. Counselling Psychology", sub: "University of Madras" },
    { icon: <Users />, label: "124+ Career Clients", sub: "Students & Adults" },
    { icon: <Heart />, label: "57+ Couples Helped", sub: "Relationship Counselling" },
    { icon: <Star />, label: "Empathetic Approach", sub: "Nurturing Care" }
  ];

  return (
    <section id="about" className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative' }}
        >
          <div className="glass" style={{ borderRadius: '2rem', padding: '1.5rem', background: 'white' }}>
            {/* Image Placeholder */}
            <div style={{ 
              width: '100%', 
              height: '400px', 
              background: 'linear-gradient(135deg, #e0e7ff 0%, #f1f5f9 100%)', 
              borderRadius: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent)'
            }}>
              <Users size={120} strokeWidth={1} />
            </div>
            <div style={{ padding: '1.5rem 0 0' }}>
              <h3 style={{ fontSize: '1.8rem' }}>B. Raynu Sri</h3>
              <p style={{ color: 'var(--text-light)', fontWeight: '500' }}>Counselling Psychologist</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About <span style={{ color: 'var(--accent)' }}>Raynu Sri</span></h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '1.5rem' }}>
            Rooted in a personal philosophy that emphasizes empowering others and fostering a positive outlook on life, I bring a genuine and nurturing nature to my professional practice.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '3rem' }}>
            My academic journey includes the successful completion of an MSc. Counselling Psychology from the prestigious University of Madras. I've spent years equipping myself with extensive knowledge and practical skills to help you overcome challenges.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {highlights.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="glass"
                style={{ padding: '1.5rem', borderRadius: '1.2rem', textAlign: 'center' }}
              >
                <div style={{ color: 'var(--accent)', marginBottom: '0.8rem', display: 'flex', justifyContent: 'center' }}>
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.3rem' }}>{item.label}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
