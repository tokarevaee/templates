/**
 * @description Получает текст из поля
 * @param {String} field
 */
export const getTextFromField = (field = '') => {
    if (field.trim().length) {
        const element = document.createElement('div');
        element.innerHTML = field;
        return element.innerText;
    } else {
        return field;
    }
};
