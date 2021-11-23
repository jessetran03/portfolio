import { FC } from "react";

const Nav: FC = () => {
  return (
    <nav className="sticky">
      <div>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Nav;
