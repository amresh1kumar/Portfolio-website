import React, { useState } from "react";
import DropdownSection from "./DropdownSection";
import notes from "./notes";


function Resume() {
   return (
      <div className="wrapper">
         <div className="resume-title wid-50 arrange-left">
            <h1>My Resume</h1>
         </div>
         <div className="App wid-50 arrange-left">
            {notes.map(noteItem => (
               <DropdownSection
                  key={noteItem.key}
                  title={noteItem.title}
                  content={noteItem.content}
               />
            ))}
         </div>
      </div>

   );
}
export default Resume;