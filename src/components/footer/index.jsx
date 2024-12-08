import React, { useEffect, useState } from 'react';

import './styles.scss'

import { Link } from 'react-router-dom';
 
import DextoolIcon from '../../assets/images/logo_dextool.svg'



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
                            <Link to="#">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_157_2529)">
                                    <path d="M18 3.41887C17.3306 3.7125 16.6174 3.90712 15.8737 4.00162C16.6388 3.54487 17.2226 2.82712 17.4971 1.962C16.7839 2.38725 15.9964 2.68763 15.1571 2.85525C14.4799 2.13413 13.5146 1.6875 12.4616 1.6875C10.4186 1.6875 8.77387 3.34575 8.77387 5.37863C8.77387 5.67113 8.79862 5.95237 8.85938 6.22012C5.7915 6.0705 3.07687 4.60013 1.25325 2.36025C0.934875 2.91263 0.748125 3.54488 0.748125 4.2255C0.748125 5.5035 1.40625 6.63637 2.38725 7.29225C1.79437 7.281 1.21275 7.10888 0.72 6.83775C0.72 6.849 0.72 6.86363 0.72 6.87825C0.72 8.6715 1.99912 10.161 3.6765 10.5041C3.37612 10.5863 3.04875 10.6256 2.709 10.6256C2.47275 10.6256 2.23425 10.6121 2.01038 10.5626C2.4885 12.024 3.84525 13.0984 5.4585 13.1332C4.203 14.1154 2.60888 14.7071 0.883125 14.7071C0.5805 14.7071 0.29025 14.6936 0 14.6565C1.63462 15.7106 3.57188 16.3125 5.661 16.3125C12.4515 16.3125 16.164 10.6875 16.164 5.81175C16.164 5.64862 16.1584 5.49113 16.1505 5.33475C16.8829 4.815 17.4982 4.16587 18 3.41887Z" fill="#798DA3"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_157_2529">
                                    <rect width="18" height="18" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                    
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 2.007.24 2.47.407a4.924 4.924 0 0 1 1.798 1.17 4.924 4.924 0 0 1 1.17 1.798c.167.463.352 1.3.407 2.47.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 2.007-.407 2.47a4.924 4.924 0 0 1-1.17 1.798 4.924 4.924 0 0 1-1.798 1.17c-.463.167-1.3.352-2.47.407-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-2.007-.24-2.47-.407a4.924 4.924 0 0 1-1.798-1.17 4.924 4.924 0 0 1-1.17-1.798c-.167-.463-.352-1.3-.407-2.47C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.055-1.17.24-2.007.407-2.47a4.924 4.924 0 0 1 1.17-1.798 4.924 4.924 0 0 1 1.798-1.17c.463-.167 1.3-.352 2.47-.407C8.416 2.175 8.796 2.163 12 2.163Zm0-2.163C8.692 0 8.27.012 7.003.07c-1.292.062-2.354.284-3.2.588a7.25 7.25 0 0 0-2.632 1.711A7.25 7.25 0 0 0 .46 4.1C.156 4.945-.066 6.007.07 7.3.012 8.566 0 8.988 0 12c0 3.012.012 3.434.07 4.7.136 1.292.36 2.354.664 3.2a7.25 7.25 0 0 0 1.711 2.632 7.25 7.25 0 0 0 2.632 1.711c.846.304 1.908.528 3.2.664C8.27 23.988 8.692 24 12 24s3.434-.012 4.7-.07c1.292-.136 2.354-.36 3.2-.664a7.25 7.25 0 0 0 2.632-1.711 7.25 7.25 0 0 0 1.711-2.632c.304-.846.528-1.908.664-3.2C23.988 15.434 24 15.012 24 12c0-3.012-.012-3.434-.07-4.7-.136-1.292-.36-2.354-.664-3.2a7.25 7.25 0 0 0-1.711-2.632A7.25 7.25 0 0 0 19.7.66C18.854.356 17.792.132 16.5.07 15.234.012 14.812 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324Zm0 10.324a4.162 4.162 0 1 1 0-8.324 4.162 4.162 0 0 1 0 8.324Zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88Z"
                                    fill="#798DA3"
                                />
                                </svg>
                            </Link>
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