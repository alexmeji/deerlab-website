import React from 'react';

import WithDeerlab from '../components/WithDeerlab';
import About from '../components/About';
import Features from '../components/Features';
import Faq from '../components/Faq';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <WithDeerlab />
    <About />
    <Features />
    <Faq />
    <ContactUs />
    <Footer />
  </>
);

export default Home;
