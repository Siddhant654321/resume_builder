import "./Navbar.css";
import close_icon from "../assets/close_icon.svg";
import hamburger_icon from "../assets/hamburger_icon.svg";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(() => false);

  return (
    <main className="nav_container">
      <h1 className="nav_title">TITLE</h1>
      {!showMenu ? (
        <img
          src={hamburger_icon}
          className="hamburger_icon"
          onClick={() => setShowMenu(() => true)}
        />
      ) : (
        <img
          src={close_icon}
          className="close_icon"
          onClick={() => setShowMenu(() => false)}
        />
      )}
      <ul className={!showMenu && "hidden"}>
        <li>HOME</li>
        <li>FEATURES</li>
        <li>TESTIMONIALS</li>
        <li>REGISTER</li>
        <li>LOGIN</li>
      </ul>
    </main>
  );
};
export default Navbar;
