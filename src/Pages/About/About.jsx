import React from "react";
import "./About.scss";

import { IoPersonSharp } from "react-icons/io5";
import { FaRegFlag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiBuildings } from "react-icons/bi";
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
/*   <p className="about-ph">
               I am a passionate front-end developer with a keen eye for detail
               and a deep love for crafting engaging user interfaces. My journey
               in web development began with a fascination for how design and
               functionality come together to create seamless user experiences.
               Over the years, I have honed my skills in various technologies,
               with a particular focus on React, Bootstrap, and Sass.
            </p>
            <p className="about-ph">
               With React, I build dynamic and responsive applications that not
               only meet but exceed user expectations. My proficiency in
               Bootstrap allows me to rapidly prototype and develop mobile-first
               websites that are both visually appealing and functionally
               robust. Additionally, my expertise in Sass ensures that my
               stylesheets are organized, maintainable, and scalable, enabling
               efficient project management and collaboration.
            </p>
            <p className="about-ph">
               Driven by curiosity and a commitment to continuous learning, I
               stay updated with the latest trends and best practices in
               front-end development. I take pride in writing clean, efficient
               code and enjoy solving complex problems to deliver high-quality
               solutions. Whether working on a team or independently, I am
               dedicated to creating user-friendly and aesthetically pleasing
               interfaces that leave a lasting impression.
            </p>*/
