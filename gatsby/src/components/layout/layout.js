/**
 * Vendors
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

/**
 * Context
 */
import GlobalContextProvider from '@/context/global-context-provider';

/**
 * Components
 */
import Header from '@/components/header';
import Footer from '@/components/footer';

const Layout = ({ children }) => {
    const { mainBg } = useStaticQuery(graphql`
        query {
            mainBg: file(relativePath: { eq: "bg.png" }) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <GlobalContextProvider>
            <BackgroundImage
                Tag="div"
                fluid={mainBg.childImageSharp.fluid}
                className="bg-main"
            >
                <Header />
                <main>{children}</main>
                <Footer />
            </BackgroundImage>
        </GlobalContextProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
