import { FC } from "react";
import { Icon } from "@iconify/react";

const Projects: FC = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects">
        <div className="project">
          <h3>AimFit</h3>
          <a
            href="https://aimfit.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/aimfit-react-screenshot.png"
              alt="Boba Tier Screenshot"
            />
          </a>
          <div className="icons">
            <Icon icon="logos:react" />
            <Icon icon="logos:apollostack" />
            <Icon icon="logos:graphql" />
            <Icon icon="logos:typescript-icon" />
            <Icon icon="logos:tailwindcss-icon" />
          </div>
        </div>

        <div className="project">
          <h3>AimFit Mobile</h3>
          <a
            href="https://aimfit.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/aimfit-mobile-screenshot.png"
              alt="Boba Tier Screenshot"
            />
          </a>
          <div className="icons">
            <Icon icon="logos:react" />
            <Icon icon="logos:apollostack" />
            <Icon icon="logos:graphql" />
            <Icon icon="logos:tailwindcss-icon" />
          </div>
        </div>

        <div className="project">
          <h3>Boba Tier</h3>
          <a
            href="https://aimfit.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/boba-tier-screenshot.png"
              alt="Boba Tier Screenshot"
            />
          </a>
          <div className="icons">
            <Icon icon="logos:react" />
            <Icon icon="logos:apollostack" />
            <Icon icon="logos:graphql" />
            <Icon icon="logos:tailwindcss-icon" />
          </div>
        </div>

        <div className="project">
          <h3>Date Night</h3>
          <a
            href="https://aimfit.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/date-night-screenshot.png"
              alt="Boba Tier Screenshot"
            />
          </a>
          <div className="icons">
            <Icon icon="logos:react" />
            <Icon icon="logos:apollostack" />
            <Icon icon="logos:graphql" />
            <Icon icon="logos:tailwindcss-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
