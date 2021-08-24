/**
 * Vendors
 */
import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import currencyFormatter from 'currency-formatter';

const OffersTabpanelHeader = ({ offer }) => {
    const { offer_id, name, geo, image, payout, currency } = offer;
    const countries = geo.map((country, i) => {
        const c = country.replace(/,/g, '');
        const flagIconClasses = `flag-icon-background flag-icon-${c.toLowerCase()}`;
        return (
            <span className="offers__tabpanel-country" key={i}>
                <span className={flagIconClasses}></span>
                {c}
            </span>
        );
    });

    let currencySymbol = currency;
    if (currencyFormatter.findCurrency(currency)) {
        currencySymbol = currencyFormatter.findCurrency(currency).symbol;
    }

    return (
        <div className="offers__tabpanel-header">
            <img
                className="offers__tabpanel-img"
                src={image}
                alt={name}
                width="65"
                height="65"
            />
            <div className="offers__tabpanel-info">
                <h3 className="offers__tabpanel-name">{name}</h3>
                <div className="offers__tabpanel-meta">
                    <div className="offers__tabpanel-countries">
                        {countries}
                    </div>
                    <span className="offers__tabpanel-payout">
                        {payout}
                        {currencySymbol}
                    </span>
                    {/* <span className="offers__tabpanel-label">{flow}</span> */}
                </div>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://my.alfaleads.net/offer/${offer_id}?utm_source=finance-alfaleads`}
                    className="button button_secondary offers__button"
                >
                    <span>
                        <FormattedMessage id="buttons.connect" />
                    </span>
                </a>
            </div>
        </div>
    );
};

OffersTabpanelHeader.defaultProps = {
    src: '',
    name: '',
};

OffersTabpanelHeader.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
};

export default OffersTabpanelHeader;
