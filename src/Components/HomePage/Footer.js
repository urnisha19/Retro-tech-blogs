import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="text-center text-white pb-3 bg-dark">
            <div className="footer-links pt-3">
                <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <hr style={{ width: "50%", marginLeft: "25%" }}></hr>
            </div>
            <p><small>@Designed & Built by <a href={`https://www.linkedin.com/in/urnisha199/`}>Nahia Nowreen Urnisha</a> </small></p>
        </div>
    );
};

export default Footer;