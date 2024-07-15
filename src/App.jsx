import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Mission/Mission';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import Mission from './Components/Mission/Mission';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Projects" title="What We Offer" />
        <Projects />
        <About setPlayState={setPlayState} />

        <Title subTitle="mission" title="Our Photos" />
        <Mission />
        <Title subTitle="TESTIMONIALS" title="What Students Say" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
