import './Auth.css';
import signup_image from '../assets/signup_image.png';
import BlurredSVG from '../components/BlurredSVG';

const SignUp = () => {
  return (
    <main className='auth_container'>
        <BlurredSVG className='blurred_svg auth_ellipse_1' width={547} height={264} />
        <BlurredSVG className='blurred_svg auth_ellipse_2' width={642} height={311} />
        <BlurredSVG className='blurred_svg auth_ellipse_3' width={539} height={260} />
        <img src={signup_image} alt='' />
        <div>
            <form>
                <h2>GET STARTED</h2>
                <p>Please enter your details below to continue.</p>
                <form>
                    
                </form>
            </form>
        </div>
    </main>
  )
}
export default SignUp