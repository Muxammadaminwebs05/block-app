import React from 'react';
import Navbar from "../src/components/Navbar/index.jsx"
import Hero from "../src/components/Hero/index.jsx"
import About from "../src/components/About/index.jsx"
import Companies from "../src/components/Companies/index.jsx"
import Recomendation from "../src/components/Recomendation/index.jsx"
import Result from "../src/components/Result/index.jsx"
import Footer from "../src/components/Footer/index.jsx"
import Slider from "../src/components/slider/slider.jsx"
import Carousel2 from './components/carousel/Carousel.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Slider /> */}
      <Carousel2/>
      <Companies />
      <Recomendation />
      <Result />
      <Footer />
    </>
  );
};

export default App;