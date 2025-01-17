<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { useMerchStore } from '@/stores/merch'; // Import the store
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

const route = useRoute();
const router = useRouter();
const merchStore = useMerchStore();

// Extract product ID from the route params
const productId = Number(route.params.id);

// Find the product in the store
const product = merchStore.merch.find((p) => p.id === productId);

// Handle redirect if the product is not found
if (!product) {
    router.replace({ name: 'ShopView' });
}

// State for the selected size
const selectedSize = ref('M');

// Function to handle adding the product to the cart
const addToCart = () => {
    merchStore.addItem(product.id, product.name, product.price, selectedSize.value, product.image);
    router.push('/cart'); // Redirect to the cart page
};
</script>



<template>
    <Navbar />
    <br>
    <div class="buy-page" v-if="product">
        <h1>{{ product.name }}</h1>
        <img :src="product.image" :alt="product.name" class="product-image" />
        <p class="product-price">{{ product.price }}€</p>

        <label for="size">Choose a size:</label>
        <select id="size" v-model="selectedSize" class="size-select">
            <option value="S">Small (S)</option>
            <option value="M">Medium (M)</option>
            <option value="L">Large (L)</option>
            <option value="XL">Extra Large (XL)</option>
        </select>

        <button @click="addToCart" class="buy-button">
            Add to Cart
        </button>
    </div>
    <div v-else class="not-found">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist or may have been removed.</p>
        <router-link to="/shop" class="back-button">Return to Shop</router-link>
    </div>
    <Footer />
</template>



<style scoped>
.buy-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
}

.product-image {
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin-bottom: 20px;
}

.product-price {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
}

.size-select {
    margin: 20px 0;
    padding: 10px;
    font-size: 16px;
}

.buy-button {
    padding: 10px 20px;
    background-color: #0088ccb9;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
}

.buy-button:hover {
    background-color: #003b57;
}

.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
    color: #555;
}

.not-found h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.back-button {
    padding: 10px 20px;
    background-color: #ccc;
    color: #333;
    border-radius: 8px;
    text-decoration: none;
    font-size: 16px;
    margin-top: 20px;
    text-align: center;
}

.back-button:hover {
    background-color: #bbb;
    color: #000;
}
</style>
