/**
 * Vendors
 */
import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

/**
 * Components
 */
import CupIcon from '@/images/cup.png';

const Awards = () => {
    return (
        <section className="awards">
            <div className="container awards__wrap">
                <h2 className="awards__title">Alfaleads</h2>
                <h3 className="awards__subtitle">
                    <img src={CupIcon} alt="cup icon" width="35" height="35" />
                    Affbank Awards №1
                </h3>
                <p className="awards__text">
                    <FormattedMessage id="awards.text" />
                </p>
                <a
                    target="_blank"
                    rel="noreferrer"
                    className="button button_secondary awards__link"
                    href="https://alfaleads.net/?utm_source=finance-alfaleads"
                >
                    <span>
                        <FormattedMessage id="buttons.join" />
                    </span>
                </a>
            </div>
        </section>
    );
};

export default Awards;
