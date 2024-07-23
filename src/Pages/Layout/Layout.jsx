import "./Layout.scss";

//pages imports---------------------------
import Home from "../Home/Home";
import About from "../About/About";
import ContactPage from "../Contact/ContactPage";
import Projects from "../Projects/Projects";

const Layout = ({ darkMode }) => {
   return (
      <>
         <div
            className={`background-img ${!darkMode ? "light-mode-img" : ""}`}
         ></div>
         <div className={`wrapper ${!darkMode ? "light-mode-wrapper" : ""}`}>
            <div className="left">
               <section>
                  <Home darkMode={darkMode} />
               </section>
               <hr className="separator home-separator" />
            </div>
            <div className="right">
               <section>
                  <About />
               </section>
               <hr className="separator" />
               <section style={{ height: "300px" }}>
                  <Projects />
               </section>
               <hr className="separator" />
               <section>
                  <ContactPage darkMode={darkMode} />
               </section>
               <hr className="separator" />
            </div>
         </div>
      </>
   );
};

export default Layout;
