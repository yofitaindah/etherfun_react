import React, { useEffect, useState } from 'react';

import './styles.scss'

import { Link } from 'react-router-dom';
 
import DextoolIcon from '../../assets/images/logo_dextool.svg'
import EtherscanIcon from '../../assets/images/logo_etherscan.svg'
import TelegramIcon from '../../assets/images/logo_telegram.svg'
import TwitterIcon from '../../assets/images/logo_twitter.svg'



function Footer(props) {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    return (
        <footer id="footer">
        <div className="footer-main">
            <div className="container">
                <div className="row">
                    <div className="footer-logo">
                        <div className="logo_footer">
                            <img src={require ("../../assets/images/logo_etherfun2.png")} alt="" />
                        </div>
                        <p>A one-stop destination meme blockchain</p>
                    </div>
                    <div className="widget">
                        <h5 className="widget-title">
                            Contact us
                        </h5>
                        <ul className="widget-link contact">
                            {/* <li>
                                <p>Address</p>
                                <Link to="#">1901 Thornridge Cir. Shiloh, Hawaii 81063</Link>
                            </li>
                            <li>
                                <p>Phone</p>
                                <Link to="#">+33 7 00 55 57 60</Link>
                            </li> */}
                            <li className="email">
                                <p>Email</p>
                                <Link to="#">team@etherfun.com</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="widget support">
                        <h5 className="widget-title">
                            Support
                        </h5>
                        <ul className="widget-link">
                            {/* <li>
                                <Link to="/connect">Connect Wallet</Link>
                            </li> */}
                            {/* <li>
                                <Link to="/forgetPass">Forget Password</Link>
                            </li> */}
                            <li>
                                <Link to="/faqs">FAQs</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="widget link">
                        <h5 className="widget-title">
                            Quick link
                        </h5>
                        <ul className="widget-link">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/token">Etherfun</Link>
                            </li>
                            <li>
                                <Link to="/connect">Swap</Link>
                            </li>
                            <li>
                                <Link to="/team_details">Our Team</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="wrap-fx">
                    <div className="Copyright">
                        Copyright © 2024. Etherfun
                    </div>
                    <ul className="social">
                        <li>
                            <a href="https://x.com/ether_fun" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={TwitterIcon}
                                    alt="Dextool Icon"
                                    width="18"
                                    height="18"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/etherfunentry" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={TelegramIcon}
                                    alt="Dextool Icon"
                                    width="18"
                                    height="18"
                                />
                            </a>
                        </li>
                        <li>
                            <Link to="#">
                                <img
                                    src={DextoolIcon}
                                    alt="Dextool Icon"
                                    width="18"
                                    height="18"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <img
                                    src={EtherscanIcon}
                                    alt="Etherscan Icon"
                                    width="18"
                                    height="18"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>

        {
                isVisible && 
                <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
            }
    </footer>
    );
}

export default Footer;