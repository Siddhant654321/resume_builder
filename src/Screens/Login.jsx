import "./Auth.css";
import "./custom_checkbox.css";
import { useState } from "react";
import login_image from "../assets/login_image.png";
import google_icon from "../assets/google_icon.png";
import InputField from "../components/InputField";
import BlurredSVG from "../components/BlurredSVG";

const Login = () => {
  const [inputValue, setInputValue] = useState(() => ({
    email: "",
    password: "",
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
      <img src={login_image} alt="" />
      <div>
        <div>
          <h2>WELCOME BACK</h2>
          <p>Please enter your email and password.</p>
          <form className="auth_form">
            <div className="input_field_container">
              <InputField
                title="EMAIL"
                type="email"
                placeholder="Enter your email"
                inputValue={inputValue}
                field="email"
                setInputValue={setInputValue}
              />
            </div>
            <div className="input_field_container">
              <InputField
                title="PASSWORD"
                type="password"
                placeholder="∗∗∗∗∗∗∗∗∗∗∗∗∗"
                inputValue={inputValue}
                field="password"
                setInputValue={setInputValue}
              />
            </div>
            <div class="checkbox-wrapper-33">
              <label class="checkbox">
                <input
                  class="checkbox__trigger visuallyhidden"
                  type="checkbox"
                />
                <span class="checkbox__symbol">
                  <svg
                    aria-hidden="true"
                    class="icon-checkbox"
                    width="28px"
                    height="28px"
                    viewBox="0 0 28 28"
                    version="1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
                <p class="checkbox__textwrapper">Remember Me</p>
              </label>
            </div>

            <button type="submit" className="auth_btn">
              Login
            </button>
            <button type="button" class="login_with_google_btn">
              <img src={google_icon} alt="" />
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
export default Login;
