import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BookOpen, HeartPulse } from 'lucide-react';

const ValuesGrid = () => {
  const values = [
    {
      title: "Clinical Excellence",
      icon: <BookOpen />,
      desc: "Our approach is rooted in tradition and modern evidence-based practices.",
      bg: "#F2F2F2",
      color: "var(--text-dark)"
    },
    {
      title: "Privacy & Ethics",
      icon: <Shield />,
      desc: "A secure, confidential space where your journey is honored with integrity.",
      bg: "var(--bg-nav)",
      color: "var(--text-white)"
    },
    {
      title: "Holistic Care",
      icon: <HeartPulse />,
      desc: "We believe in treating the whole person, not just symptoms, for lasting wellness.",
      bg: "#F2F2F2",
      color: "var(--text-dark)"
    }
  ];

  return (
    <section id="values" style={{ padding: '4rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {values.map((v, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              style={{
                backgroundColor: v.bg,
                color: v.color,
                padding: '4rem 3rem',
                borderRadius: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                textAlign: 'left'
              }}
            >
              <div style={{ color: idx === 1 ? 'var(--accent-teal)' : 'var(--accent-teal)' }}>
                {React.cloneElement(v.icon, { size: 40, strokeWidth: 1.5 })}
              </div>
              <h3 style={{ fontSize: '1.8rem', color: v.color }}>{v.title}</h3>
              <p style={{ fontSize: '1rem', opacity: 0.8, lineHeight: '1.7' }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesGrid;
