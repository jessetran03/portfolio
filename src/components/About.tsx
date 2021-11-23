import { FC } from "react";

const About: FC = () => {
  return (
    <section id="about" className="about">
      <h2>About</h2>
      <p>
        Hello, my name is Jesse Tran. I am a full stack software developer and a graduate of Thinkful&apos;s
        Engineering Flex program. I attended the University of Arkansas where I got a Bachelor&apos;s degree in Mechanical Engineering
        and a Master&apos;s degree in Accounting. I have professional experience
        working in continuous improvement as well as working with implementing
        software for clients.
      </p>
      <h3>Skills</h3>
      <ul className="skills">
        <li>React</li>
        <li>React Native</li>
        <li>NodeJS</li>
        <li>Express</li>
        <li>Apollo</li>
        <li>GraphQL</li>
        <li>PostgreSQL</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>HTML/CSS</li>
        <li>REST API</li>
        <li>Git</li>
      </ul>
    </section>
  );
};

export default About;
