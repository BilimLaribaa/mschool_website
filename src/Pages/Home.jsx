import React from 'react';
import Slider from '../components/Slider';
import AboutUsSection from '../components/AboutUsSection';
import Whychooseus from '../components/Whychooseus';

import Register from '../components/Register';
import MissionVision from '../components/MissionVision';
import GallerySection from '../components/GallerySection';

function Home() {
  return (
    <>
      <Slider />
      <AboutUsSection />
      <Whychooseus />
      <Register />
      <MissionVision />
     <GallerySection/>
    </>
  );
}

export default Home; 