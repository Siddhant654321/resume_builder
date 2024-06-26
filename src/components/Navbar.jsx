import "./Navbar.css";
import close_icon from "../assets/close_icon.svg";
import hamburger_icon from "../assets/hamburger_icon.svg";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(() => false);

  return (
    <>
      <main className="nav_container">
        <h1 className="nav_title"><Link to="/">TITLE</Link></h1>
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
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <HashLink smooth={true} to='/#features'>FEATURES</HashLink>
          </li>
          <li>
            <HashLink smooth={true} to="/#testimonials">TESTIMONIALS</HashLink>
          </li>
          <li>
            <Link to="/signup">SIGNUP</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </main>
      <Outlet />
    </>
  );
};
export default Navbar;
