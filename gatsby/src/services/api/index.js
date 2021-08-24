/**
 * Mode
 */
const isProd = process.env.NODE_ENV === 'production';

/**
 * Dev api
 */
const devApi = process.env.DEV_API_URL;

/**
 * Публичный api url по умолчанию
 */
const defaultUrl = 'https://api.alfaleads.eu/pub/';
class OffersService {
    constructor() {
        this._apiBase = defaultUrl;
    }

    initApiBase = async () => {
        await this._getPublicApi();
    };

    // Меняет api url по умолчанию на актуальный
    _getPublicApi = async () => {
        if (!isProd) {
            this._apiBase = devApi;
            return;
        }

        try {
            const url = new URL(`${process.env.API_LIST_URL}`);
            url.searchParams.set('domain', 'alfaleads.net');

            const data = await fetch(url);
            const { endpoints = {} } = await data.json();

            this._apiBase = endpoints.api_pub
                ? endpoints.api_pub
                : this._apiBase;
        } catch (e) {
            throw new Error(`Problem getting api base: ${e}`);
        }
    };

    _getResource = async (url, options = {}) => {
        const res = await fetch(`${this._apiBase}${url}`, options);

        if (!res.ok) {
            throw new Error(`Could not fetch. Status: ${res.status}`);
        }

        return await res.json();
    };

    /**
     * @description Получить все офферы
     * @param {String} lang Актуальный язык сайта
     */
    getFinanceOffers = async lang => {
        const { response = {} } = await this._getResource(
            `actions/landing-offers/finance/?language=${lang.toUpperCase()}`
        );
        const { items = [] } = response;
        return items;
    };
}

const services = new OffersService();
services.initApiBase();
export const { getFinanceOffers } = services;
