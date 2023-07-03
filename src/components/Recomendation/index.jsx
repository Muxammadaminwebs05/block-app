import React from 'react';
import Card from "../../UI/Card/index.jsx"
import H2 from "../../UI/h2/index.jsx"
import "./style.scss"
import bgLine from "../../assets/images/bg-liner3.png"
 import { Recomendation } from '../../database/api.js';
const index = () => {


console.log(Recomendation);
  
    return (
      <section id='recomendation'>
        <div className="bg-line">
          <img src={bgLine} alt="bg-liner" />
        </div>
        <div className="container">
          <H2 h2title="Recomendation" h2class="text-center reco-title" />
          <div className="recomendation  justify-content-between">

            {
              Recomendation.map((item) => {
                return (
                  <Card
                    cardTitle={item.rec_title}
                    cardText={item.rec_desc}
                    cardLink="Learn More"
                  />
                );
              })
            }
          </div>
        </div>
      </section>
    );
};

export default index;