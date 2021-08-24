/**
 * Vendors
 */
import React from 'react';
import PropTypes from 'prop-types';

const SocialItem = ({ children, name, href }) => {
    const linkClasses = `social__link social__link_${name.toLowerCase()}`;

    return (
        <li className="social__item">
            <a
                className={linkClasses}
                target="_blank"
                rel="noreferrer"
                href={href}
                aria-label={name}
            >
                {children}
            </a>
        </li>
    );
};

SocialItem.defaultProps = {
    children: null,
    name: '',
    href: '',
};

SocialItem.propTypes = {
    children: PropTypes.element,
    name: PropTypes.string,
    href: PropTypes.string,
};

export default SocialItem;
