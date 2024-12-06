import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

PageTitle.propTypes = {
    title: PropTypes.string
};

function PageTitle(props) {
    const {title} = props;
    return (
        <section className="page-title">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                            <div className="breadcrumbs" data-aos="zoom-in" data-aos-duration="800">
                                <h3>Discover potential projects</h3>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <span className="icon">
                                            <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.9375 1.375L4.0625 4.5L0.9375 7.625" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </span>
                                        <span>{title}</span>
                                    </li>
                                </ul>
                            </div>            
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageTitle;