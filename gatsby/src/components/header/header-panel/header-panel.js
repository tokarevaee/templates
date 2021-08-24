/**
 * Vendors
 */
import React from 'react';
import { FormattedMessage, useIntl, changeLocale } from 'gatsby-plugin-intl';

const HeaderPanel = () => {
    /**
     * Translation
     */
    const intl = useIntl();
    const isEng = intl.formatMessage({ id: 'lang' }) === 'en';
    const langToggle = isEng ? 'ru' : 'en';

    return (
        <div className="header__panel">
            <button
                onClick={() => changeLocale(langToggle)}
                className="header__lang"
            >
                {langToggle}
            </button>
            <a
                href="https://alfaleads.net/registration/?utm_source=finance-alfaleads"
                target="_blank"
                rel="noreferrer"
                className="header__register button button_primary"
            >
                <span>
                    <FormattedMessage id="buttons.register" />
                </span>
            </a>
            <a
                href="https://my.alfaleads.net/v2/sign/in?utm_source=finance-alfaleads"
                target="_blank"
                rel="noreferrer"
                className="header__login button button_secondary"
            >
                <span>
                    <FormattedMessage id="buttons.login" />
                </span>
            </a>
        </div>
    );
};
export default HeaderPanel;
