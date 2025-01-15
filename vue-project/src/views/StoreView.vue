<<script setup>
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import ShopViewC from '@/components/ShopViewC.vue';

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
    <ShopViewC :products="products" />
    <Footer />
</template>

