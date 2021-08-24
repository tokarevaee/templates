/**
 * Vendors
 */
import React from 'react';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';

const FooterPrivacy = () => {
    const intl = useIntl();

    const cookieLink =
        intl.locale === 'en'
            ? '//alfaleads.net/en/cookienotice'
            : '//alfaleads.net/cookienotice';
    const policyLink =
        intl.locale === 'en'
            ? '//alfaleads.net/contracts/agreement/affiliate/en/PrivacyStatementAgreementEn.pdf'
            : '//alfaleads.net/contracts/agreement/advertisers/ru/agreements24042020ru.pdf';

    return (
        <div className="footer__privacy">
            <a href={cookieLink} target="_blank" rel="noreferrer">
                <FormattedMessage id="footer.cookie" />
            </a>
            <a href={policyLink} target="_blank" rel="noreferrer">
                <FormattedMessage id="footer.privacy" />
            </a>
        </div>
    );
};

export default FooterPrivacy;
