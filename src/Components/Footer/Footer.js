import React from 'react';
import './Footer.css'
import {BsFacebook , BsTwitter, BsGithub, BsLinkedin} from 'react-icons/bs'


const Footer = () => {
    return (
        <div className='footer_container'>
            <div className="txt_Container">
                <p>All Rights Resrved 2022 - 2023 | Design By <a href="https://www.linkedin.com/in/ahshanhabib26/">Ahshan Habib</a> </p>
            </div>
            <div class="social_link">
                <ul>
                        <li><BsFacebook /></li>
                        <li><BsTwitter/></li>
                        <li><BsGithub/></li>
                        <li><BsLinkedin/></li>
                </ul>
        </div>
        </div>
    );
};

export default Footer;