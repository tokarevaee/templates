import React from 'react';
import GlobalContextProvider from './src/context/global-context-provider';

import 'flag-icon-css/css/flag-icon.css';
import './src/styles/global.scss';

export const wrapRootElement = ({ element }) => {
    return <GlobalContextProvider>{element}</GlobalContextProvider>;
};
