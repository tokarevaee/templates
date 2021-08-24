/**
 * Vendors
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useIntl } from 'gatsby-plugin-intl';

const SEO = ({ description, meta, title }) => {
    /**
     * Translation
     */
    const intl = useIntl();
    const metaDescription =
        description || intl.formatMessage({ id: 'siteMetadata.description' });
    const metaTitle =
        title || intl.formatMessage({ id: 'siteMetadata.pageTitle' });
    const url = intl.formatMessage({ id: 'siteMetadata.url' });
    const author = intl.formatMessage({ id: 'siteMetadata.author' });

    return (
        <Helmet
            htmlAttributes={{
                lang: intl.formatMessage({ id: 'siteMetadata.lang' }),
            }}
            title={metaTitle}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: metaTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:url`,
                    content: url,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: author,
                },
                {
                    name: `twitter:title`,
                    content: metaTitle,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}
        />
    );
};

SEO.defaultProps = {
    meta: [],
    description: ``,
    author: ``,
};

SEO.propTypes = {
    description: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
};

export default SEO;
