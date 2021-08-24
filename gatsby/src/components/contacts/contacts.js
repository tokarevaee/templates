/**
 * Vendors
 */
import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

/**
 * Components
 */
import Manager from '@/components/contacts/contacts-manager';

/**
 * Data
 */
import { managerList } from './data';

const Contacts = () => {
    return (
        <section className="contacts">
            <div className="contacts__wrap container">
                <h2 className="contacts__title title">
                    <FormattedMessage id="contacts.title" />
                </h2>
                <div className="contacts__managers">
                    {managerList.map(manager => (
                        <Manager data={manager} key={manager.name.en} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contacts;
