import React from "react";

/* Using Arrow Function */
const Footer = (() => {
   // const year = new Date("July 21, 1983 01:15:00").getFullYear();  // set a particular date
   const year = new Date().getFullYear();   // set current year
   return (
      <footer className="footer">
         <a className="footer-link" target="new" href="https://www.linkedin.com/in/amresh1kumar/">LinkedIn</a>
         <a className="footer-link" target="new" href="https://x.com/amresh1kumar">X</a>
         <a className="footer-link" target="new" href="https://github.com/amresh1kumar">Github</a>
         <p className="copyright"> Copyright © {year}</p>
      </footer>
   );

})

export default Footer;