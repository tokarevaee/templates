/**
 * Vendors
 */
import React from 'react';

/**
 * Components
 */
import FinanceChannel from '@/components/finance-channel';
import SidebarTool from '@/components/sidebar/sidebar-tool';
import Feedback from '@/components/feedback';
// import SidebarContacts from '@/components/sidebar/sidebar-contacts';

const Sidebar = () => {
    return (
        <aside className="aside">
            <SidebarTool />
            {/* <SidebarContacts /> */}
            <FinanceChannel style={{ marginBottom: 20 }} />
            <Feedback />
        </aside>
    );
};

export default Sidebar;
