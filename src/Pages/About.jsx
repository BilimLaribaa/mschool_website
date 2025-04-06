import AboutUsSection from "../components/AboutUsSection";
import MissionVision from "../components/MissionVision";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";


export default function About() {
  return (
    <div>
      <Breadcrumbs title="About Us" description="Learn more about MS School" />
      <AboutUsSection />
      <MissionVision />
      
    </div>
  );
}
