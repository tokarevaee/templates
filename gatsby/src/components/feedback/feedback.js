/**
 * Vendors
 */
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

/**
 * Services
 */
import { sendFeedbackMessage } from '@/services/feedback';

/**
 * Components
 */
import Loader from '@/components/loader';

const Feedback = () => {
    const intl = useIntl();
    const [message, setMessage] = useState('');
    const [userMessage, setUserMessage] = useState(
        intl.formatMessage({ id: 'feedback.extra' })
    );
    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = async evt => {
        evt.preventDefault();

        if (!message.length) return;

        setIsLoading(true);

        try {
            const isSuccessfully = await sendFeedbackMessage(message);

            isSuccessfully
                ? setUserMessage(
                      intl.formatMessage({ id: 'feedback.messages.success' })
                  )
                : setUserMessage(
                      intl.formatMessage({ id: 'feedback.messages.error' })
                  );
        } catch (e) {
            console.error(e);
            setUserMessage(
                intl.formatMessage({ id: 'feedback.messages.error' })
            );
        } finally {
            setIsLoading(false);
            setMessage('');
        }
    };

    const changeHandler = evt => {
        setMessage(evt.target.value);
    };

    return (
        <section className="feedback">
            <div className="feedback__inner">
                <h2 className="feedback__title">
                    <FormattedMessage id="feedback.title" />
                    <span>?</span>
                </h2>
                {isLoading ? (
                    <Loader />
                ) : (
                    <form onSubmit={submitHandler} className="feedback__form">
                        <textarea
                            className="feedback__message"
                            name="message"
                            onChange={changeHandler}
                            required
                            rows="3"
                            value={message}
                            placeholder={intl.formatMessage({
                                id: 'feedback.placeholder',
                            })}
                        ></textarea>

                        <button
                            disabled={isLoading}
                            type="submit"
                            className="feedback__button button button_primary"
                        >
                            <FormattedMessage id="feedback.button" />
                        </button>
                    </form>
                )}

                <p className="feedback__extra">{userMessage}</p>
            </div>
        </section>
    );
};

export default Feedback;
