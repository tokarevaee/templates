/**
 * Vendors
 */
import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import currencyFormatter from 'currency-formatter';

/**
 * Helpers
 */
import { getTextFromField } from '@/components/top-offers/helpers';

const TopOffersItem = ({ offer }) => {
    const {
        offer_id,
        image = '',
        name = '',
        currency = '',
        payout = '',
        short_direction = '',
    } = offer;

    let currencySymbol = currency;
    if (currencyFormatter.findCurrency(currency)) {
        currencySymbol = currencyFormatter.findCurrency(currency).symbol;
    }

    // КОСТЫЛЬ. Нужно добавлять доп.поле в админке
    const topOfferField = getTextFromField(short_direction);

    return (
        <div className="top-offers__item">
            <div className="top-offers__inner">
                <img
                    className="top-offers__logo"
                    src={image}
                    alt="top offers"
                    width="103"
                    height="104"
                />
                <ul className="top-offers__info">
                    <li className="top-offers__name">{name}</li>
                    <li className="top-offers__action">{topOfferField}</li>
                    <li className="top-offers__payout">
                        <span>{payout}</span>
                        {currencySymbol}
                    </li>
                    <li>
                        <a
                            className="top-offers__link"
                            target="_blank"
                            rel="noreferrer"
                            href={`https://my.alfaleads.net/offer/${offer_id}?utm_source=finance-alfaleads`}
                        >
                            <FormattedMessage id="topOffers.link" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TopOffersItem;
