import React from "react";
import "./Home.scss";

import {
   FaInstagram,
   FaLinkedinIn,
   FaGithub,
   FaDownload,
   FaReact,
   FaHtml5,
   FaCss3,
   FaSquareJs,
   FaGitAlt,
   FaNpm,
   FaBootstrap,
   FaSass,
} from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";
import pic from "../../images/portfolio-pic-2.png";
import { FaJsSquare } from "react-icons/fa";
import AnimatedIcons from "../../Components/AnimatedIcons/AnimatedIcons";
const Home = ({
   scrollFunction,
   reference,
   sideMenuNavigation,
   aboutRef,
   contactRef,
   projectsRef,
}) => {
   const icons = [
      <FaHtml5 />,
      <FaCss3 />,
      <FaSquareJs />,
      <FaReact />,
      <FaBootstrap />,
      <FaSass />,
      <TbBrandRedux />,
      <FaNpm />,
      <FaGitAlt />,
   ];
   return (
      <div className="container home">
         <div className="home-top">
            <div className="text-zone">
               <h1>
                  Hi, i'm a <br />
                  <span>frontend developer.</span>
               </h1>
               <p className="about-me">
                  based in TN, India, I'll help you build beautiful websites
                  your users will love.
               </p>

               <AnimatedIcons icons={icons} idx={8} />
               <div className="social-links">
                  <div className="links">
                     <div className="link">
                        <FaGithub />
                     </div>
                     <div className="link">
                        <FaLinkedinIn />
                     </div>
                     <div className="link">
                        <FaInstagram />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="scroll-down">
            <div className="mouse" onClick={() => scrollFunction(reference)}>
               <div className="dot"></div>
            </div>
         </div>
      </div>
   );
};

export default Home;
