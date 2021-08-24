/**
 * Vendors
 */
import React from 'react';

/**
 * Components
 */
import Logo from '@/components/logo';
import HeaderPanel from '@/components/header/header-panel';
import HeaderTitle from '@/components/header/header-title';

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrap container">
                <Logo className="header__logo" />
                <HeaderTitle />
                <HeaderPanel />
            </div>
        </header>
    );
};
export default Header;
