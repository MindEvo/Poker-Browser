const { buildDeck, drawCards} = require('./cards-api.js')
// const { evaluateHand } = require('./cards-game-logic.js');

const getCards = async (req, res) => {
    const { query } = req;
    const num = query.num;
    const players = query.players;

    try {
        const draws = [];
        const deck = await buildDeck(1);
        for (let i=0; i < players; ++i) {
            const draw = await drawCards(deck.deck_id, num);
            draws.push(draw);
        }
        res.json(draws);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCards
}