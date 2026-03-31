import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Calendar, Mail } from 'lucide-react';

const Scheduling = () => {
  const [showModal, setShowModal] = useState(false);

  const contactOptions = [
    {
      icon: <Calendar size={24} />,
      title: 'Schedule Online',
      description: 'Book via Calendly',
      href: 'https://calendly.com/sriraynu', // Update with your Calendly link
      color: '#0E6F76'
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'WhatsApp',
      description: 'Quick messaging',
      href: 'https://wa.me/919876543210', // Update with your WhatsApp number
      color: '#25D366'
    },
    {
      icon: <Phone size={24} />,
      title: 'Call',
      description: 'Direct phone',
      href: 'tel:+919876543210', // Update with your phone number
      color: '#001F3D'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      description: 'sriraynu@gmail.com',
      href: 'mailto:sriraynu@gmail.com',
      color: '#64748B'
    }
  ];

  return (
    <section id="contact" style={{ padding: '0', position: 'relative', overflow: 'hidden' }}>
       <div style={{ 
          position: 'relative', 
          width: '100%', 
          minHeight: '600px', 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Background Image */}
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            zIndex: 1 
          }}>
            <img 
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" 
              alt="Mountain Landscape" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Overlay for better text readability */}
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              background: 'linear-gradient(to right, rgba(250, 249, 246, 0.9) 0%, rgba(250, 249, 246, 0.4) 100%)' 
            }}></div>
          </div>
          
          <div className="container" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Begin Your Journey Today</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', maxWidth: '450px', marginBottom: '3rem', lineHeight: '1.8' }}>
                If you're ready to take the first step towards a more balanced, peaceful life, B. Raynu Sri is here to guide you through the process with professional care and deep empathy.
              </p>
              
              <button 
                onClick={() => setShowModal(true)}
                className="btn btn-primary"
                style={{ cursor: 'pointer' }}
              >
                BOOK INITIAL CONSULTATION
              </button>
            </motion.div>
            
            <div style={{ display: 'none' }}>
              {/* This space is for the scenic view in the design */}
            </div>
          </div>
       </div>

       {/* Contact Modal */}
       {showModal && (
         <div style={{
           position: 'fixed',
           top: 0,
           left: 0,
           right: 0,
           bottom: 0,
           background: 'rgba(0, 0, 0, 0.5)',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           zIndex: 2000,
           padding: '1rem'
         }}>
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             style={{
               background: 'white',
               borderRadius: '1.5rem',
               padding: '3rem',
               maxWidth: '500px',
               width: '100%',
               boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
             }}
           >
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
               <h3 style={{ fontSize: '1.8rem', color: 'var(--text-dark)' }}>Get In Touch</h3>
               <button
                 onClick={() => setShowModal(false)}
                 style={{
                   background: 'none',
                   border: 'none',
                   fontSize: '2rem',
                   cursor: 'pointer',
                   color: 'var(--text-light)'
                 }}
               >
                 ×
               </button>
             </div>

             <p style={{ fontSize: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem' }}>
               Choose your preferred way to connect with Raynu Sri:
             </p>

             <div style={{ display: 'grid', gap: '1rem' }}>
               {contactOptions.map((option, idx) => (
                 <a
                   key={idx}
                   href={option.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: '1rem',
                     padding: '1rem 1.5rem',
                     border: `2px solid ${option.color}20`,
                     borderRadius: '0.8rem',
                     textDecoration: 'none',
                     color: 'var(--text-dark)',
                     transition: 'var(--transition)',
                     cursor: 'pointer'
                   }}
                   onMouseEnter={(e) => {
                     e.target.style.background = `${option.color}10`;
                     e.target.style.borderColor = option.color;
                     e.target.style.transform = 'translateX(4px)';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.background = 'transparent';
                     e.target.style.borderColor = `${option.color}20`;
                     e.target.style.transform = 'translateX(0)';
                   }}
                 >
                   <div style={{ color: option.color }}>
                     {option.icon}
                   </div>
                   <div>
                     <div style={{ fontWeight: '600', fontSize: '1rem' }}>{option.title}</div>
                     <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{option.description}</div>
                   </div>
                 </a>
               ))}
             </div>

             <button
               onClick={() => setShowModal(false)}
               style={{
                 width: '100%',
                 marginTop: '2rem',
                 padding: '1rem',
                 background: 'var(--bg-main)',
                 border: '1px solid var(--border-light)',
                 borderRadius: '0.8rem',
                 cursor: 'pointer',
                 fontSize: '1rem',
                 fontWeight: '600',
                 color: 'var(--text-dark)',
                 transition: 'var(--transition)'
               }}
               onMouseEnter={(e) => {
                 e.target.style.background = 'var(--border-light)';
               }}
               onMouseLeave={(e) => {
                 e.target.style.background = 'var(--bg-main)';
               }}
             >
               Close
             </button>
           </motion.div>
         </div>
       )}
    </section>
  );
};

export default Scheduling;
