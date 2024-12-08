import React from 'react';

import PageTitle from '../components/pagetitle';

import icon from '../assets/images/common/down.svg'




function Roadmap(props) {
    return (
        <div className='inner-page'>
            {<PageTitle title='RoadMap' />}

            <section className="tf-section roadmap">
        <div className="container">
            <div className="row"> 
                <div className="col-md-12"> 
                    <div className="roadmap-wrapper-style2" data-aos="fade-up" data-aos-duration="1200">
                        <div className="left">
                            <div className="roadmap-box-style active">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <h6 className="date">Phase 1</h6>
                                    <ul>
                                        <li>$eFUN Research and Ideation</li>
                                        <li>Launching Etherfun on Uniswap, ERC20</li>
                                        <li>Engaging the community through community outreach</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roadmap-box-style active">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <h6 className="date">Phase 3</h6>
                                    <ul>
                                        <li>Collaboration with KOLs and CTs</li>
                                        <li>More advertising, promotions, and collaborations</li>
                                        <li>$eFUN Whitepaper Development</li>
                                        <li>Recruiting a development team</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roadmap-box-style">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <h6 className="date">Phase 5</h6>
                                    <ul>
                                        <li>Launching Beta Version of platform token generation</li>
                                        <li>Platform Scalability Testing</li>
                                        <li>Fixing bugs and adjusting the platform based on beta user feedback.</li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="roadmap-box-style">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <h6 className="date">Phase 6</h6>
                                    <ul>
                                        <li>Coming soon</li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                        <div className="right">
                            <div className="roadmap-box-style active">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                    <h6 className="date">Phase 2</h6>
                                    <ul>
                                        <li>Auditing $eFUN to increase holder trust</li>
                                        <li>Accelerating community expansion through user engagement marketing campaigns</li>
                                        <li>Listing on CMC, CG, and other Decentralized Exchanges</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roadmap-box-style active">
                                <div className="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <div className="content">
                                <h6 className="date">Phase 4</h6>
                                    <ul>
                                        <li>More network integrations on the $eFUN Platform</li>
                                        <li>Partnerships to increase user demand</li>
                                        <li>Platform & Infrastructure Development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>
            
        </div>
    );
}

export default Roadmap;