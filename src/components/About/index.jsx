import React from 'react';
import "./style.scss"
import aboutImg from "../../assets/images/rasm.png"
import bgClr from "../../assets/images/bg-liner2.png"
import H2 from "../../UI/h2/index.jsx"
const index = () => {
    return (
      <section id='about' >
        <div className="bg-clr">
          <img src={bgClr} alt="bg-color" />
        </div>
        <div className="container">
          <div className="about ">
            <div className="about_left-elements">
              <img src={aboutImg} alt="About-img" />
            </div>
            <div className="about_right-elements">
              <H2 h2title="About" h2class="about_right-elements_title1" />
              <h4 className="about_right-elements_title2">
                Microsoft MVP | Software Engineer @ BARQ App | Lead Teacher
              </h4>
              <p className="about_right-elements_text">
                Microsoft MVP, Software Engineer, Instructor, Singer, Founder of
                .NET Community in Uzbekistan, Ibn Sina Enthusiast. The biggest
                programmer ever is the Allah. He created software called 'Life'
                and it is the most perfect software. Every part of this software
                works on realtime communication. This software also has an
                instruction - Koran. A person, who knows Koran will never
                struggle using the software 'Life'. In other words, life itself
                is like a programming. The life i told about has a lots of
                paths, but goals are the same. And I am on the best of these
                paths. So in .NET ...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default index;