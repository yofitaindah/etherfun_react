import React, { useState } from 'react';

import PageTitle from '../components/pagetitle';
import CTA from '../components/cta/cta_v2';
import { Link } from 'react-router-dom';

import ProjectItem from '../components/project/project_item_v1';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import data from '../assets/fake-data/data-project'


function Project3(props) {
    const [dataTab] = useState([
        {
            id: 1,
            title: 'Open IGO',
        },
        {
            id: 2,
            title: 'Upcoming',
        },
        {
            id: 3,
            title: 'Past IGO',
        },

    ]);
    return (
        <div className='inner-page'>
            {<PageTitle />}


            <section className="tf-section project">
                <div className="container">
                    <div className="row"> 
                        <div className="col-md-12">
                            <div className="flat-tabs" data-aos="fade-up" data-aos-duration="1000">
                                
                                <Tabs>
                                    <div className="wrapper_menutab">
                                        <TabList className='menu-tab'>
                                            {
                                                dataTab.map(idx => (
                                                    <Tab className='fs-14 h6' key={idx.id}>{idx.title}</Tab>
                                                ))
                                            }
                                            
                                            
                                        </TabList>
                                        <div className="seclect-box" data-aos="fade-in" data-aos-duration="800">
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
                                        </div>
                                    </div>
                                    
                                    

                                        {
                                                dataTab.map(idx => (
                                                    <TabPanel key={idx.id} className='content-tab mt40'>
                                                        <div className="content-inner project-box-wrapper">
                                                            {
                                                                data.slice(6,12).map(item => (
                                                                    <ProjectItem key={item.id} item={item} />
                                                                ))
                                                            }
                                                            
                                                        </div>
                                                        
                                                    </TabPanel>
                                                ))
                                            }


                                        
                                    </Tabs> 
                                    
                                
    
                            </div>
                        
                        </div>
                        <div className="col-md-12">
                            <ul className="panigation mt6"  data-aos="fade-up" data-aos-duration="800">
                                <li>
                                    <Link to="#">
                                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.5 1L1.5 6L6.5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="active">
                                        1
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        2
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        3
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 1L6.5 6L1.5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {<CTA />}
            
        </div>
    );
}

export default Project3;