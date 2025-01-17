<script setup>
import { useMerchStore } from '@/stores/merch'; // Import the store
import { computed } from 'vue';

const merchStore = useMerchStore(); // Access the store

// Get the merchandise items from the store
const merchItems = computed(() => merchStore.merch);
</script>


<template>
    <div>
        <h1>WEAR THE RHYTHM, FEEL THE VIBE!</h1>

        <div v-if="merchItems.length === 0" class="no-merch-message">
            <p>No merchandise available at the moment. Check back later!</p>
        </div>
        <div v-else class="merch-list">
            <router-link
                v-for="item in merchItems"
                :key="item.id"
                :to="{ name: 'ProductDetail', params: { id: item.id } }"
                class="merch-card"
            >
                <div
                    class="merch-image"
                    :style="{ backgroundImage: `url(${item.image || placeholderImage})` }"
                ></div>
                <h3 class="merch-title">{{ item.name }}</h3>
                <p class="merch-price">{{ item.price }}€</p>
            </router-link>
        </div>
    </div>
</template>


<style scoped>
h1 {
    font-family: 'Poppins', sans-serif;
    color: white;
    margin-top: 50px;
    margin-left: 100px;
    font-weight: bold;
    font-size: 40px;
}

.merch-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin: 50px 100px;
}

.merch-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.merch-card:hover {
    transform: scale(1.05);
}

.merch-image {
    width: 100%;
    height: 300px;
    border-radius: 8px;
    background-size: cover;
    background-position: center;
}

.merch-title {
    margin-top: 10px;
    margin-left: 20px;
    font-family: 'Poppins', sans-serif;
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    color: #333;
}

.merch-price {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: #555;
    text-align: left;
    margin-left: 20px;
}

.no-merch-message {
    text-align: center;
    color: gray;
    font-size: 18px;
    margin: 20px 0;
}
</style>
