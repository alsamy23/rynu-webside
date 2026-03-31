import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const QuoteSection = () => {
  return (
    <section style={{ backgroundColor: 'var(--bg-dark)', padding: '12rem 0', color: 'white', textAlign: 'center' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}
        >
          <Quote size={48} color="var(--accent-teal)" style={{ opacity: 0.5 }} />
          
          <h2 style={{ 
            color: 'white', 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            lineHeight: '1.4', 
            fontWeight: '400',
            fontStyle: 'italic',
            fontFamily: 'var(--font-serif)'
          }}>
            "The greatest discovery of my generation is that human beings can alter their lives by altering their attitudes of mind."
          </h2>
          
          <div style={{ width: '40px', height: '1px', background: 'var(--accent-teal)' }}></div>
          
          <p style={{ 
            color: 'var(--accent-teal)', 
            fontWeight: '700', 
            fontSize: '0.8rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.2em' 
          }}>
            — WILLIAM JAMES | A GUIDING PRINCIPLE FOR B. RAYNU SRI
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
