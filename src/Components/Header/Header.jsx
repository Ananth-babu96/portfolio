import React, { useState } from "react";
import "./Header.scss";
const Header = ({
   currentSection,
   homeRef,
   aboutRef,
   projectsRef,
   contactRef,
   setMenuOpen,
   menuOpen,
}) => {
   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };
   return (
      <div className="header">
         <div className="name">
            <h4>
               Portfoli<span>o.</span>
            </h4>
         </div>
         <div
            className={`ham-menu ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
         >
            <span></span>
            <span></span>
         </div>
         <ul>
            <li
               className={currentSection === "home-section" ? "current" : ""}
               onClick={() =>
                  homeRef.current.scrollIntoView({ behavior: "smooth" })
               }
            >
               <p>home</p>
            </li>
            <li
               className={currentSection === "about-section" ? "current" : ""}
               onClick={() =>
                  aboutRef.current.scrollIntoView({ behavior: "smooth" })
               }
            >
               <p>about</p>
            </li>
            <li
               className={
                  currentSection === "projects-section" ? "current" : ""
               }
               onClick={() =>
                  projectsRef.current.scrollIntoView({
                     behavior: "smooth",
                  })
               }
            >
               <p>projects</p>
            </li>
            <li
               className={currentSection === "contact-section" ? "current" : ""}
               onClick={() =>
                  contactRef.current.scrollIntoView({
                     behavior: "smooth",
                  })
               }
            >
               <p>contact</p>
            </li>
         </ul>
      </div>
   );
};

export default Header;
