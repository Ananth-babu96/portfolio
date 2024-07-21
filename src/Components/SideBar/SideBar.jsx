import React from "react";
import "./SideBar.scss";
const SideBar = ({
   sideMenuNavigation,
   menuOpen,
   homeRef,
   aboutRef,
   projectsRef,
   contactRef,
}) => {
   return (
      <div className={`side-menu ${menuOpen ? "show" : ""}`}>
         <ul>
            <li onClick={() => sideMenuNavigation(homeRef)}>
               <p>home</p>
            </li>
            <li onClick={() => sideMenuNavigation(aboutRef)}>
               <p>about</p>
            </li>
            <li onClick={() => sideMenuNavigation(projectsRef)}>
               <p>projects</p>
            </li>
            <li onClick={() => sideMenuNavigation(contactRef)}>
               <p>contact</p>
            </li>
         </ul>
      </div>
   );
};

export default SideBar;
