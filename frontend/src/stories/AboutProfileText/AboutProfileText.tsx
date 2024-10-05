import React from "react";
import "./AboutProfileText.css";

interface AboutProfileTextProps {}

export const AboutProfileText = ({ ...props }: AboutProfileTextProps) => {
  return (
    <>
      <article className="about-profile-text">
        <p>Hey there you super awesome person!</p>
        <p>I’m Jay Patel, a passionate web developer based in Edmonton, AB.</p>
        <p>
          I work as a Software Developer using the JavaScript, React.js, and
          Node.js. With a solid background in full-stack development, I excel at
          creating dynamic, user-friendly web applications. My experience ranges
          from optimizing performance in existing projects to developing new,
          innovative solutions. I thrive in translating complex ideas into
          intuitive interfaces that enhance user experience, with a strong
          commitment to quality and client satisfaction.
        </p>
        <p>
          In my role as an Associate Software Engineer at RadicalRack
          Technologies, I successfully improved application performance by 25%
          and consistently delivered products with high user satisfaction. My
          project work includes developing a payment solution for e-commerce
          platforms and a community-driven job portal, utilizing tools like
          React.js, .NET Core, Bootstrap, MUI and MySQL.
        </p>
        <p>
          Currently pursuing my MS in Information Technology at Concordia
          University of Edmonton, I aim to expand my expertise and contribute to
          forward-thinking web development projects.
        </p>
        <p>Peace out ✌🏿 </p>
      </article>
    </>
  );
};

export default AboutProfileText;
