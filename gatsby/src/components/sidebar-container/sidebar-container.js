/**
 * Vendors
 */
import React from 'react';

const SidebarContainer = ({ children, classModif = '' }) => {
    return (
        <div className={`container container_sidebar ${classModif}`}>
            {children}
        </div>
    );
};

export default SidebarContainer;
