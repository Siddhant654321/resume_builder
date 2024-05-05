import "./FooterSection.css";

const FooterSection = () => {
  return (
    <div className="footer_section">
      <div className="top_section">
        <h1>TITLE</h1>
        <div className="right_section">
          <div>
            <h3>PAGES</h3>
            <ul>
              <li>HOME</li>
              <li>LOGIN</li>
              <li>SIGNUP</li>
            </ul>
          </div>
          <div>
            <h3>LEGAL</h3>
            <ul>
              <li>PRIVACY POLICY</li>
              <li>TERMS AND CONDITIONS</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom_section">
        <p>Copyright © <span>Title™</span> All Rights Reserved</p>
      </div>
    </div>
  );
};
export default FooterSection;
