import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [subNav, setSubNav] = useState({});

  
  const openNav = () => {
    setNav(!nav);
  };
  
  const toggleSubNav = (key) => {
    setSubNav((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
  <>
    <nav>
      {/* mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar__close">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <ul className="mobile-navbar__links">
          {/* {Logo} */}
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <div onClick={() => toggleSubNav('about')} className="mobile-navbar__submenu-toggle">
              About
            </div>
            {subNav['about'] && (
              <ul className="mobile-navbar__sub-links ">
                <li>
                  <Link onClick={openNav} to="/about/company">
                    Company
                  </Link>
                </li>
                <li>
                  <Link onClick={openNav} to="/about/team">
                    Team
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div onClick={() => toggleSubNav('models')} className="mobile-navbar__submenu-toggle">
              Models
            </div>
            {subNav['models'] && (
              <ul className="mobile-navbar__sub-links">
                <li>
                  <Link onClick={openNav} to="/models/model1">
                    Model 1
                  </Link>
                </li>
                <li>
                  <Link onClick={openNav} to="/models/model2">
                    Model 2
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link onClick={openNav} to="/testimonials">
              Testimonials
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/team">
              Our Team
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* desktop */}
      <div className="navbar">
        <div className="navbar__img">
          <Link to="/">
            <img src={Logo} alt="logo" />
            {/* <span>Go</span>Machine */}
          </Link>
        </div>
        <ul className="navbar__links">
          <li>
            <Link className="home-link" to="/">
              Home
            </Link>
          </li>
          <li className="navbar__submenu">
            <Link className="about-link" to="/about">
              About
            </Link>
            <ul className="navbar__sub-links">
              <li>
                <Link to="/about/company">
                  Company
                </Link>
              </li>
              <li>
                <Link to="/about/team">
                  Team
                </Link>
              </li>
            </ul>
          </li>
          <li className="navbar__submenu">
            <Link className="models-link" to="/models">
              Models
            </Link>
            <ul className="navbar__sub-links">
              <li>
                <Link to="/models/model1">
                  Model 1
                </Link>
              </li>
              <li>
                <Link to="/models/model2">
                  Model 2
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="testi-link" to="/testimonials">
              Testimonials
            </Link>
          </li>
          <li>
            <Link className="team-link" to="/team">
              Our Team
            </Link>
          </li>
          <li>
            <Link className="contact-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="navbar__buttons">
          <i class="fa-solid fa-cart-shopping fa-xl"></i>
          <Link className="navbar__buttons__sign-in" to="/">
            Sign In
          </Link>
          <Link className="navbar__buttons__register" to="/">
            Register
          </Link>
        </div>

        {/* mobile */}
        <div className="mobile-hamb" onClick={openNav}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  </>
);

}

export default Navbar;
