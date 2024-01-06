const { buildDeck, drawCards} = require('./cards-api.js')
// const { evaluateHand } = require('./cards-game-logic.js');

const getCards = async (req, res) => {
    const { query } = req;
    const num = query.num;
    try {
        const deck = await buildDeck(1);
        const draw = await drawCards(deck.deck_id, num);

        res.json(draw);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCards
}