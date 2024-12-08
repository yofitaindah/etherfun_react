import React, { useEffect, useState } from "react";

import PageTitle from "../components/pagetitle";
import CTA from "../components/cta/cta_v2";
import { Link } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import data from "../assets/fake-data/data-project";
import Countdown from "../components/countdown";
import { getPoolChain } from "../api/dextoolService";

function ProjectList(props) {
  const [dataTab] = useState([
    {
      id: 1,
      title: "Oncoming",
    },
    // {
    //     id: 2,
    //     title: 'Upcoming',
    // },
    // {
    //     id: 3,
    //     title: 'Past IGO',
    // },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPoolChain();
      console.log(data);
    };

    fetchData();
  }, []);
  return (
    <div className="inner-page">
      {<PageTitle title="Project List" />}

      <section className="tf-section project">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="flat-tabs"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Tabs>
                  <div className="wrapper_menutab">
                    <TabList className="menu-tab">
                      {dataTab.map((idx) => (
                        <Tab className="fs-14 h6" key={idx.id}>
                          {idx.title}
                        </Tab>
                      ))}
                    </TabList>
                    {/* <div className="seclect-box" data-aos="fade-in" data-aos-duration="800">
                                            <div className="dropdown selector-drop" id="category">
                                            
                                                        <Link to="#" className="btn-selector btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <span className="boder"></span>All access
                                                        </Link>
                                                        <ul className="dropdown-menu dropdown-menu-right">
                                                            <li className="dropdown-item active" data-toggle="modal" data-target="#delete_client">Forgotten Samurai</li>
                                                            <li className="dropdown-item" data-toggle="modal" data-target="#edit_client">Star Batter</li>
                                                            <li className="dropdown-item" data-toggle="modal" data-target="#edit_client">Calvary Deneral</li>
                                                        </ul>
                                            </div>
                                            <div className="dropdown selector-drop" id="artworks">
                                                <Link to="#" className="btn-selector btn-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span className="boder"></span>All Block Chain
                                                </Link>
                                                
                                                <ul className="dropdown-menu dropdown-menu-right">
                                                    <li className="dropdown-item active" data-toggle="modal" data-target="#delete_client">Sort by Popularity</li>
                                                    <li className="dropdown-item" data-toggle="modal" data-target="#edit_client">Sort by Latest</li>
                                                    <li className="dropdown-item" data-toggle="modal" data-target="#edit_client">Sort by View</li>
                                                </ul>
                                            </div>
                                        </div> */}
                  </div>

                  {dataTab.map((idx) => (
                    <TabPanel key={idx.id} className="content-tab mt40">
                      <div className="content-inner project-box-style3_wrapper">
                        {data.slice(6, 13).map((item) => (
                          <div
                            key={item.id}
                            className="project-box-style3"
                            data-aos="fade-in"
                            data-aos-duration="800"
                          >
                            <div className="header_project">
                              <div className="image">
                                <img className="mask" src={item.img} alt="" />
                                <div className="shape">
                                  <img
                                    src={require("../assets/images/common/shape_2.png")}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <h5 className="heading">
                                <Link to="/project_list">{item.title}</Link>
                              </h5>
                            </div>
                            <div className="content">
                              <div className="td td1">
                                <p>Total raise</p>
                                <p>$3970</p>
                              </div>
                              <div className="td td2">
                                <p>Price</p>
                                <p>0.05 USDT</p>
                              </div>
                              <div className="td td3">
                                <p>Chain</p>
                                <p>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="24"
                                      height="24"
                                      rx="12"
                                      fill="#414B57"
                                    />
                                    <path
                                      d="M17.3047 14.0836L12.5508 20.1957C12.486 20.2807 12.4027 20.3499 12.3073 20.398C12.2119 20.4462 12.1069 20.4721 12 20.4738V15.8375L16.8876 13.5595C16.9577 13.5262 17.0371 13.5176 17.1127 13.5351C17.1883 13.5526 17.2558 13.5952 17.3042 13.656C17.3525 13.7167 17.3789 13.792 17.379 13.8697C17.3791 13.9473 17.3529 14.0227 17.3047 14.0836Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M12.0001 15.8375V20.4738C11.8932 20.4721 11.7881 20.4462 11.6927 20.398C11.5973 20.3499 11.5141 20.2807 11.4493 20.1957L6.69539 14.0836C6.64719 14.0227 6.621 13.9473 6.62109 13.8697C6.62119 13.792 6.64755 13.7167 6.69591 13.656C6.74426 13.5952 6.81174 13.5526 6.88739 13.5351C6.96303 13.5176 7.04237 13.5262 7.1125 13.5595L12.0001 15.8375Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M11.9997 10.0929V14.7452C11.9347 14.747 11.8703 14.7323 11.8125 14.7024L6.63617 12.1998C6.57754 12.17 6.52611 12.1278 6.48548 12.076C6.44484 12.0243 6.41597 11.9644 6.40088 11.9003L11.9997 10.0929Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M12 3.52625V10.0929L6.40122 11.9004C6.38429 11.8382 6.38077 11.7732 6.39092 11.7096C6.40106 11.6459 6.42462 11.5852 6.46004 11.5314L11.4278 3.84709C11.4877 3.74905 11.5718 3.66804 11.672 3.61186C11.7722 3.55567 11.8851 3.52619 12 3.52625Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M17.5988 11.9004L12 10.0929V3.52625C12.1149 3.52619 12.2278 3.55567 12.328 3.61186C12.4282 3.66804 12.5123 3.74905 12.5722 3.84709L17.54 11.5314C17.5754 11.5852 17.599 11.6459 17.6091 11.7096C17.6192 11.7732 17.6157 11.8382 17.5988 11.9004Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M17.5988 11.9003C17.5837 11.9644 17.5548 12.0243 17.5142 12.076C17.4736 12.1278 17.4221 12.17 17.3635 12.1998L12.1872 14.7024C12.1294 14.7323 12.065 14.747 12 14.7452V10.0929L17.5988 11.9003Z"
                                      fill="white"
                                    />
                                  </svg>
                                </p>
                              </div>
                              <div className="td td4">
                                <p>Next claim in</p>
                                <div className="featured-countdown style3">
                                  {<Countdown />}
                                </div>
                              </div>
                              <div className="td td5">
                                <ul className="social">
                                  <li>
                                    <Link to="#">
                                      <svg
                                        width="22"
                                        height="18"
                                        viewBox="0 0 22 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M22 2.17863C21.1819 2.5375 20.3101 2.77537 19.4012 2.89087C20.3363 2.33262 21.0499 1.45537 21.3854 0.398C20.5136 0.91775 19.5511 1.28488 18.5254 1.48975C17.6976 0.608375 16.5179 0.0625 15.2309 0.0625C12.7339 0.0625 10.7236 2.08925 10.7236 4.57388C10.7236 4.93138 10.7539 5.27512 10.8281 5.60237C7.0785 5.4195 3.76063 3.62238 1.53175 0.88475C1.14262 1.55988 0.914375 2.33262 0.914375 3.1645C0.914375 4.7265 1.71875 6.11112 2.91775 6.91275C2.19313 6.899 1.48225 6.68862 0.88 6.35725C0.88 6.371 0.88 6.38888 0.88 6.40675C0.88 8.5985 2.44337 10.419 4.4935 10.8384C4.12637 10.9388 3.72625 10.9869 3.311 10.9869C3.02225 10.9869 2.73075 10.9704 2.45712 10.9099C3.0415 12.696 4.69975 14.0091 6.6715 14.0518C5.137 15.2521 3.18863 15.9754 1.07938 15.9754C0.7095 15.9754 0.35475 15.9589 0 15.9135C1.99787 17.2019 4.36562 17.9375 6.919 17.9375C15.2185 17.9375 19.756 11.0625 19.756 5.10325C19.756 4.90387 19.7491 4.71138 19.7395 4.52025C20.6346 3.885 21.3867 3.09162 22 2.17863Z"
                                          fill="#798DA3"
                                        />
                                      </svg>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M21.3127 0H16.173L8.5376 13.3746L13.4573 22H18.5971L13.6773 13.3746L21.3127 0Z"
                                          fill="#798DA3"
                                        />
                                        <path
                                          d="M6.41162 4.125H1.56613L4.36975 9.06262L0.6875 15.125H5.533L9.21525 9.06262L6.41162 4.125Z"
                                          fill="#798DA3"
                                        />
                                      </svg>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <svg
                                        width="22"
                                        height="20"
                                        viewBox="0 0 22 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11 0.466675C8.16933 0.466675 5.86667 2.76934 5.86667 5.60001V14.4C5.86667 14.8033 5.53813 15.1333 5.13333 15.1333C4.72853 15.1333 4.4 14.8033 4.4 14.4V10.7333H0V14.4C0 17.2307 2.30267 19.5333 5.13333 19.5333C7.964 19.5333 10.2667 17.2307 10.2667 14.4V5.60001C10.2667 5.19521 10.5952 4.86667 11 4.86667C11.4048 4.86667 11.7333 5.19521 11.7333 5.60001V8.38521L13.9333 9.85188L16.1333 8.38521V5.60001C16.1333 2.76934 13.8307 0.466675 11 0.466675Z"
                                          fill="#798DA3"
                                        />
                                        <path
                                          d="M17.6001 10.7334V14.4001C17.6001 14.8034 17.2701 15.1334 16.8667 15.1334C16.4634 15.1334 16.1334 14.8034 16.1334 14.4001V10.1482L14.3397 11.3435C14.2165 11.4257 14.0757 11.4667 13.9334 11.4667C13.7911 11.4667 13.6503 11.4257 13.5271 11.3435L11.7334 10.1482V14.4001C11.7334 17.2307 14.0361 19.5334 16.8667 19.5334C19.6974 19.5334 22.0001 17.2307 22.0001 14.4001V10.7334H17.6001Z"
                                          fill="#798DA3"
                                        />
                                      </svg>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <svg
                                        width="18"
                                        height="22"
                                        viewBox="0 0 18 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11.913 6.12039C11.913 4.56668 12.5094 3.75813 13.3516 3.75813C14.1537 3.75813 14.688 4.48388 14.688 5.95479C14.688 6.79181 14.4654 7.70902 14.3011 8.25108C14.3024 8.25237 15.1006 9.65601 17.2844 9.22522C17.7475 8.18769 17.9998 6.84355 17.9998 5.66501C17.9998 2.4942 16.3956 0.649414 13.4564 0.649414C10.433 0.649414 8.66587 2.99227 8.66587 6.08028C8.66587 9.13983 10.085 11.7673 12.424 12.964C11.4408 14.9472 10.1885 16.6949 8.88321 18.0119C6.51578 15.1244 4.37474 11.2744 3.49503 3.75942H-0.000488281C1.61402 16.2758 6.42522 20.2603 7.69691 21.0262C8.41619 21.4621 9.03716 21.4414 9.69435 21.0676C10.7267 20.4751 13.8289 17.3495 15.547 13.6871C16.2675 13.6845 17.1343 13.6017 17.9985 13.4038V10.9393C17.4694 11.0622 16.9584 11.1166 16.4978 11.1166C13.9066 11.1166 11.913 9.29249 11.913 6.12039Z"
                                          fill="#798DA3"
                                        />
                                      </svg>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <svg
                                        width="22"
                                        height="14"
                                        viewBox="0 0 22 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M18.6065 5.76663C18.4126 5.702 18.2256 5.64012 18.0469 5.581C16.6774 5.13412 15.8524 4.86325 15.8524 3.75637C15.8524 2.8585 16.5193 2.20812 17.4377 2.20812C18.1418 2.20812 18.667 2.512 19.1373 3.19675C19.1812 3.26 19.2651 3.28338 19.3325 3.24625L20.7144 2.51338C20.7515 2.49412 20.7804 2.45975 20.7914 2.41712C20.8024 2.3745 20.7983 2.3305 20.779 2.292C20.0379 0.92525 18.9709 0.261125 17.5147 0.261125C15.2996 0.261125 13.8669 1.654 13.8669 3.80862C13.8669 6.01137 15.2529 6.90375 17.8076 7.77687C19.2871 8.28975 19.943 8.56063 19.943 9.65512C19.943 10.8857 18.8746 11.7699 17.4171 11.7176C15.8895 11.664 15.4275 10.8239 14.8459 9.44613C13.8614 7.11275 12.7407 4.39025 12.7311 4.36413C11.6077 1.66913 9.37887 0.125 6.6165 0.125C2.96862 0.125 0 3.20913 0 7.00138C0 10.7909 2.96862 13.875 6.6165 13.875C8.60612 13.875 10.472 12.9592 11.7343 11.3601C11.77 11.3134 11.7796 11.2501 11.7563 11.1951L10.923 9.19588C10.8996 9.14087 10.846 9.10238 10.7869 9.09963C10.7264 9.09688 10.6728 9.13125 10.6453 9.18487C9.85738 10.7483 8.31325 11.719 6.6165 11.719C4.11262 11.719 2.07625 9.60287 2.07625 7C2.07625 4.39712 4.11262 2.281 6.6165 2.281C8.43975 2.281 10.109 3.40438 10.7731 5.08187L12.837 9.97L13.0749 10.5186C14.0071 12.775 15.378 13.787 17.5244 13.7953C20.0764 13.7953 22 12.038 22 9.70875C22 7.37263 20.7556 6.49538 18.6065 5.76663Z"
                                          fill="#798DA3"
                                        />
                                      </svg>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabPanel>
                  ))}
                </Tabs>
              </div>
            </div>
            <div className="col-md-12">
              <ul
                className="panigation mt6"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <li>
                  <Link to="#">
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 1L1.5 6L6.5 11"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="active">
                    1
                  </Link>
                </li>
                <li>
                  <Link to="#">2</Link>
                </li>
                <li>
                  <Link to="#">3</Link>
                </li>
                <li>
                  <Link to="#">
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 1L6.5 6L1.5 11"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* {<CTA />} */}
    </div>
  );
}

export default ProjectList;
