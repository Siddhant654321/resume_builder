import './Auth.css';
import signup_image from '../assets/signup_image.png';
import BlurredSVG from '../components/BlurredSVG';
import InputField from '../components/InputField';
import google_icon from '../assets/google_icon.png';
import { useState } from 'react';

const SignUp = () => {

  const [inputValue, setInputValue] = useState(() => ({
    name: '',
    email: '',
    password: '',
  }));

  return (
    <main className="auth_container">
      <BlurredSVG
        className="blurred_svg auth_ellipse_1"
        width={547}
        height={264}
      />
      <BlurredSVG
        className="blurred_svg auth_ellipse_2"
        width={642}
        height={311}
      />
      <BlurredSVG
        className="blurred_svg auth_ellipse_3"
        width={539}
        height={260}
      />
      <img src={signup_image} alt="" />
      <div>
        <div>
          <h2>GET STARTED</h2>
          <p>Please enter your details below to continue.</p>
          <form className='auth_form'>
            <div className="input_field_container">
            <InputField
              title="NAME"
              placeholder="Enter your name"
              inputValue={inputValue}
              field="name"
              setInputValue={setInputValue}
            />
            </div>
            <div className="input_field_container">
            <InputField
              title="EMAIL"
              type='email'
              placeholder="Enter your email"
              inputValue={inputValue}
              field="email"
              setInputValue={setInputValue}
            />
            </div>
            <div className="input_field_container">
            <InputField
              title="PASSWORD"
              type='password'
              placeholder="∗∗∗∗∗∗∗∗∗∗∗∗∗"
              inputValue={inputValue}
              field="password"
              setInputValue={setInputValue}
            />
            </div>
            <button type='submit' className='auth_btn'>Sign Up</button>
            <button type="button" class="login_with_google_btn">
                <img src={google_icon} alt="" />
                Sign in with Google
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
export default SignUp