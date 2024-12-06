import React from 'react';

import img from '../../assets/images/common/img_cta.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';



function CTA(props) {

    const [dataTitle] = useState(
        {
            title: 'Launch on Etherfun',
            subtitle: 'Full support in  incubation'
        }
    )
    return (
        <section className="tf-section tf_CTA">

                <div className="container relative">
                    <div className="overlay">
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tf-title left mt58" data-aos="fade-up" data-aos-duration="800">
                                <h2 className="title">
                                    {dataTitle.title}
                                </h2>
                                <p className="sub">{dataTitle.subtitle}</p>
                                <div className="wrap-btn">
                                    <Link to="/submit_igo" className="tf-button style3">
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="image_cta" data-aos="fade-left" data-aos-duration="1200">
                            <img className="move4" src={img} alt="" />
                        </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default CTA;