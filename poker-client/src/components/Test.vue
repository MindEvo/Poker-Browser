<script>
import axios from 'axios';
export default {
    data() {
        return {
            cards: [],
        };
    },
    mounted() {
        this.showCards();
    },
    methods: {
        async showCards() {
            try {
                const response = await axios.get('http://localhost:6900/cards/');
                this.cards = response.data.cards;
            } catch(error) {
                res.status(500).json({ error: error.message });
            }
        }
    }
}
</script>
<template>
    <div>
        <h1>Drawn Cards</h1>
        <div v-if="cards.length">
            <div v-for="card in cards" :key="card.code" class="card">
                <img :src="card.image" :alt="`${card.value} of ${card.suit}`" />
                <p>{{ card.value }} of {{ card.suit }}</p>
            </div>
        </div>
        <div v-else>
            <p>No cards drawn yet.</p>
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