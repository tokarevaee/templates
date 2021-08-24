/**
 * Vendors
 */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { FormattedMessage } from 'gatsby-plugin-intl';

const SidebarTool = () => {
    const { sidebarBg } = useStaticQuery(graphql`
        query {
            sidebarBg: file(relativePath: { eq: "smart_banner_bg.png" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 307) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <BackgroundImage
            Tag="div"
            fluid={sidebarBg.childImageSharp.fluid}
            className="sidebar sidebar_tool"
        >
            <div className="sidebar__inner">
                <h2 className="sidebar__title">Finance Smartlink</h2>
                <p className="sidebar__text">
                    <span>
                        <FormattedMessage id="sidebar.text.tool" />
                    </span>
                </p>
                <a
                    href="https://t.me/vadim_alfaleads"
                    rel="noreferrer"
                    target="_blank"
                    className="button sidebar__button"
                >
                    <span>
                        <FormattedMessage id="buttons.getAccess" />
                    </span>
                </a>
            </div>
        </BackgroundImage>
    );
};

export default SidebarTool;
