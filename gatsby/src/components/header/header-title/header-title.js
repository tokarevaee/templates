/**
 * Vendors
 */
import React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

const HeaderTitle = () => {
    const { locale } = useIntl();
    return (
        <h1 id={`alfa-title-${locale}`} className="header__title">
            <FormattedMessage id="header.title" />
        </h1>
    );
};

export default HeaderTitle;
