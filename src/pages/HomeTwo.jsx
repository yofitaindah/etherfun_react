import React from "react";

import Banner from "../components/banner/banner_v2";
import dataBanner from "../assets/fake-data/data-banner";
import HotPairs from "../components/project/hot_pairs";
import dataProject from "../assets/fake-data/data-project";
import ProjectList from "./ProjectList";
import ServerPagination from "../components/pagination";
import { getPoolChain, getBlockChain } from "../api/dextoolService";
// import NewPairs from '../components/project/new_pairs';
// import Tier from '../components/tier';

function HomeTwo(props) {
  console.log(process.env.REACT_APP_API_URL); // Output: https://api.example.com
  console.log(process.env.REACT_APP_SECRET_KEY); // Output: your-secret-key

  return (
    <div className="header-fixed main home2 counter-scroll">
      {<Banner data={dataBanner} />}

      {/* {<Featured data={dataFeatured} />} */}

      <div className="bg_body">
        <div className="bg_h2">
          <img
            src={require("../assets/images/backgroup/bg_home2.png")}
            alt=""
          />
        </div>

        {<HotPairs />}

        {<ServerPagination fetchData={getPoolChain} totalPages={10} />}

        {/* {<ProjectList/>} */}
        {/* <NewPairs /> */}

        {/* {<Token2 data={dataToken} />} */}

        {/* {<Tier data={dataTier} />} */}

        {/* {<Technology data={dataPartner} />} */}

        {/* {<Roadmap data={dataRoadmap} />} */}

        {/* {<Project6 data={dataProject} />} */}

        {/* {<Team data={dataTeam} />} */}
      </div>

      {/* {<Partner2 data={dataPartner} />} */}

      {/* {<CTA2 />} */}

      {/* {<Faqs data={dataFaq} />}  */}

      {/* {<CTA />} */}
    </div>
  );
}

export default HomeTwo;
