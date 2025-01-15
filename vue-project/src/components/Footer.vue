<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section logo-section">
        <img src="/src/assets/Logo.png" alt="Primavera Sound Logo" class="footer-logo" />
      </div>
      <div class="footer-section">
        <h3>VIBE - CONCERT</h3>
        <ul>
          <li><router-link to="">Legal Warning</router-link></li>
          <li><router-link to="">Terms and Conditions</router-link></li>
          <li><router-link to="">Canal de Reclamações</router-link></li>
          <li><router-link to="">Privacy Policy</router-link></li>
          <li><router-link to="">Register Conditions</router-link></li>
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
          <router-link to="/social/twitter" class="social-icon twitter">
            <img :src="twitterIcon" alt="Twitter" />
          </router-link>
          <router-link to="/social/facebook" class="social-icon facebook">
            <img :src="facebookIcon" alt="facebook" />
          </router-link>
          <router-link to="/social/instagram" class="social-icon instagram">
            <img :src="instagramIcon" alt="Instagram" />
          </router-link>
          <router-link to="/social/youtube" class="social-icon youtube">
            <img :src="youtubeIcon" alt="youtube" />
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};

</script>

<style scoped>
.footer {
  background-color: #004f6f;
  color: white;
  padding: 3rem 1rem;
  text-align: center;
  margin-top: 2rem;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.8rem;
}

.footer-section ul li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #0077a1;
}

.footer-section form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.footer-section input {
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  width: 80%;
  max-width: 350px;
  font-size: 1rem;
}

.footer-section button {
  padding: 0.8rem 1.5rem;
  background-color: #0077a1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.footer-section button:hover {
  background-color: #005f7a;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
}

.social-icons .social-icon {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
}

.social-icons .social-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.2);
}

.social-icons img {
  width: 30px;
  height: 30px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.social-icon-img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}
</style>