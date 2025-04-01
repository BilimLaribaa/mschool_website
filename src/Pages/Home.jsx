import React from 'react';
import Slider from '../components/Slider';
import AboutUsSection from '../components/AboutUsSection';
import Whychooseus from '../components/Whychooseus';
import AdmissionArea from '../components/Gallery';  
import Footer from '../components/Footer';    
import Register from '../components/Register';  
import MissionVision from '../components/MissionVision';
function Home() {
  return (
    <>
  
<Slider/>
<AboutUsSection/>
  <Whychooseus/>
  <Register/>
  <MissionVision/>
  <AdmissionArea/>
  <Footer/>
 
  
</>

  );
}

export default Home; 