import Carousel from "react-bootstrap/Carousel";
import sliderRAsm from "../../assets/images/rasm.png"
import { slide } from "../../database/api";
import bgLinee from "../../assets/images/bg-liner3.png";

import "./slider.css"
function UncontrolledExample() {

    console.log(slide[0].slide_desc);

  return (
    <section className="big-slider" id="inteviyu">
      <div className="interviyu-bg">
        <img src={bgLinee} alt="img" />
      </div>
      <div className="container">
        <Carousel>
          {slide.map((item) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item.slide_img}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 className="slide-title">{item.slide_title}</h3>
                  <p>{item.slide_desc}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default UncontrolledExample;
