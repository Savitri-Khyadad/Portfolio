import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-items">
            <a href="https://www.linkedin.com/in/savitri-khyadad-55524a1b3" target="./dummy">
                <img src={`${process.env.PUBLIC_URL}/linkedin.svg`} alt="icon1" />
            </a>
            <ul>
                <li>
                    <a href="https://github.com/Savitri-Khyadad" target="github-icon">
                        <img src={`${process.env.PUBLIC_URL}/github.svg`} alt="icon1" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/savitrikhyadad/" target="./dummy">
                        <img src={`${process.env.PUBLIC_URL}/instagram.svg`} alt="icon1" />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100011465304810" target="./dummy">
                        <img src={`${process.env.PUBLIC_URL}/facebook.svg`} alt="icon1" />
                    </a>
                </li>
            </ul>
            <a href="./" target="./dummy" className="mail">
                <img src={`${process.env.PUBLIC_URL}/mail.svg`} alt="icon1" />
                <a href="./" target="./dummy" className="email">
                    savitrikhyadad15@gmail.com
                </a>
            </a>
        </footer>
    )
}

export default Footer;
