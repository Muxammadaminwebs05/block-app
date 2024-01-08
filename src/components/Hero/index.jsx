import React from "react";
import "./style.scss";
import heroimg from "../../assets/images/rasm.png";
const index = () => {
  return (
    <> 
      <section>
        <div className="container">
          <div className="hero">
            <div className="hero_left-elements">
              <h2 className="hero_left-elements_title1">
                Mukhammadkarim Tukhtaboyev
              </h2>
              <h4 className="hero_left-elements_title2">
                Microsoft MVP | Software Engineer @ BARQ App | Lead Teacher
              </h4>
              <p className="hero_left-elements_text">
                Microsoft MVP, Software Engineer, Instructor, Singer, Founder of
                .NET Community  in Uzbekistan, Ibn Sina Enthusiast.
              </p>
              <div className="hero_left-elements_follow d-flex  justify-content-between">
                <div className="hero_left-elements_follow_line"></div>
                <p className="hero_left-elements_follow_text">Follow me:</p>
                <a href="#">
                  <i className="fab fa-telegram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="hero_right-elements">
              <img
                src={heroimg}
                alt="heroimg"
                className="hero_right-elements_img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
