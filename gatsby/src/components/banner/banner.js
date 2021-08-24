/**
 * Vendors
 */
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';

/**
 * Helpers
 */
import { validateEmail } from './helpers.js';

/**
 * Components
 */
import Loader from '@/components/loader';

const Banner = () => {
    /**
     * Hooks
     */
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isResponsed, setIsResponsed] = useState(false);
    const [email, setEmail] = useState('');
    const { host } = useLocation();
    const intl = useIntl();

    /**
     * Submit form
     */
    const submitHandler = e => {
        e.preventDefault();

        if (validateEmail(email)) {
            setIsLoading(true);

            /**
             * Данный url взялся из кастомной формы sendpulse
             *
             * Название формы в sendpulse "Finance Unit"
             */
            const url = `//web.webformscr.com/members/forms/jsonp-submit?callback=SPFormRegistry[%27877113cc5c38e576daa40dcf8281bf9618bdaad2c5241d09bd45c1ace755c7c3%27].cbSubmit&sform%5Bemail%5D=${encodeURI(
                email
            )}&=&sform_lang=ru&sform%5Bhash%5D=877113cc5c38e576daa40dcf8281bf9618bdaad2c5241d09bd45c1ace755c7c3&sform%5BYXV0b1NpdGU%3D%5D=${host}&_=1608732889441`;

            fetch(url, {
                method: 'GET',
            })
                .then(res => {
                    if (!res.ok) {
                        setMessage(intl.messages['banner.messageError']);
                    } else {
                        setMessage(intl.messages['banner.messageSuccess']);
                    }
                })
                .catch(e => {
                    console.error(e);
                    setMessage(intl.messages['banner.messageError']);
                })
                .finally(() => {
                    setIsLoading(false);
                    setIsResponsed(true);
                });
        } else {
            setMessage(intl.messages['banner.messageValid']);
        }
    };

    const inputHandler = e => {
        setEmail(e.target.value.trim());
    };

    const getContent = () => {
        if (isLoading) {
            return <Loader dark={true} />;
        }
        if (message) {
            return <div className="banner__message">{message}</div>;
        }
        return null;
    };

    /**
     * Images
     */
    const { bannerBg, rocket, rocket2, plug } = useStaticQuery(graphql`
        query {
            bannerBg: file(relativePath: { eq: "banner_bg.jpg" }) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            rocket: file(relativePath: { eq: "rocket_1.png" }) {
                childImageSharp {
                    fixed(width: 286, height: 349) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            rocket2: file(relativePath: { eq: "rocket_2.png" }) {
                childImageSharp {
                    fixed(width: 287, height: 379) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            plug: file(relativePath: { eq: "plug.jpg" }) {
                childImageSharp {
                    fixed(width: 1, height: 1) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <section className="banner">
            <div className="container banner__container">
                <Img
                    className="banner__rocket banner__rocket_left"
                    alt="rocket image"
                    fixed={[
                        plug.childImageSharp.fixed,
                        {
                            ...rocket.childImageSharp.fixed,
                            media: `(min-width: 1170px)`,
                        },
                    ]}
                />
                <BackgroundImage
                    Tag="form"
                    onSubmit={submitHandler}
                    fluid={bannerBg.childImageSharp.fluid}
                    className="banner__form"
                >
                    <h2 className="banner__title">
                        <FormattedMessage id="banner.title" />
                    </h2>
                    <h3 className="banner__subtitle">
                        <FormattedMessage id="banner.subtitle" />
                    </h3>

                    {getContent()}

                    {!isResponsed && !isLoading && (
                        <div className="banner__form-inputs">
                            <input
                                required
                                onChange={inputHandler}
                                className="banner__form-input"
                                placeholder="e-mail"
                                name="sform[email]"
                                type="email"
                                value={email}
                            />
                            <button
                                type="submit"
                                className="button banner__button"
                            >
                                <span>
                                    <FormattedMessage id="banner.button" />
                                </span>
                            </button>
                        </div>
                    )}
                </BackgroundImage>
                <Img
                    className="banner__rocket banner__rocket_right"
                    alt="rocket image"
                    fixed={[
                        plug.childImageSharp.fixed,
                        {
                            ...rocket2.childImageSharp.fixed,
                            media: `(min-width: 1170px)`,
                        },
                    ]}
                />
            </div>
        </section>
    );
};

export default Banner;
