import "./Layout.scss";

import React, { useEffect, useRef, useState } from "react";

//pages imports---------------------------
import Home from "../Home/Home";
import About from "../About/About";
import ContactPage from "../Contact/ContactPage";
import Projects from "../Projects/Projects";

//components imports-------------------
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";

const Layout = () => {
   const homeRef = useRef(null);
   const aboutRef = useRef(null);
   const projectsRef = useRef(null);
   const contactRef = useRef(null);

   const [menuOpen, setMenuOpen] = useState(false);
   const [currentSection, setCurrentSection] = useState("home");

   const sideMenuNavigation = (reference) => {
      reference.current.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
   };

   //scroll to section-----------------------------------------------------
   useEffect(() => {
      const options = {
         root: null,
         rootMargin: "0px",
         threshold: 0.5,
      };
      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               setCurrentSection(entry.target.getAttribute("data-section"));
            }
         });
      }, options);
      const sections = [homeRef, aboutRef, projectsRef, contactRef];
      sections.forEach((section) => {
         if (section.current) observer.observe(section.current);
      });

      return () => {
         sections.forEach((section) => {
            if (section.current) observer.unobserve(section.current);
         });
      };
   }, [homeRef, aboutRef, projectsRef, contactRef]);
   //-----------------------------------------------------------------------

   return (
      <div className="wrapper">
         <Header
            currentSection={currentSection}
            homeRef={homeRef}
            projectsRef={projectsRef}
            aboutRef={aboutRef}
            contactRef={contactRef}
            setMenuOpen={setMenuOpen}
            menuOpen={menuOpen}
         />
         <SideBar
            sideMenuNavigation={sideMenuNavigation}
            menuOpen={menuOpen}
            homeRef={homeRef}
            aboutRef={aboutRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
         />
         <div className="left">
            <section ref={homeRef} data-section="home-section">
               <Home
                  scrollFunction={sideMenuNavigation}
                  reference={aboutRef}
                  sideMenuNavigation={sideMenuNavigation}
                  aboutRef={aboutRef}
                  projectsRef={projectsRef}
                  contactRef={contactRef}
               />
            </section>
         </div>
         <div className="right">
            <section ref={aboutRef} data-section="about-section">
               <About />
            </section>
            <hr className="separator" />
            <section
               ref={projectsRef}
               data-section="projects-section"
               style={{ height: "300px" }}
            >
               <Projects />
            </section>
            <hr className="separator" />
            <section ref={contactRef} data-section="contact-section">
               <ContactPage />
            </section>
            <hr className="separator" />
         </div>
      </div>
   );
};

export default Layout;
