import { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sticky">
        <div className="inner">
          <div className="logo">
            <a href="#main">JT</a>
          </div>
          <div className="links">
            <div className="desktop">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="mobile">
              <div className="bars" tabIndex={0} onClick={() => setOpen(!open)}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {open && (
        <div className="mobile-nav" onClick={() => setOpen(false)}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </>
  );
};

export default Nav;
