<script setup>
import Navbar from '@/components/NavBar.vue';
</script>

<template>
    <Navbar />

    <h1>
        Home
    </h1>

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

<script setup>

</script>

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