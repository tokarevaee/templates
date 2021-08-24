/**
 * Vendors
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/**
 * Components
 */
import TgIcon from '@/images/tg_icon.inline.svg';
import MailIcon from '@/images/mail_icon.inline.svg';
// import SkypeIcon from '@/images/skype_icon.svg';

const ContactsManager = ({ data }) => {
    const { ava, name, telegram, mail } = data;
    const intl = useIntl();

    const { images } = useStaticQuery(graphql`
        query {
            images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
                edges {
                    node {
                        relativePath
                        childImageSharp {
                            fixed(width: 240) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        }
    `);

    const img = images.edges.find(({ node }) => node.relativePath === ava);

    return (
        <div className="manager">
            <Img
                className={`manager__ava manager__ava_${telegram.toLowerCase()}`}
                fixed={img.node.childImageSharp.fixed}
                alt={name[intl.locale]}
            />
            <h3 className="manager__name">{name[intl.locale]}</h3>
            <a
                href={`//telegram.im/${telegram}`}
                target="_blank"
                rel="noreferrer"
                className="manager__link manager__link_tg"
            >
                <TgIcon />
                <span>{`@${telegram}`}</span>
            </a>
            {/* <a
                href={`skype:${skype}?chat`}
                target="_blank"
                rel="noreferrer"
                className="manager__link manager__link_skype"
            >
                <SkypeIcon />

                <span>{skype}</span>
            </a> */}
            <a
                href={`mailto:${mail}`}
                target="_blank"
                rel="noreferrer"
                className="manager__link manager__link_male"
            >
                <MailIcon />
                <span>{mail}</span>
            </a>
        </div>
    );
};

ContactsManager.defaultProps = {
    data: {},
};

ContactsManager.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ContactsManager;
