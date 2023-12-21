const axios = require('axios');
const config = require('../../config.json');

const buildDeck = async (deckCount) => {
    try {
        const deckURL = `${config.url}/deck/new/shuffle/?deck_count=${deckCount}`;
        const response = await axios.get(deckURL);
        return response.data;
    } catch (error) {
        return error.response ? error.response.data : error.message;
    }
};

const drawCards = async (deckId, count) => {
    try {
        const drawURL = `${config.url}/deck/${deckId}/draw/?count=${count}`;
        const response = await axios.get(drawURL);
        return response.data;
    } catch (error) {
        return error.response ? error.response.data : error.message;
    }
};

// export function to be used in our application
module.exports = {
    buildDeck,
    drawCards,
};