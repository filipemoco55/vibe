<script setup>
import { useRoute, useRouter } from 'vue-router';
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

const route = useRoute();
const router = useRouter();

const productId = Number(route.params.id);

const products = [
    { id: 1, name: 'Vibe White T-Shirt', price: 40, image: './assets/T-shirt.png' },
    { id: 2, name: 'Vibe Black T-Shirt', price: 40, image: 'src/assets/T-shirtpreta.png' },
    { id: 3, name: 'Vibe White Hoodie', price: 90, image: 'src/assets/Hoodie.png' },
    { id: 4, name: 'Vibe Black Hoodie', price: 90, image: 'src/assets/Hoodiepreta.png' },
    { id: 5, name: 'Vibe White Sweatpants', price: 60, image: 'link_para_imagem_1' },
    { id: 6, name: 'Vibe Black Sweatpants', price: 60, image: 'link_para_imagem_2' },
    { id: 7, name: 'Vibe White Socks', price: 8, image: 'link_para_imagem_3' },
    { id: 8, name: 'Vibe Black Socks', price: 8, image: 'link_para_imagem_4' },
];

const product = products.find((p) => p.id === productId);

if (!product) {
    router.replace({ name: 'ShopView' });
}
</script>


<template>
    <Navbar />
    <div class="buy-page" v-if="product">
        <h1>{{ product.name }}</h1>
        <img :src="product.image" :alt="product.name" class="product-image" />
        <p class="product-price">{{ product.price }}€</p>

        <label for="size">Choose a size:</label>
        <select id="size" class="size-select">
            <option value="S">Small (S)</option>
            <option value="M">Medium (M)</option>
            <option value="L">Large (L)</option>
            <option value="XL">Extra Large (XL)</option>
        </select>

        <router-link to="/cart" class="buy-button">
            Add to Cart
        </router-link>
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
