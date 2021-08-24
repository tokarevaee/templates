/**
 * Vendors
 */
import React from 'react';

/**
 * Components
 */
import Seo from '@/components/seo';
import Layout from '@/components/layout';
import Offers from '@/components/offers';
import Awards from '@/components/awards';
import BorderedLogo from '@/components/bordered-logo';
import SidebarContainer from '@/components/sidebar-container';
import Sidebar from '@/components/sidebar';
import TopOffers from '@/components/top-offers';
import Contacts from '@/components/contacts';
import Banner from '@/components/banner';

const IndexPage = () => (
    <Layout>
        <Seo />
        <SidebarContainer>
            <Offers />
            <Sidebar />
        </SidebarContainer>
        <Banner />
        <TopOffers />
        <Contacts />
        <div className="container_bg ">
            <SidebarContainer classModif="container_bottom">
                <Awards />
                <BorderedLogo />
            </SidebarContainer>
        </div>
    </Layout>
);

export default IndexPage;
