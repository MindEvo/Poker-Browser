const router = require('express').Router();
const { buildDeck, drawCards} = require('./cards-api.js')
const { evaluateHand } = require('./cards-game-logic.js');

router.get('/', async (req, res) => {
    try {
        const deck = await buildDeck(1);
        const draw = await drawCards(deck.deck_id, 2);

        //TESTING//
        const x = evaluateHand(draw.cards);
        //END_TESTING//

        res.json(draw);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;