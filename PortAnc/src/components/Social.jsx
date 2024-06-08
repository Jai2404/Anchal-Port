import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import React from "react";

import { faGithub, faInstagram, faLinkedin,faTwitter } from '@fortawesome/free-brands-svg-icons'; // Removed unused icons
import './Social.css';
import { useLocation } from 'react-router-dom';

const Social = () => {
    const location = useLocation();

    useEffect(() => {
        const { search } = location;
        const params = new URLSearchParams(search);
        const scrollTo = params.get('scrollTo');

        if (scrollTo) {
            const targetElement = document.getElementById(scrollTo);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="socials">

            <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>

        </div>
    );
};

export default Social;