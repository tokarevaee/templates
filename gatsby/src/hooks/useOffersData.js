/**
 * Vendors
 */
import { useState, useEffect, useContext } from 'react';

/**
 * Context
 */
import { GlobalDispatchContext } from '@/context/global-context-provider';

/**
 * Action Creators
 */
import { setOffers, setTopOffers } from '@/context/action-creators';

/**
 * Api
 */
import { getFinanceOffers } from '@/services/api';

export function useOffersData(lang) {
    /**
     * Hooks
     */
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const dispatch = useContext(GlobalDispatchContext);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        (async function () {
            try {
                const items = await getFinanceOffers(lang);
                if (items.length) {
                    dispatch(setOffers(items));
                    dispatch(setTopOffers(items.filter(el => el.is_top_offer)));
                }
            } catch (e) {
                console.error(e);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

    return [isLoading, isError];
}
