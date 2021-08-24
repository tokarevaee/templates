/**
 * Vendors
 */
import React from 'react';

/**
 * Components
 */
import Logo from '@/components/logo';
import Social from '@/components/social';
import FooterPrivacy from '@/components/footer/footer-privacy';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrap container">
                <Logo className="footer__logo" />
                <p className="footer__label">
                    ALFALEADS&nbsp;2016&nbsp;-&nbsp;{new Date().getFullYear()}
                </p>
                <Social className="footer__social" />
                <FooterPrivacy />
            </div>
        </footer>
    );
};

export default Footer;
