import "./Layout.scss";

//pages imports---------------------------
import Home from "../Home/Home";
import About from "../About/About";
import ContactPage from "../Contact/ContactPage";
import Projects from "../Projects/Projects";
import { useEffect, useRef, useState } from "react";

const Layout = ({ darkMode }) => {
   const aboutRef = useRef(null);
   const projectsRef = useRef(null);
   const contactRef = useRef(null);

   const [currentSection, setCurrentSection] = useState("about");

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  setCurrentSection(entry.target.getAttribute("data-section"));
               }
            });
         },
         {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
         }
      );
      const sections = [aboutRef, projectsRef, contactRef];
      sections.forEach((section) => {
         if (section.current) {
            observer.observe(section.current);
         }
      });

      return () => {
         sections.forEach((section) => {
            if (section.current) {
               observer.unobserve(section.current);
            }
         });
      };
   }, [aboutRef, projectsRef, contactRef]);
   return (
      <>
         <div
            className={`background-img ${!darkMode ? "light-mode-img" : ""}`}
         ></div>
         <div className={`wrapper ${!darkMode ? "light-mode-wrapper" : ""}`}>
            <div className="left">
               <section>
                  <Home
                     darkMode={darkMode}
                     aboutRef={aboutRef}
                     projectsRef={projectsRef}
                     contactRef={contactRef}
                     currentSection={currentSection}
                  />
               </section>
               <hr className="separator home-separator" />
            </div>
            <div className="right">
               <section ref={aboutRef} data-section="about">
                  <About />
               </section>
               <hr className="separator" />
               <section
                  style={{ height: "300px" }}
                  ref={projectsRef}
                  data-section="projects"
               >
                  <Projects />
               </section>
               <hr className="separator" />
               <section ref={contactRef} data-section="contact">
                  <ContactPage darkMode={darkMode} />
               </section>
            </div>
         </div>
      </>
   );
};

export default Layout;
