import PropTypes from 'prop-types';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { socialData } from '../../data.json';

const Header = ({ data }) => {
  const { logoDark, logoLight } = data;

  const [mobileToggle, setMobileToggle] = useState(false);

  const handleMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };

  return (
    <header >
      {/* Mob header */}
      <div className="mob-header" onClick={handleMobileToggle}>
        <div className="mob-h-right">
          <button className="toggler-menu">
            <span />
          </button>
        </div>
      </div>
      {/* End */}
      {/* Header Top */}
      <div
        className={`header-left-fixed one-page-nav ${
          mobileToggle ? 'menu-open bg-header2' : 'bg-heade'
        }`}
      >
        <ul className="main-menu mt-5 ">
          <li>
            <ScrollLink
              to="home"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Sobre
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="carousel"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Projetos
            </ScrollLink>
          </li>
          
          
          <li>
            <ScrollLink
              to="contact"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Contato
            </ScrollLink>
          </li>
        </ul>
        <ul className="nav social-link">
          {socialData.map((element, index) => (
            <li key={index}>
              <a href={element.link} target="_blank" rel="noopener noreferrer">
                <Icon icon={`fa6-brands:${element.icon}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* End Header Top */}
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.object,
};

export default Header;
