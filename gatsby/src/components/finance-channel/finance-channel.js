/**
 * Vendors
 */
import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

/**
 * Components
 */
import TgIcon from '@/images/tg_icon_2.inline.svg';

const FinanceChannel = ({ style = {} }) => {
    return (
        <a
            style={style}
            href="https://t.me/alfaleads_finance"
            rel="noreferrer"
            target="_blank"
            className="finance-channel"
        >
            <TgIcon className="finance-channel__icon" />
            <span>
                <FormattedMessage id="sidebar.channel" />
            </span>
        </a>
    );
};

export default FinanceChannel;
