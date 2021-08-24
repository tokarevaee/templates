import { SET_OFFERS, SET_TOP_OFFERS } from '@/context/reducer';

export function setOffers(offers) {
    return {
        type: SET_OFFERS,
        offers,
    };
}

export function setTopOffers(topOffers) {
    return {
        type: SET_TOP_OFFERS,
        topOffers,
    };
}
