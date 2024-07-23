import React from "react";
import "./Loading.scss";
const Loading = ({ darkMode }) => {
   return (
      <div
         className={`loader-container ${!darkMode ? "light-mode-loader" : ""}`}
      >
         <div className="loader"></div>
         <div className="loader"></div>
         <div className="loader"></div>
      </div>
   );
};

export default Loading;
