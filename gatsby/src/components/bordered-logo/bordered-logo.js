/**
 * Vendors
 */
import React from 'react';

/**
 * Components
 */
import Logo from '@/components/logo';

const BorderedLogo = () => {
    return (
        <div className="bordered-logo">
            <div className="bordered-logo__border">
                <Logo />
            </div>
        </div>
    );
};

export default BorderedLogo;
