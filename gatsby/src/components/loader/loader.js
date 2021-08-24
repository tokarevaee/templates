/**
 * Vendors
 */
import React from 'react';

const Loader = ({ dark = false }) => {
    const classes = ['lds-roller'];

    if (dark) classes.push('dark-mode');

    return (
        <div className={classes.join(' ')}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;
