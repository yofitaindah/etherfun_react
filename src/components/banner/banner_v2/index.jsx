import React  from 'react';
import '../styles.scss'
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';

Banner.propTypes = {
    data : PropTypes.array,
};

function Banner (props) {
    const {data} = props;
    return (

        <div className="page-title">
            <div className="icon_bg">
                <img src={require ('../../../assets/images/backgroup/bg_inner_slider.png')} alt="Risebot" />
            </div>
            <div className="slider-main">
            <Swiper
                modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation 
                >
                {
                    data.slice(0,2).map(item => (
                        <SwiperSlide key={item.id}>
                            <div className="slider-st2">
                                <img className="icon icon_1" src={require ("../../../assets/images/common/logo_ether2.png")} alt="" />
                                <img className="icon icon_2" src={require ("../../../assets/images/common/icon_ether.png")} alt="" />
                                <img className="icon icon_3" src={require ("../../../assets/images/common/logo_ether2.png")} alt="" />
                                <div className="overlay">
                                    <img src={require ("../../../assets/images//backgroup/bg-slider2.png")} alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="box-slider">
                                                <div className="content-box">
                                                    <h1 className="title" >Create, Earn, AI <br className="show-destop" /> It's All Fun on Etherfun!</h1>
                                                    <p className="sub-title">Why just laugh at memes when you can earn, share, and coin your own?<br className="show-destop" /> It's fun, it's fast, and it's the future of meme culture</p>
                                                    <div className="wrap-btn">
                                                        <Link to="/faqs" className="tf-button style2">
                                                            HOW TO START
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </div>
    );
}

export default Banner;