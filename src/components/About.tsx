import { FC } from "react";

const About: FC = () => {
  return (
    <section id="about" className="about">
      <h2>About</h2>
      <p>
        Hello, my name is Jesse Tran. I am a full stack software developer based
        out of Houston, Texas. In addition to completion of Thinkful's Software
        Engineering Flex program, I received my Bachelor's in Mechanical
        Engineering and Master's in Accounting from the University of Arkansas.
        Throughout my career, I grew to love software development, and I want to
        continue expanding my knowledge and skills within the field. I am
        currently utilizing some of the latest technologies to create awesome
        web applications with Poetic.
      </p>
      <br />
      <br />
      <br />
      <h3>Skills</h3>
      <ul className="skills">
        <li>React</li>
        <li>React Native</li>
        <li>NodeJS</li>
        <li>Express</li>
        <li>Apollo</li>
        <li>GraphQL</li>
        <li>Hasura</li>
        <li>PostgreSQL</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>jQuery</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>REST API</li>
        <li>Git</li>
        <li>CI/CD</li>
      </ul>
    </section>
  );
};

export default About;
