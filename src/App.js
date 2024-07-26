import { useEffect, useState } from "react";
import "./App.scss";
import Layout from "./Pages/Layout/Layout";

import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import { FaSun } from "react-icons/fa";

function App() {
   const [darkMode, setDarkMode] = useState(true);

   const switchMode = () => {
      setDarkMode(!darkMode);
      console.log("clicked");
   };

   useEffect(() => {
      if (!darkMode) {
         document.body.classList.add("light-mode");
      } else {
         document.body.classList.remove("light-mode");
      }
      console.log("useEffect woring");
   }, [darkMode]);
   return (
      <div className="App">
         <div className={`mode-btn ${!darkMode ? "light-mode-btn" : ""}`}>
            <div className="switch">
               <div className="icon sun" onClick={switchMode}>
                  <FaSun />
               </div>
               <div className="icon moon" onClick={switchMode}>
                  <IoMoonSharp />
               </div>
            </div>
         </div>

         <Layout darkMode={darkMode} />
      </div>
   );
}

export default App;
