/**
 * Vendors
 */
import React, { useContext } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

/**
 * Context
 */
import { GlobalStateContext } from '@/context/global-context-provider';

/**
 * Components
 */
import Loader from '@/components/loader';
import OffersTabpanel from './offers-tabpanel';

/**
 * Icons
 */
import BankIcon from '@/images/banks.inline.svg';
import InsIcon from '@/images/insurance.inline.svg';
import MfoIcon from '@/images/mfo.inline.svg';
import ForexIcon from '@/images/forex.inline.svg';
import OtherIcon from '@/images/other.inline.svg';

/**
 * Hooks
 */
import { useOffersData } from '@/hooks';

/**
 * Helpers
 */
import { getOffersBy } from '@/components/offers/helpers';

/**
 * Constants
 */
import { subvertical } from '@/components/offers/constants/subverticals';

const Offers = () => {
    /**
     * Hooks
     */
    const intl = useIntl();
    const [isLoading, isError] = useOffersData(intl.locale);

    /**
     * State
     */
    const { offers = [] } = useContext(GlobalStateContext);

    /**
     * Styles
     */
    const styles = { minHeight: '100vh' };

    const { bannerImage } = useStaticQuery(graphql`
        query {
            bannerImage: file(relativePath: { eq: "finance_banner.png" }) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    const bannerContent =
        intl.locale === 'ru' ? (
            <a
                className="offers__banner"
                href="https://vk.com/wall-126755117_7236"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Img
                    width="850"
                    height="445"
                    alt="Эффективно оптимизируйте траффик"
                    fluid={bannerImage.childImageSharp.fluid}
                />
            </a>
        ) : null;

    return (
        <div className="offers__column-container">
            {bannerContent}
            {isError ? (
                <div>
                    <FormattedMessage id="message.errorMessage" />
                </div>
            ) : (
                <div style={isLoading ? styles : {}}>
                    {isLoading || !offers.length ? (
                        <Loader />
                    ) : (
                        <>
                            <Tabs className="react-tabs">
                                <TabList className="react-tabs__tab-list offers-tabs">
                                    <Tab>
                                        <BankIcon />
                                        <FormattedMessage id="tabs.banks" />
                                    </Tab>
                                    <Tab>
                                        <InsIcon />
                                        <FormattedMessage id="tabs.insurance" />
                                    </Tab>
                                    <Tab>
                                        <MfoIcon />
                                        <FormattedMessage id="tabs.mfo" />
                                    </Tab>
                                    <Tab>
                                        <ForexIcon />
                                        <FormattedMessage id="tabs.forex" />
                                    </Tab>
                                    <Tab>
                                        <OtherIcon />
                                        <FormattedMessage id="tabs.other" />
                                    </Tab>
                                </TabList>
                                <TabPanel>
                                    <OffersTabpanel
                                        offers={getOffersBy(
                                            offers,
                                            subvertical.BANKS
                                        )}
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <OffersTabpanel
                                        offers={getOffersBy(
                                            offers,
                                            subvertical.INSURANCE
                                        )}
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <OffersTabpanel
                                        offers={getOffersBy(
                                            offers,
                                            subvertical.MICROFINANCE
                                        )}
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <OffersTabpanel
                                        offers={getOffersBy(
                                            offers,
                                            subvertical.FOREX
                                        )}
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <OffersTabpanel
                                        offers={getOffersBy(
                                            offers,
                                            subvertical.OTHER
                                        )}
                                    />
                                </TabPanel>
                            </Tabs>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Offers;
