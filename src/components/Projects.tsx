import { FC } from "react";
import { Icon } from "@iconify/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import screenshot1 from "../images/aimfit-react-screenshot.png";
import screenshot2 from "../images/aimfit-mobile-screenshot.png";
import screenshot3 from "../images/boba-tier-screenshot.png";
import screenshot4 from "../images/date-night-screenshot.png";


const Projects: FC = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects">
        <div className="project">
          <div className="project-header">
            <div>
              <h3>AimFit</h3>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/jessetran03/aimfit-graphql"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://aimfit.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
          <a
            href="https://aimfit.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={screenshot1}
              alt="AimFit Screenshot"
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
          <div className="project-header">
            <div>
              <h3>AimFit Mobile</h3>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/jessetran03/aimfit-mobile"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="exp://exp.host/@@jessetran/aimfit-mobile"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
          <a
            href="exp://exp.host/@@jessetran/aimfit-mobile"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={screenshot2}
              alt="AimFit Mobile Screenshot"
            />
          </a>
          <div className="icons">
            <Icon icon="logos:react" />
            <Icon icon="logos:javascript" />
            <Icon icon="logos:express" />
            <Icon icon="logos:nodejs-icon" />
          </div>
        </div>

        <div className="project">
          <div className="project-header">
            <div>
              <h3>Boba Tier</h3>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/jessetran03/boba-tier-app"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://boba-tier-app.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
          <a
            href="https://boba-tier-app.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={screenshot3}
              alt="Boba Tier Screenshot"
            />
          </a>
          <div className="icons">
            <Icon icon="logos:react" />
            <Icon icon="logos:javascript" />
            <Icon icon="logos:express" />
            <Icon icon="logos:nodejs-icon" />
          </div>
        </div>

        <div className="project">
          <div className="project-header">
            <div>
              <h3>Date Night</h3>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/jessetran03/date-night"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://jessetran03.github.io/date-night/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
          <a
            href="https://jessetran03.github.io/date-night/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={screenshot4}
              alt="Date Night Screenshot"
            />
          </a>
          <div className="icons">
            <Icon icon="logos:javascript" />
            <Icon icon="logos:html-5" />
            <Icon icon="logos:css-3" />
            <Icon icon="logos:jquery" />
          </div>
        </div>
      </div>
      <div className="more-projects">
        Check out more of my projects on{" "}
        <a
          href="https://github.com/jessetran03"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <FontAwesomeIcon icon={faGithub} />
        </a>
        .
      </div>
    </section>
  );
};

export default Projects;
