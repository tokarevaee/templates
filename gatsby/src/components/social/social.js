/**
 * Vendors
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Components
 */
import SocialItem from '@/components/social/social-item';

/**
 * Icons
 */
import TgIcon from './icons/tg.inline.svg';
import VkIcon from './icons/vk.inline.svg';
import InstIcon from './icons/inst.inline.svg';
import FbIcon from './icons/fb.inline.svg';
import YtIcon from './icons/youtube.inline.svg';

const Social = ({ className }) => {
    return (
        <ul className={`social ${className}`}>
            <SocialItem name="telegram" href="https://t.me/alfaleads_chat">
                <TgIcon />
            </SocialItem>
            <SocialItem name="vkontakte" href="https://vk.com/alfaleads">
                <VkIcon />
            </SocialItem>
            <SocialItem
                name="instagram"
                href="https://www.instagram.com/alfaleads/"
            >
                <InstIcon />
            </SocialItem>
            <SocialItem
                name="facebook"
                href="https://www.facebook.com/alfaleadsRU"
            >
                <FbIcon />
            </SocialItem>
            <SocialItem
                name="youtube"
                href="https://www.youtube.com/channel/UC0W_eCg6Xp4CBUgbW3KITMg"
            >
                <YtIcon />
            </SocialItem>
        </ul>
    );
};

SocialItem.defaultProps = {
    className: '',
};

SocialItem.propTypes = {
    className: PropTypes.string,
};

export default Social;
