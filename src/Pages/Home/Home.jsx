import React, { useRef } from "react";
import "./Home.scss";

import {
   FaInstagram,
   FaLinkedinIn,
   FaGithub,
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
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import AnimatedIcons from "../../Components/AnimatedIcons/AnimatedIcons";
const Home = ({
   darkMode,
   aboutRef,
   projectsRef,
   contactRef,
   currentSection,
}) => {
   const scrollFunction = (scrollTo) => {
      scrollTo.current.scrollIntoView({ behavior: "smooth", block: "center" });
   };
   return (
      <div className="container home">
         <div className={`home-top ${!darkMode ? "light-mode-home" : ""}`}>
            <div className="text-zone">
               <h1 className={!darkMode ? "light-mode-h1" : ""}>
                  Hi, i'm a <br />
                  <span>frontend developer.</span>
               </h1>
               <p className="about-me">
                  based in TN, India, I'll help you build beautiful websites
                  your users will love.
               </p>

               <div className="social-links">
                  <div className="links">
                     <div className="link">
                        <a
                           href="https://github.com/Ananth-babu96"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FaGithub />
                        </a>
                     </div>
                     <div className="link">
                        <a
                           href="https://www.linkedin.com/in/ananth-babu-94b171315/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FaLinkedinIn />
                        </a>
                     </div>
                     <div className="link">
                        <a
                           href="https://www.instagram.com/nebula_cluster_616/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FaInstagram />
                        </a>
                     </div>
                  </div>
               </div>
               <div className="navigations">
                  <div
                     onClick={() => scrollFunction(aboutRef)}
                     className={
                        currentSection === "about" ? "current-section" : ""
                     }
                  >
                     <div className="line"></div>
                     <p>about</p>
                  </div>
                  <div
                     onClick={() => scrollFunction(projectsRef)}
                     className={
                        currentSection === "projects" ? "current-section" : ""
                     }
                  >
                     <div className="line"></div>
                     <p>projects</p>
                  </div>
                  <div
                     onClick={() => scrollFunction(contactRef)}
                     className={
                        currentSection === "contact" ? "current-section" : ""
                     }
                  >
                     <div className="line"></div>
                     <p>contact</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
