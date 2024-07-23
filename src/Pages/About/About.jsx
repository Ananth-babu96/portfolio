import React from "react";
import "./About.scss";

const About = () => {
   return (
      <div className="container about">
         <div className="text-zone">
            <p className="title">About</p>

            <div className="content">
               <p className="animated-text">
                  Hi, I'm Ananth babu, a passionate and{" "}
                  <span>self-taught </span>
                  front-end developer. My journey into web development began out
                  of sheer curiosity and a{" "}
                  <span>desire to create something meaningful</span> from
                  scratch. Over the years, I’ve honed my skills in HTML, CSS,
                  and JavaScript, and I've become proficient in React, enabling
                  me to build <span>dynamic</span> and <span>responsive</span>{" "}
                  web applications.
               </p>
               <p className="animated-text">
                  I believe that the world of technology is ever-evolving, and
                  I'm always eager to <span>learn</span> and <span>adapt</span>.
                  This drive has pushed me to continuously explore new
                  technologies, tools, and best practices. I enjoy{" "}
                  <span>solving problems</span> and finding creative solutions
                  to <span>enhance user experiences</span>.
               </p>
               <p className="animated-text">
                  As a dedicated person, I am committed to delivering
                  high-quality work and continuously improving my craft. I
                  thrive in <span>collaborative environments</span> and enjoy
                  working with others to
                  <span> bring ideas to life</span>. My goal is to create
                  intuitive and engaging web experiences that make a positive
                  impact.
               </p>
            </div>
         </div>
      </div>
   );
};

export default About;
