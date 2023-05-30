import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <nav className="footer__nav">
                    <ul className="footer__nav-list">
                        <li className="footer__nav-item">
                            <a href="#home">Home</a>
                        </li>
                        <li className="footer__nav-item">
                            <a href="#about">About</a>
                        </li>
                        <li className="footer__nav-item">
                            <a href="#blog">Blog</a>
                        </li>
                        <li className="footer__nav-item">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="footer__social-media">
                    <img src="https://freepngimg.com/thumb/social_media/74031-instagram-icons-media-youtube-computer-facebook-social-thumb.png" alt="logos" className='logos1' />
                </div>
            </div>
            <div className="footer__bottom">
                <p>&copy; {new Date().getFullYear()} Your Blog. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
