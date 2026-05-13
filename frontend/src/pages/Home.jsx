import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import Team from '../components/Team';
import Brands from '../components/Brands';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Pricing />
      <Team />
      <FAQ />
      <div className="bottom-integrated-section">
        <div className="centered-card-container">
          <ContactForm />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
