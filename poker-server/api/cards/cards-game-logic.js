/**
 * Map of card values to their corresponding numerical representations.
 * This mapping facilitates the evaluation of card hands by assigning numeric values
 * to each card's string-based value for efficient hand ranking comparisons.
 * 
 * @constant {Object} handRanks
 */
const handRanks = {
    '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, 
    '7': 7, '8': 8, '9': 9, '10': 10, 
    'JACK': 11, 'QUEEN': 12, 'KING': 13, 'ACE': 14
};

/**
 * Function to assign numerical values to card objects for smoother card hand evaluation.
 * It enhances the card objects passed as input by appending a 'numericValue' property,
 * representing the numeric equivalent of the card's string-based value.
 * @param {Array} cards - An array of card objects to be processed.
 * @returns {Array} - An updated array of card objects with 'numericValue' appended to each card.
 */
const getCardValues = (cards) => {
    return cards.map(card => {
        const numericValue = handRanks[card.value];
        return { ...card, numericValue };
    });
};

/**
 * Evaluates the poker hand based on the provided card objects determines its ranking.
 * Utilizes sorted card values to efficiently identify the highest-ranking hand according to poker rules.
 * 
 * @param {Array} cards - An array of card objects representing the players hand
 * @returns {string} - A string representing the highest-ranking hand achieved from the provided cards.
 */
const evaluateHand = (cards) => {
    // Sort cards by value
    cards = getCardValues(cards);
    cards.sort((a, b) => a.numericValue - b.numericValue);
    // Determine which hand the player has
    if (isStraightFlush(cards)) {
        if (cards[0].numericValue === 10) { return "Royal Flush"; } 
        else { return "Straight Flush"; }
    }
    if (isFourOfAKind(cards)) { return "Four of a Kind"; }
    if (isFullHouse(cards)) { return "Full House"; }
    if (isFlush(cards)) { return "Flush"; }
    if (isStraight(cards)) { return "Straight"; }
    if (isThreeOfAKind(cards)) { return "Three of a Kind"; }
    if (isTwoPair(cards)) { return "Two Pair"; }
    if (isPair(cards)) { return "Pair"; }
    return "High Card";
};

const isStraightFlush = (cards) => {};
const isFourOfAKind = (cards) => {};
const isFullHouse = (cards) => {};
const isFlush = (cards) => {};

const isStraight = (cards) => {
    let values = cards.map(card => card.numericValue);
    let minVal = Math.min( ...values );
    let maxVal = Math.max( ...values );

    if (maxVal - minVal === 4) return true;
    if (minVal !== 2 || maxVal !== 14) return false;
    
    return values.every(val => val === 14 || (val >= 2 && val <= 5));
};

const isThreeOfAKind = (cards) => {};
const isTwoPair = (cards) => {};
const isPair = (cards) => {};












// const evaluateHand = (hand) => {
//     hand.foreach(card => {
//         if (card.value === 'JACK' || card.value === 'QUEEN' || card.value === 'KING' || card.value === 'ACE') {
//             card.value = handRanks[card.value];
//         }
//         else {
//             card.value = parseInt(card.value, 10);
//         }

//         hand.sort((a, b) => a.value - b.value);
//         let counts = {};
//         hand.foreach(card => counts[card.value] = (counts[card.value] || 0) + 1);

//         let pairs = [];
//         let threeOfKind = false;
//         let isStraight = (hand.length === 5) && (hand[4].value - hand[0].value === 4);

//         for (let value in counts) {
//             if (counts[value] === 2) pairs.push(value);
//             if (counts[value] === 3) threeOfKind = true;
//         }
//     })
// };

const determineWinner = () => {

}

module.exports = {
    evaluateHand
}