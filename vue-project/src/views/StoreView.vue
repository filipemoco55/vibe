<script setup>
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';


const placeholderImage = 'src/assets/placeholder.png';

const products = [
    { id: 1, name: 'Vibe White T-Shirt', price: 40, image: 'src/assets/T-shirt.png' },
    { id: 2, name: 'Vibe Black T-Shirt', price: 40, image: 'src/assets/T-shirtpreta.png' },
    { id: 3, name: 'Vibe White Hoodie', price: 90, image: 'src/assets/Hoodie.png' },
    { id: 4, name: 'Vibe Black Hoodie', price: 90, image: 'src/assets/Hoodiepreta.png' },
    { id: 5, name: 'Vibe White Sweatpants', price: 60, image: 'link_para_imagem_1' },
    { id: 6, name: 'Vibe Black Sweatpants', price: 60, image: 'link_para_imagem_2' },
    { id: 7, name: 'Vibe White Socks', price: 8, image: 'link_para_imagem_3' },
    { id: 8, name: 'Vibe Black Socks', price: 8, image: 'link_para_imagem_4' },
];
</script>

<template>
    <Navbar />

    <h1>WEAR THE RHYTHM, FEEL THE VIBE!</h1>

    <div class="product-list">
        <a v-for="product in products" :key="product.id" :href="product.link" class="product-card">
            <div class="product-image" :style="{ backgroundImage: `url(${product.image || placeholderImage})` }"></div>
            <h3 class="product-title">{{ product.name }}</h3>
            <p class="product-price">{{ product.price }}€</p>
        </a>
    </div>
    <Footer></Footer>
</template>

<style scoped>

@media (max-width: 1200px) {
    .product-list {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 900px) {
    .product-list {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .product-list {
        grid-template-columns: 1fr;
    }
}

h1 {
    font-family: 'Poppins', sans-serif;
    color: white;
    margin-top: 50px;
    margin-left: 100px;
    font-weight: bold;
    font-size: 40px;
    text-align: center;
}

.product-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin: 50px 100px;
}

.product-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
    transform: scale(1.05);
}

.product-image {
    width: 100%;
    height: 300px;
    border-radius: 8px;
    background-size: cover;
    background-position: center;
}

.product-title {
    margin-top: 10px;
    margin-left: 20px;
    font-family: 'Poppins', sans-serif;
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    color: #333;
}

.product-price {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: #555;
    text-align: left;
    margin-left: 20px;
}


</style>

