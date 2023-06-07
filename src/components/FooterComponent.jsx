import React from 'react';
import LoaderComponent from './UI/LoaderComponent';

const FooterComponent = () => {
    const info = [
        {tag1:"About", tag2:"Contact", tag3:"Dribbble"},
        {tag1:"Services", tag2:"Blog", tag3:"Instagram"},
        {tag1:"Experience", tag2:"Projects", tag3:"Twitter"},
    ]
    return (
        <div className='footer'>
            <footer className="footer__container container">
                <div className="footer__heading">
                    <p className='footer__heading-text'>Не проходите мимо! Самая вкусная пицца у нас!</p> 
                    <p className='footer__heading-text_blue'>Попробуй сам ;)</p>
                </div>
                <div className="footer__block">
                    <div className="creator">
                        <div className="creator__img">
                            <img src="./assets/img/logo.png" alt="creator" />
                        </div>
                        <div className="creator__address">
                        4353 Delaware Avenue, San Francisco, USA
                        </div>
                        <div className="creator__email">
                            <span><svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_947)">
                                <path d="M1.48148 0H28.1481C28.5411 0 28.9179 0.122916 29.1957 0.341709C29.4736 0.560501 29.6297 0.857247 29.6297 1.16666V19.8334C29.6297 20.1428 29.4736 20.4395 29.1957 20.6583C28.9179 20.8771 28.5411 21 28.1481 21H1.48148C1.08857 21 0.711748 20.8771 0.433916 20.6583C0.156084 20.4395 0 20.1428 0 19.8334V1.16666C0 0.857247 0.156084 0.560501 0.433916 0.341709C0.711748 0.122916 1.08857 0 1.48148 0ZM14.9037 10.1301L5.40444 3.77766L3.48592 5.55566L14.923 13.2031L26.1541 5.54984L24.2163 3.78466L14.9052 10.1301H14.9037Z" fill="#424242" fill-opacity="0.5"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1_947">
                                <rect width="30" height="21" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg></span>
                            <span className='creator__email-text'>hi@thefolio.com</span>
                        </div>
                    </div>
                    <div className="info">
                        {info.map(item=>(
                        <div className="info__block">
                            <p className="info__block-text">{item.tag1}</p>
                            <p className="info__block-text">{item.tag2}</p>
                            <p className="info__block-text">{item.tag3}</p>

                        </div>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FooterComponent;