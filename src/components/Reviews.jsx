import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    { text: "Raynu Sri's guidance was pivotal in helping me choose my career path. Her psychometric analysis was spot on!", author: "Career Client", rating: 5 },
    { text: "We were struggling in our marriage, but her empathetic listening and practical advice helped us find a way back to each other.", author: "Relationship Counselling Couple", rating: 5 },
    { text: "A truly nurturing and professional psychologist. I highly recommend her for anyone seeking a positive life outlook.", author: "Individual Therapy Client", rating: 5 }
  ];

  return (
    <section id="reviews" className="container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Client <span style={{ color: 'var(--accent)' }}>Success Stories</span></h2>
        <p style={{ color: 'var(--text-light)', fontSize: '1.2rem' }}>Trusted by over 180+ clients for career and relationship guidance.</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {reviews.map((review, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            className="glass"
            style={{ padding: '2.5rem', borderRadius: '2rem', position: 'relative', background: 'white' }}
          >
            <Quote size={40} color="rgba(99, 102, 241, 0.1)" style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }} />
            <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.5rem', color: '#fbbf24' }}>
              {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="#fbbf24" />)}
            </div>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', fontStyle: 'italic', color: 'var(--text-light)', lineHeight: '1.8' }}>
              "{review.text}"
            </p>
            <div style={{ fontWeight: '700', color: 'var(--primary)' }}>- {review.author}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
