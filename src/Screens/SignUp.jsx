import './Auth.css';
import signup_image from '../assets/signup_image.png';
import BlurredSVG from '../components/BlurredSVG';
import InputField from '../components/InputField';
import { useState } from 'react';

const SignUp = () => {

  const [inputValue, setInputValue] = useState(() => ({
    name: '',
    email: '',
    password: '',
  }));

  console.log(inputValue)
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
        <form>
          <h2>GET STARTED</h2>
          <p>Please enter your details below to continue.</p>
          <form>
            <InputField
              title="NAME"
              placeholder="Enter your name"
              inputValue={inputValue}
              field="name"
              setInputValue={setInputValue}
            />
            <InputField
              title="EMAIL"
              type='email'
              placeholder="Enter your email"
              inputValue={inputValue}
              field="email"
              setInputValue={setInputValue}
            />
            <InputField
              title="PASSWORD"
              type='password'
              placeholder="**********"
              inputValue={inputValue}
              field="password"
              setInputValue={setInputValue}
            />
          </form>
        </form>
      </div>
    </main>
  );
}
export default SignUp