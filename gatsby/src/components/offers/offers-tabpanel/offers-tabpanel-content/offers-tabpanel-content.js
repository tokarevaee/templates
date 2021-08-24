/**
 * Vendors
 */
import React from 'react';
import { AccordionItemButton } from 'react-accessible-accordion';
import { FormattedMessage } from 'gatsby-plugin-intl';

const OffersTabpanelContent = ({ description }) => {
    const createDescription = () => {
        return { __html: description };
    };

    return (
        <div className="offers__tabpanel-content">
            <div
                className="offers__tabpanel-desc"
                dangerouslySetInnerHTML={createDescription()}
            ></div>
            <AccordionItemButton className="offers__tabpanel-close">
                <FormattedMessage id="buttons.collapse" />
            </AccordionItemButton>
        </div>
    );
};

export default OffersTabpanelContent;
