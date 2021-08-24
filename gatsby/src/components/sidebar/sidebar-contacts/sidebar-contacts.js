/**
 * Vendors
 */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import { FormattedMessage } from 'gatsby-plugin-intl';

/**
 * Components
 */
import FinanceChannel from '@/components/finance-channel';

/**
 * Icons
 */
import { ReactComponent as TgIcon } from '@/images/tg_icon_2.svg';

const SidebarContacts = () => {
    const { photoImage, sidebarBg } = useStaticQuery(graphql`
        query {
            photoImage: file(relativePath: { eq: "vadim_1.png" }) {
                childImageSharp {
                    fixed(quality: 100, width: 102) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            sidebarBg: file(relativePath: { eq: "sidebar_bg_2.jpg" }) {
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
            className="sidebar sidebar_contacts"
        >
            {/* <div className="sidebar__border"></div> */}
            <div className="sidebar__inner">
                <h2 className="sidebar__title">
                    <FormattedMessage id="sidebar.title" />
                </h2>
                <div className="sidebar__block">
                    <Img
                        className="sidebar__photo"
                        fixed={photoImage.childImageSharp.fixed}
                    />
                    <h3 className="sidebar__contact-name">
                        <FormattedMessage id="sidebar.manager" />
                    </h3>
                    <a
                        className="sidebar__link"
                        target="_blank"
                        rel="noreferrer"
                        href="https://t.me/vadim_alfaleads"
                    >
                        <TgIcon />
                        @vadim_alfaleads
                    </a>
                </div>
                <p className="sidebar__text">
                    <span>
                        <FormattedMessage id="sidebar.text.contact" />
                    </span>
                </p>
                <a
                    href="https://t.me/vadim_alfaleads"
                    rel="noreferrer"
                    target="_blank"
                    className="button button_accent"
                >
                    <span>
                        <FormattedMessage id="buttons.getContact" />
                    </span>
                </a>
            </div>
        </BackgroundImage>
    );
};

export default SidebarContacts;
