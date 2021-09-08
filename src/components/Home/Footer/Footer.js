import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="container">
            <div>
                <h1 className="winter text-center mt-5">LET'S KEEP IN TOUCH</h1>
            </div>
        <section class="text-center mt-3">
        <ul className="social-media list-inline">
                        <li className="list-inline-item " style={{fontSize:30}}><a href="//facebook.com"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                        <li className="list-inline-item " style={{fontSize:30}}><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGoogle} /></a></li>
                        <li className="list-inline-item " style={{fontSize:30}}><a href="//linkedin.com"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a></li>
                    </ul>
        </section>
       
       <div className="text-center mt-2">
         <small>&copy;copyright 2021 mily datta</small>
       </div>
        </div>
    );
};

export default Footer;