/**
 * Vendors
 */
import React from 'react';

import logoImage from './logo.svg';

const Logo = ({ className }) => (
    <a
        target="_blank"
        rel="noreferrer"
        href="https://alfaleads.net/?utm_source=finance-alfaleads"
    >
        <img
            className={className}
            src={logoImage}
            alt="Alfaleads"
            width="155"
        />
    </a>
);

export default Logo;
