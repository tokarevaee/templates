/**
 * Vendors
 */
import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

/**
 * Components
 */
import OffersTabpanelHeader from './offers-tabpanel-header';
import OffersTabpanelContent from './offers-tabpanel-content';

const OffersTabpanel = ({ offers }) => {
    return (
        <Accordion allowZeroExpanded className="accordion offers">
            {offers.map(offer => {
                return (
                    <AccordionItem
                        key={offer.offer_id}
                        className="accordion__item offers__tabpanel"
                        activeClassName="accordion__item offers__tabpanel offers__tabpanel_open"
                    >
                        <div className="offers__tabpanel-inner">
                            <AccordionItemButton>
                                <OffersTabpanelHeader offer={offer} />
                            </AccordionItemButton>
                            <AccordionItemPanel>
                                <OffersTabpanelContent
                                    description={offer.full_direction}
                                />
                            </AccordionItemPanel>
                        </div>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
};

export default OffersTabpanel;
