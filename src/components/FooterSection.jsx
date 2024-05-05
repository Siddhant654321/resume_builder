import { Link } from "react-router-dom";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <div className="footer_section">
      <div className="top_section">
        <h1><Link to="/">TITLE</Link></h1>
        <div className="right_section">
          <div>
            <h3>PAGES</h3>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/login">LOGIN</Link>
              </li>
              <li>
                <Link to="/signup">SIGNUP</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>LEGAL</h3>
            <ul>
              <li>
                <Link to="privacy-policy">PRIVACY POLICY</Link>
              </li>
              <li>
                <Link to="terms-and-conditions">TERMS AND CONDITIONS</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom_section">
        <p>
          Copyright © <span>Title™</span> All Rights Reserved
        </p>
      </div>
    </div>
  );
};
export default FooterSection;
