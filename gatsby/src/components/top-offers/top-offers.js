/**
 * Vendors
 */
import React, { useContext } from 'react';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';
import { FormattedMessage } from 'gatsby-plugin-intl';

/**
 * Context
 */
import { GlobalStateContext } from '@/context/global-context-provider';

/**
 * Components
 */
import TopOffersItem from './top-offers-item';

const TopOffers = () => {
    /**
     * State
     */
    const { topOffers = [] } = useContext(GlobalStateContext);

    /**
     * Images
     */
    const { topOffersBg } = useStaticQuery(graphql`
        query {
            topOffersBg: file(relativePath: { eq: "top_offers_bg.jpg" }) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    const content = (
        <BackgroundImage
            Tag="section"
            fluid={topOffersBg.childImageSharp.fluid}
            className="top-offers"
        >
            <div className="container top-offers__wrap">
                <h2 className="top-offers__title title">
                    <FormattedMessage id="topOffers.title" />
                </h2>
                <div className="top-offers__list">
                    {topOffers.map(offer => (
                        <TopOffersItem offer={offer} key={offer.id} />
                    ))}
                </div>
            </div>
        </BackgroundImage>
    );

    return topOffers.length ? content : null;
};

export default TopOffers;
