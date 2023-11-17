import React from "react";
import "./Footer.scss";

import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";


const Footer = () => {
    
     return ( <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Nemo doloribus non ratione
                        qui culpa ipsa modi! Porro a tempora culpa minima vitae 
                        consequatur reiciendis numquam architecto ex corporis.
                        Minus, vero.
                    </div>
                </div>
                
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow/>
                        <div className="text">
                            DLF Cyber City,
                            Gurugram,
                            Haryana
                        </div>
                    </div>

                    <div className="c-item">
                        <FaMobileAlt/>
                        <div className="text">
                            Phone:8448109168
                        </div>
                    </div>

                    <div className="c-item">
                        <FaEnvelope/>
                        <div className="text">
                            Email:ojha7595@gmail.com
                        </div>
                    </div>
                  
                </div>

                <div className="col">
                    <div className="title">Categories</div>
                       <span className="text">HeadPhones</span>
                       <span className="text">Smart Watches</span>
                       <span className="text">Bluetooth Speakers</span>
                       <span className="text">Wireless EarBuds</span>
                       <span className="text">Home Theatre</span>
                       <span className="text">Projectors</span>
                       
                         
                   
                </div>

                <div className="col">
                    <div className="title">Pages</div>
                       <span className="text">Home</span>
                       <span className="text">About</span>
                       <span className="text">Privacy Policy</span>
                       <span className="text">Returns</span>
                       <span className="text">Terms and Conditions</span>
                       <span className="text">Contact Us</span>
                    
                </div>

            </div>
             <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        OJHASTORE CREATED BY SHIVAM OJHA.
                    </div>
                    <img src={Payment}></img>
                </div>
             </div>
       </footer>
     );
    
};

export default Footer;
