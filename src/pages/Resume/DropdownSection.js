import React, { useState } from "react";

const DropdownSection = ((props) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className="dropdown-section">
         <div className="dropdown-header" onClick={toggleDropdown}>
            <h2>{props.title}</h2>
            <span>{isOpen ? '-' : '+'}</span>
         </div>
         {isOpen && <div className="dropdown-content">{props.content}</div>}
      </div>
   );
}) 

export default DropdownSection;