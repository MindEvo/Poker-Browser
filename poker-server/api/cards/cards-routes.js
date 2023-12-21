const router = require('express').Router();

const { buildDeck, drawCards} = require('./cards-api.js')

router.get('/', async (req, res) => {
    try {
        const deck = await buildDeck(1);
        const draw = await drawCards(deck.deck_id, 2);
        res.json(draw);
    } catch(error) {
        console.error("Error: ", error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;