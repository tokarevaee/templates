export const SET_OFFERS = 'SET_OFFERS';
export const SET_TOP_OFFERS = 'SET_TOP_OFFERS';

export const initialState = {
    offers: [],
};

export function reducer(state, action) {
    switch (action.type) {
        case SET_OFFERS: {
            const { offers } = action;
            return { ...state, offers };
        }
        case SET_TOP_OFFERS: {
            const { topOffers } = action;
            return { ...state, topOffers };
        }

        default:
            return state;
    }
}
