import './HeroSection.css';
import hero_image from '../assets/hero_image.png';
import BlurredSVG from './BlurredSVG';

const HeroSection = () => {
  return (
    <main className='hero_section_container'>
      <BlurredSVG className='blurred_svg ellipse_1' />
      <BlurredSVG className='blurred_svg ellipse_2' width={786} height={682} />
      <BlurredSVG className='blurred_svg ellipse_3' width={847} height={564} />
      <div>
        <p>Hi There!</p>
        <h1><span className='purple_text'>TITLE</span> BRINGS YOU THE BEST RESUME</h1>
        <p>Getting a job has never been more easier before.</p>
        <button>Get Started</button>
      </div>
      <div>
        <img src={hero_image} alt="" />
      </div>
    </main>
  )
}
export default HeroSection