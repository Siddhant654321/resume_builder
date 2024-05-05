import FeatureSection from "./components/FeatureSection"
import FooterSection from "./components/FooterSection"
import HeroSection from "./components/HeroSection"
import HomePageBottom from "./components/HomePageBottom"
import Navbar from "./components/Navbar"
import TestimonialsSection from "./components/TestimonialsSection"

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <TestimonialsSection />
      <HomePageBottom />
      <FooterSection />
    </div>
  )
}
export default App