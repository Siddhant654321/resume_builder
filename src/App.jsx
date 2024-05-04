import FeatureSection from "./components/FeatureSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import TestimonialsSection from "./components/TestimonialsSection"

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <TestimonialsSection />
    </div>
  )
}
export default App