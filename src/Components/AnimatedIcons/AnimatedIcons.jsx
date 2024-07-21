import React from "react";
import "./AnimatedIcons.scss";

const AnimatedIcons = ({ icons, idx }) => {
   return (
      <div className="stacks">
         {icons.map((icon, index) => {
            return (
               <div key={index} className={`stack _${index + idx}`}>
                  {icon}
               </div>
            );
         })}
      </div>
   );
};

export default AnimatedIcons;
