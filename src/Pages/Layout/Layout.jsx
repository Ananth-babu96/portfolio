import "./Layout.scss";

//pages imports---------------------------
import Home from "../Home/Home";
import About from "../About/About";
import ContactPage from "../Contact/ContactPage";
import Projects from "../Projects/Projects";

const Layout = () => {
   return (
      <div className="wrapper">
         <div className="left">
            <section>
               <Home />
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
               <ContactPage />
            </section>
            <hr className="separator" />
         </div>
      </div>
   );
};

export default Layout;
