<script setup>
import Navbar from '@/components/NavBar.vue';

const artists = [
    { name: 'Cash Cobain', role: 'Artist', image: '/src/assets/cash.jpg' },
    { name: 'Luh Tyler', role: 'Artist', image: '/src/assets/luh.jpg' },
    { name: 'Pupil Slicer', role: 'Artist', image: '/src/assets/pupil.jpg' },
    { name: 'DJ Boring', role: 'Artist', image: '/src/assets/djboring.jpg' },
    { name: 'Nervo', role: 'Artist', image: '/src/assets/nervo.jpg' },
    { name: 'Bispo', role: 'Artist', image: '/src/assets/bispo.jpg' },

];

const album = [
    { name: 'PLAY Cash Cobain', role: 'Cash Cobain', image: '/src/assets/playcash.jpg' },
    { name: 'My Vision', role: 'Luh Tyler', image: '/src/assets/myvision.jpg' },
    { name: 'Blossom', role: 'Pupil Slicer', image: '/src/assets/blossom.jpg' },
    { name: 'Winona', role: 'DJ Boring', image: '/src/assets/winona.jpg' },
    { name: 'Collateral', role: 'Nervo', image: '/src/assets/collateral.jpg' },
    { name: 'Mais Antigo', role: 'Bispo', image: '/src/assets/maisantigo.jpg' },

];



</script>

<template>
    <Navbar />

    <div class="cards-section">
        <h1>Popular Artists !</h1>
        <br>
        <div class="cards-container">
            <div class="card" v-for="(artist, index) in artists" :key="index">
                <img :src="artist.image" :alt="artist.name" />
                <div class="play-icon">▶</div>
                <div class="text-overlay">
                    <p class="name">{{ artist.name }}</p>
                    <p class="role">{{ artist.role }}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="cards-section">
        <h1>Popular Album !</h1>
        <br>
        <div class="cards-container">
            <div class="card" v-for="(artist, index) in album" :key="index">
                <img :src="artist.image" :alt="artist.name" />
                <div class="play-icon">▶</div>
                <div class="text-overlay">
                    <p class="name">{{ artist.name }}</p>
                    <p class="role">{{ artist.role }}</p>
                </div>
            </div>
        </div>
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



<style>
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

.cards-section {
    margin: 50px 100px;
}

.cards-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.card {
    margin-top: 30px;
    margin-left: 50px;
    position: relative;
    background: #000;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
}

.card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 50%;
}

.play-icon {
    position: absolute;
    font-size: 40px;
    color: white;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.card:hover .play-icon {
    opacity: 1;
}

.text-overlay {
    position: absolute;
    bottom: 0px;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    padding: 5px 0;
}

.name {
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 14px;
    font-weight: bold;
    margin: 0;
}

.role {
    font-family: 'Poppins', sans-serif;
    color: #ccc;
    font-size: 12px;
    margin: 0;
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
