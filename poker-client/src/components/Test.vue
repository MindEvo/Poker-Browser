<script>
import axios from 'axios';
export default {
    data() {
        return {
            cards: [],
            table: [],
            player0: [],
            player1: [],
            player2: [],
            player3: [],
            player4: [],
            player5: [],
            player6: [],
            player7: [],
            showFlop: false,
            showTurn: false,
            showRiver: false,
            showTable: false,
        };
    },
    mounted() {
        this.showCards();
    },
    methods: {
        async showCards() {
            try {
                const response = await axios.get('http://localhost:6900/cards?num=52');
                this.cards = response.data.cards;
                this.player1 = this.cards.splice(-2);
            } catch(error) {
                console.log(error);
            }
        },
        drawFlop() {
            try {
                this.table = this.cards.splice(-3);
                this.showTable = true;
            } catch(error) {
                console.log(error);
            }
        },
        drawTurn() {
            try {
                this.table = this.cards.splice(-1);
            } catch(error) {
                console.log(error);
            }
        },
        drawRiver() {
            try {
                this.table = this.cards.splice(-1);
            } catch(error) {
                console.log(error);
            }
        }
    }
}
</script>

<template>
    <div>
        <h1>Table</h1>
        <div v-if="showTable">
            <div v-for="card in table" :key="card.code" class="card">
                <img :src="card.image" :alt="`${card.value} of ${card.suit}`" />
                <p>{{ card.value }} of {{ card.suit }}</p>
            </div>
        </div>
        <div v-else>
            <p>No cards drawn yet.</p>
        </div>
    </div>
    <button @click="drawFlop" type="button">Dealer Show</button>
    
    <div>
        <h2>Player Cards 1</h2>
        <div v-if="player1.length">
            <div v-for="card in player1" :key="card.code" class="card">
                <img :src="card.image" :alt="`${card.value} of ${card.suit}`" />
                <p>{{ card.value }} of {{ card.suit }}</p>
            </div>
        </div>
        <div v-else>
            <p>No player cards drawn yet.</p>
        </div>
    </div>

</template>

<style>
.card {
    display: inline-block;
    margin: 10px;
}
.card img {
    width: 100px;
    height: auto;
}
</style>