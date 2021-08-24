export const sendFeedbackMessage = async (message) => {
    const url = process.env.FEEDBACK_URL;
    const data = new FormData();
    data.append('message', message);

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: data,
        });
        const { status = 'error' } = await response.json();

        return status === 'ok';
    } catch (e) {
        throw new Error(e);
    }
};
