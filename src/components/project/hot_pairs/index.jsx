import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { getHotpoolsChain } from "../../../api/dextoolService";

const HotPairs = (props) => {
  const { data } = props;
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);

  const [dataTab] = useState([
    {
      id: 1,
      title: "",
    },
  ]);

  const [dataTitle] = useState({
    title: "projects we recommend",
  });

  useEffect(() => {
    // let interval = setInterval(async () => {
    //   const items = await getHotpoolsChain();
    //   setItems(items);
    // }, 30000); // 30seconds
    // return () => {
    //   clearInterval(interval);
    // };

    const fetchApi = async () => {
      const items = await getHotpoolsChain();
      setItems(items);
    };
    fetchApi();
  }, []);

  const generateInitial = (name) => {
    const parts = name.split(" ")[0];
    return parts.substr(0, 1);
  };

  return (
    <section className="tf-section project_2">
      <div className="container w_1280">
        <div className="row">
          <div className="col-md-12">
            <div
              className="tf-title mb20"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h2 className="title">{dataTitle.title}</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="flat-tabs"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Tabs>
                {/* <TabList className="menu-tab">
                  {dataTab.map((idx) => (
                    <Tab className="fs-14 h6" key={idx.id}>
                      {idx.title}
                    </Tab>
                  ))}
                </TabList>

                {dataTab.map((idx) => ( */}
                  <TabPanel className="content-tab">
                    <div className="content-inner">
                      <Swiper
                        className="slider-3"
                        modules={[Grid]}
                        spaceBetween={30}
                        slidesPerView={2}
                        breakpoints={{
                          0: {
                            slidesPerView: 1,
                          },

                          867: {
                            slidesPerView: 2,
                          },
                        }}
                        grid={{
                          rows: 1,
                        }}
                      >
                        {items &&
                          items.length &&
                          items.map((item) => (
                            <SwiperSlide key={item.address}>
                              <div
                                className="project-box-style4"
                                style={{
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  const now = Date.now();
                                  window.open(
                                    `https://www.dextools.io/app/en/ether/pair-explorer/${item.address}?t=${now}`,
                                    "_blank"
                                  );
                                }}
                              >
                                <div className="image">
                                  <div
                                    className="img_inner"
                                    style={{ borderRadius: "10px" }}
                                  >
                                    <img src={item.img} alt="" />
                                    <img
                                      className="shape"
                                      src={require("../../../assets/images/common/shape.png")}
                                      alt="Risebot"
                                    />
                                    {
                                      generateInitial(item.mainToken.name)
                                    }
                                  </div>
                                  {/* <div className="label">1ST Phase</div> */}
                                </div>
                                <div className="content">
                                  <h5 className="heading">
                                    <Link to="/project_v1">
                                      {item.mainToken.name} /{" "}
                                      {item.sideToken.symbol}
                                    </Link>
                                  </h5>
                                  <p className="desc">{item.desc}</p>
                                  <ul>
                                    <li>
                                      <p className="text">Marketcap</p>
                                      <p className="price">{item.price_1}</p>
                                    </li>
                                    <li>
                                      <p className="text">Holders</p>
                                      <p className="price">{item.price_2}</p>
                                    </li>
                                    <li>
                                      <p className="text">Liquidity</p>
                                      <p className="price">{item.price_3}</p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                      </Swiper>
                    </div>
                  </TabPanel>
                {/* ))} */}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HotPairs.propTypes = {
  data: PropTypes.array,
};

export default HotPairs;
