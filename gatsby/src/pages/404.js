/**
 * Vendors
 */
import React from 'react';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

/**
 * Components
 */
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import Footer from '@/components/footer';

const NotFoundPage = () => {
    const intl = useIntl();

    const title = intl.formatMessage({ id: 'notFound.title' });
    const linkText = intl.formatMessage({ id: 'notFound.link' });
    const lang = intl.formatMessage({ id: 'lang' });

    const containerStyles = {
        paddingTop: 60,
        paddingBottom: 200,
        fontSize: 24,
    };

    const linkStyles = {
        color: '#ff0e6f',
        display: 'block',
        marginTop: 40,
    };

    return (
        <>
            <Layout>
                <Seo title={title} />
                <div style={containerStyles} className="container">
                    <h1>{title}</h1>
                    <Link style={linkStyles} to={`/${lang}/`}>
                        {linkText}
                    </Link>
                </div>
            </Layout>
            <Footer />
        </>
    );
};

export default NotFoundPage;
