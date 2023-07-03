import React from 'react';
import ResCard from "../../UI/ResCard/index.jsx"
import H2 from "../../UI/h2/index.jsx";
import { Result } from '../../database/api.js';
import "./style.scss"
const index = () => {

    return (
      <section>
        <div className="container">
          <H2 h2title="Results" h2class="result-title text-center" />
          <div className="result justify-content-between">
            {
              Result.map((item) => {
                return <ResCard resCardTitle={item.res_title} resCardText={item.res_desc} />
              })
            }
            {/* <ResCard resCardTitle="Projects" resCardText="547" />
            <ResCard resCardTitle="Partners" resCardText="584" />
            <ResCard resCardTitle="Students" resCardText="358" /> */}
          </div>
        </div>
      </section>
    );
};

export default index;