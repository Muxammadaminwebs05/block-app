import React from 'react';
import "./style.scss";
import Li from "../../UI/Li/index.jsx";
import Button from "../../UI/Button/index.jsx"
import logo from "../../assets/images/logo.png"
import bgColor from "../../assets/images/bg-liner.png"
const index = () => {
   return (
     <>
       <header>
         <div className="header-bg">
           <img src={bgColor} alt="bg-color" />
         </div>
         <div className="container">
           <nav className="navbar navbar-expand-lg shadow-none ">
             <a className="navbar-brand" href="#">
               <img src={logo} alt="LOGO" />
             </a>
             <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarTogglerDemo02"
               aria-controls="navbarTogglerDemo02"
               aria-expanded="false"
               aria-label="Toggle navigation"
             >
               <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5 gap-4 ">
                 <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="#about">
                     About
                   </a>
                 </li>
                 <li className="nav-item">
                   <a className="nav-link" href="#inteviyu">
                     Interviews
                   </a>
                 </li>
                 <li className="nav-item">
                   <a
                     className="nav-link active"
                     aria-current="page"
                     href="#company"
                   >
                     Companies
                   </a>
                 </li>
                 <li className="nav-item">
                   <a
                     className="nav-link active"
                     aria-current="page"
                     href="#recomendation"
                   >
                     Recommendations
                   </a>
                 </li>
               </ul>
               <Button btn_content="Contact Me" btn_className="nav_btn" />
             </div>
           </nav>
         </div>
       </header>
     </>
   );
};

export default index;