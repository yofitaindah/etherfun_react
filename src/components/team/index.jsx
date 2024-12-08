import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import img from '../../assets/images/backgroup/bg_team_section.png'
import shape from '../../assets/images/common/shape_3.png'
import shape1 from '../../assets/images/common/shape_4.svg'
import { useState } from 'react';
import TelegramIcon from '../../assets/images/logo_telegram.svg';



Team.propTypes = {
    data : PropTypes.array,
};

function Team(props) {
    const {data} = props;

    const [dataTitle] = useState(
        {
            title: 'Meet the team',
        }
    )
    return (
        <section className="tf-section tf_team">
                <div className="overlay">
                    <img src={img} alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title mb40" data-aos="fade-up" data-aos-duration="800">
                                <h2 className="title">
                                    {dataTitle.title}
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="team-box-wrapper">

                                {
                                    data.map(item => (
                                        <div key={item.id} className="team-box" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                                            <img className="shape" src={shape} alt="" />
                                            <img className="shape_ecfect" src={shape1} alt="" />
                                            <div className="image">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="content">
                                                <h5 className="name"><Link to="/team_details">{item.name}</Link></h5>
                                                <p className="position">{item.unit}</p>
                                                <ul className="social">
                                                <li>
                                                    <Link to="#">
                                                        <img
                                                            src={TelegramIcon}
                                                            alt="Telegram Icon"
                                                            width="18"
                                                            height="18"
                                                        />
                                                    </Link>
                                                </li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))
                                }

                               
                            </div>
                        
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Team;