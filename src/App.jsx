import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ValuesGrid from './components/ValuesGrid';
import JourneySection from './components/JourneySection';
import Services from './components/Services';
import Reviews from './components/Reviews';
import QuoteSection from './components/QuoteSection';
import Scheduling from './components/Scheduling';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Psyray Care | B. Raynu Sri - Counselling Psychologist</title>
          <meta name="description" content="Professional Counselling Psychologist specialized in Career Mapping, Relationship Management, and Individual Therapy. Experience a bespoke pathway to mental wellness." />
          <meta name="keywords" content="Psychologist, Chennai, Career Counselling, Relationship Counselling, Raynu Sri, Psyray Care, Mental Wellness" />
          <meta property="og:title" content="Psyray Care | B. Raynu Sri" />
          <meta property="og:description" content="Nurturing your quiet resilience through professional, evidence-based counselling." />
          <meta property="og:type" content="website" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>

        <Navbar />
        
        <main>
          <Hero />
          <About />
          <ValuesGrid />
          <JourneySection />
          <Services />
          <Reviews />
          <QuoteSection />
          <Scheduling />
        </main>

        <Footer />
        
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          
          /* Modern scrollbar */
          ::-webkit-scrollbar {
            width: 10px;
          }
          ::-webkit-scrollbar-track {
            background: #faf9f6;
          }
          ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 5px;
            border: 3px solid #faf9f6;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: var(--accent-teal);
          }
          
          @media (max-width: 991px) {
            .container {
              padding: 0 1.5rem;
            }
          }

          /* Editorial Typography Effects */
          .serif-italics {
             font-family: var(--font-serif);
             font-style: italic;
             font-weight: 400;
          }
        `}</style>
      </div>
    </HelmetProvider>
  );
}

export default App;
