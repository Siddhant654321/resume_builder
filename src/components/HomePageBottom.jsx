import { useNavigate } from 'react-router-dom';
import BlurredSVG from './BlurredSVG';
import './HomePageBottom.css';

const HomePageBottom = () => {
  const navigate = useNavigate();

  return (
    <div>
        <div className='bottom_section_container'>
            <BlurredSVG className='blurred_svg bottom_ellipse_1' width={720} height={381} />
            <BlurredSVG className='blurred_svg bottom_ellipse_2' width={547} height={264} />
            <h1 className='section_main_heading bottom_section_heading'>LET&#8217;S GET YOU YOUR <span className='purple_text'>NEXT JOB</span></h1>
            <p className='bottom_section_para'>Leave the resume crafting to us, so you can concentrate on what truly matters. Your next great career move starts here.</p>
            <button className='get_started_button bottom_section_button' onClick={() => navigate('/signup')}>Get Started</button>
        </div>
    </div>
  )
}
export default HomePageBottom