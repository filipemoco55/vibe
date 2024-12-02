<script setup>
import Navbar from '@/components/NavBar.vue';

const placeholderImage = 'src/assets/placeholder.png';

const products = [
    { id: 1, name: 'Vibe White T-Shirt', price: 40, image: 'src/assets/T-shirt.png', link: '/vibe1' },
    { id: 2, name: 'Vibe Black T-Shirt', price: 40, image: 'src/assets/T-shirtpreta.png', link: '/vibe2' },
    { id: 3, name: 'Vibe White Hoodie', price: 90, image: 'src/assets/Hoodie.png', link: '/vibe3' },
    { id: 4, name: 'Vibe Black Hoodie', price: 90, image: 'src/assets/Hoodiepreta.png', link: '/vibe4' },
    { id: 5, name: 'Vibe White Sweatpants', price: 60, image: 'link_para_imagem_1', link: '/vibe5' },
    { id: 6, name: 'Vibe Black Sweatpants', price: 60, image: 'link_para_imagem_2', link: '/vibe6' },
    { id: 7, name: 'Vibe White Socks', price: 8, image: 'link_para_imagem_3', link: '/vibe7' },
    { id: 8, name: 'Vibe Black Socks', price: 8, image: 'link_para_imagem_4', link: '/vibe8' },
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

    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section logo-section">
                <img src="/src/assets/Logo.png" alt="Primavera Sound Logo" class="footer-logo" />
            </div>
            <div class="footer-section">
                <h3>VIBE - CONCERT</h3>
                <ul>
                    <li><router-link to="/legal-warning">Legal Warning</router-link></li>
                    <li><router-link to="/terms-and-conditions">Terms and Conditions</router-link></li>
                    <li><router-link to="/canal-reclamacoes">Canal de Reclamações</router-link></li>
                    <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
                    <li><router-link to="/register-conditions">Register Conditions</router-link></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>Newsletter</h3>
                <form>
                    <input type="email" placeholder="Introduzir e-mail" />
                    <button type="submit">Enviar</button>
                </form>
            </div>

            <div class="footer-section">
                <h3>Follow us</h3>
                <div class="social-icons">
                    <router-link to="/social/twitter">Twitter</router-link>
                    <router-link to="/social/facebook">Facebook</router-link>
                    <router-link to="/social/instagram">Instagram</router-link>
                    <router-link to="/social/youtube">YouTube</router-link>
                </div>
            </div>
        </div>
    </footer>
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

h3 {
    font-family: 'Poppins', sans-serif;
    color: white;
    margin: 30px;
    font-weight: bold;
    font-size: 40px;
}

.product-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin: 50px 100px;
}

.product-card {
    width: 300px;
    height: 300px;
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

.footer {
    background-color: #004f6f;
    color: white;
    padding: 2rem 1rem;
    text-align: center;
    margin-top: 2rem;
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-section {
    flex: 1;
    min-width: 200px;
}

.footer-section h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section ul li a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-section ul li a:hover {
    color: #0077a1;
}

.footer-section form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.footer-section input {
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    width: 80%;
    max-width: 300px;
}

.footer-section button {
    padding: 0.5rem 1rem;
    background-color: #0077a1;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.footer-section button:hover {
    background-color: #005f7a;
}

.social-icons a {
    margin: 0 0.5rem;
    color: white;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0.5rem;
    border-radius: 100px;
    display: inline-block;
    transition: background-color 0.3s ease;
}

.social-icons a:hover {
    background-color: rgba(255, 255, 255, 0.2);
}
</style>
