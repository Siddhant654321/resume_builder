import FeatureSection from "./components/FeatureSection"
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
    </div>
  )
}
export default App