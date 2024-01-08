import React from 'react';
import "./style.scss";
import foterLogo from "../../assets/images/footer-logo.png"
const index = () => {
   return ( 
     <footer> 
       <div className="container">
         <div className="footer d-flex justify-content-between">
           <div className="footer_left-elements">
             <a href="#">
               <img src={foterLogo} alt="footer-logo" />
             </a>
           </div>
           <div className="footer_right-elements d-flex justify-content-between">
             <a href="#" className='footer_right-elements_footer-link'>
               <i className="fab fa-telegram"></i>
             </a>
             <a href="#" className='footer_right-elements_footer-link'>
               <i className="fab fa-github"></i>
             </a>
             <a href="#" className='footer_right-elements_footer-link'>
               <i className="fab fa-linkedin"></i>
             </a>
             <a href="#" className='footer_right-elements_footer-link'>
               <i className="fab fa-youtube"></i>
             </a>
             <a href="#" className='footer_right-elements_footer-link'>
               <i className="fab fa-twitter"></i>
             </a>
           </div>
         </div>
       </div>
     </footer>
   );
};

export default index;
