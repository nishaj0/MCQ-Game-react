import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

function Header() {
   return (
      <div className="mcq__header ">
         <div className="mcq__header-title">
            <Link to="/">
               <h2>MCQ Game</h2>
            </Link>
         </div>
         <div className="mcq__header-links">
            <a href="#">Help</a>
            <a href="#">About</a>
         </div>
      </div>
   );
}

export default Header;
