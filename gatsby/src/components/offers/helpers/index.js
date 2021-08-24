/**
 * @param {String} subVerticalId
 */
export const getOffersBy = (arr, subverticalId) => {
    return arr.filter(el => el.sub_vertical.includes(subverticalId));
};
