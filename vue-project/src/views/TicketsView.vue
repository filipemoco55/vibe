<script setup>
import { ref } from 'vue';
import Navbar from '@/components/NavBar.vue';

// Estado e dados
const selectedTicketId = ref(null);
const activeButton = ref(null);
const showTicketDetails = ref(false);

const tickets = [
  {
    id: 1,
    location: 'PORTO',
    details: 'VIBE CONCERT PORTO 2025 | 10 - 12 JUN 2025',
    dates: [ 
      { date: 'Thursday 10 June', price: '€67.50' },
      { date: 'Friday 11 June', price: '€75.00' },
      { date: 'Saturday 12 June', price: '€67.50' },
    ],
    fullFestival: [
      { date: 'FULL FESTIVAL TICKETS (10 - 12 June)', price: '€200.00', type: 'FULL FESTIVAL ACCESS', },
      { date: 'FULL FESTIVAL VIP TICKETS (10 - 12 June)', price: '€400.00', type: 'FULL FESTIVAL VIP', },
    ],
    vip: [
      { date: 'Thursday 10 June', price: '€150.00', type: 'DAY VIP' },
      { date: 'Friday 11 June', price: '€180.00', type: 'DAY VIP' },
      { date: 'Saturday 12 June', price: '€150.00', type: 'DAY VIP' },
      { date: 'Full Festival VIP (10 - 12 June)', price: '€400.00', type: 'FULL FESTIVAL VIP' },
    ],
  },
  {
    id: 2,
    location: 'ISTORA SENAYAN',
    details: 'VIBE CONCERT ISTORA 2025 | 20 - 22 JUL 2025',
    dates: [
      { date: 'Friday 20 July', price: '€70.00' },
      { date: 'Saturday 21 July', price: '€80.00' },
      { date: 'Sunday 22 July', price: '€70.00' },
    ],
    fullFestival: [
      { date: 'FULL FESTIVAL TICKETS (20 - 22 July)', price: '€220.00', type: 'FULL FESTIVAL ACCESS', },
      { date: 'FULL FESTIVAL VIP TICKETS (20 - 22 July)', price: '€420.00', type: 'FULL FESTIVAL VIP', },
    ],
    vip: [
      { date: 'Friday 20 July', price: '€160.00', type: 'DAY VIP' },
      { date: 'Saturday 21 July', price: '€190.00', type: 'DAY VIP' },
      { date: 'Sunday 22 July', price: '€160.00', type: 'DAY VIP' },
      { date: 'Full Festival VIP (20 - 22 July)', price: '€420.00', type: 'FULL FESTIVAL VIP' },
    ],
  },
];

const buttons = ['DAY TICKETS', 'FULL FESTIVAL TICKETS', 'VIP'];

// Alternar visibilidade dos tickets
const toggleTicket = (id) => {
  if (selectedTicketId.value === id) {
    selectedTicketId.value = null;
    showTicketDetails.value = false;
  } else {
    selectedTicketId.value = id;
    showTicketDetails.value = false;
  }
};

// Selecionar botão
const selectButton = (index) => {
  activeButton.value = index;
  showTicketDetails.value = true;
};
</script>

<template>
  <div class="main-container">
    <Navbar />

    <section class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">VIBE CONCERT</h1>
          <p class="hero-subtitle">CHECK HERE THE AVAILABLE TICKETS FOR ALL OUR EVENTS</p>
        </div>
      </div>
    </section>

    <section class="tickets">
      <div v-for="ticket in tickets" :key="ticket.id" class="ticket-card" @click="toggleTicket(ticket.id)">
        <span class="location">{{ ticket.location }}</span>
        <p class="details">{{ ticket.details }}</p>

        <!-- Botões para selecionar tipo de ingresso -->
        <div v-if="selectedTicketId === ticket.id" class="buttons-container">
          <button v-for="(btn, index) in buttons" :key="index" :class="['button', { active: activeButton === index }]"
            @click.stop="selectButton(index)">
            🎟️ {{ btn }}
          </button>
        </div>

        <!-- Detalhes dos ingressos apenas para o card selecionado -->
        <div v-if="showTicketDetails && selectedTicketId === ticket.id" class="ticket-details">
          <!-- DAY TICKETS -->
          <div v-if="activeButton === 0">
            <h3>DAY FESTIVAL TICKETS</h3>
            <div v-for="(detail, index) in ticket.dates" :key="index" class="ticket-detail">
              <p><span class="date">{{ detail.date }}</span> | 1 DAY GENERAL ACCESS | {{ detail.price }}</p>
              <button class="buy-btn">BUY</button>
            </div>
          </div>

          <!-- FULL FESTIVAL TICKETS -->
          <div v-if="activeButton === 1">
            <h3>FULL FESTIVAL TICKETS</h3>
            <div v-for="(festival, index) in ticket.fullFestival" :key="index" class="ticket-detail">
              <p>
                <span class="date">{{ festival.date }}</span> | {{ festival.type }} | {{ festival.price }}
              </p>
              <button class="buy-btn">BUY</button>
            </div>
          </div>

          <!-- VIP TICKETS -->
          <div v-if="activeButton === 2">
            <h3>DAY VIP TICKETS</h3>
            <div v-for="(vip, index) in ticket.vip.filter(v => v.type === 'DAY VIP')" :key="index"
              class="ticket-detail">
              <p><span class="date">{{ vip.date }}</span> | {{ vip.type }} | {{ vip.price }}</p>
              <button class="buy-btn">BUY</button>
            </div>

            <h3>FULL FESTIVAL VIP TICKETS</h3>
            <div v-for="(vip, index) in ticket.vip.filter(v => v.type === 'FULL FESTIVAL VIP')" :key="index"
              class="ticket-detail">
              <p><span class="date">{{ vip.date }}</span> | {{ vip.type }} | {{ vip.price }}</p>
              <button class="buy-btn">BUY</button>
            </div>
          </div>
        </div>
      </div>
    </section>


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
  </div>
</template>

<style>
h1 {
  margin-top: 50px;
  margin-left: 100px;
  font-weight: bold;
  font-size: 40px;
}

h3 {
  font-family: 'Poppins', sans-serif;
  color: #0077a1;
}

.hero {
  background: url('/src/assets/coldplay.jpg') no-repeat center center/cover;
  height: 400px;
  position: relative;
}

.hero-overlay {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  display: flex;
  justify-content: left;
}

.hero-content {
  text-align: left;
  color: white;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  margin-top: 8rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-left: 100px;
}

.tickets {
  margin: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.ticket-card {
  background: white;
  padding: 1.5rem;
  border: 2px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.ticket-card:hover {
  transform: scale(1.02);
}

.location {
  font-weight: bold;
  color: #0077a1;
  margin-bottom: 0.5rem;
}

.details {
  margin-bottom: 1rem;
}

.buttons-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.button {
  font-family: 'Poppins', sans-serif;
  flex: 1;
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: black;
  background-color: #eaeaea;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: #dcdcdc;
}

.button.active {
  background-color: black;
  color: white;
}

.ticket-details {
  font-family: 'Poppins', sans-serif;
  margin-top: 2rem;
  font-size: 17px;
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 1);
}

.ticket-detail {
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  align-items: center;
}

.date {
  font-weight: bold;
}

.buy-btn {
  font-family: 'Poppins', sans-serif;
  margin-top: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #0077a1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: auto;
}

.buy-btn:hover {
  background-color: #005f7a;
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
  gap: 0.5rem;
}

.footer-section input,
.footer-section button {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  width: 80%;
  max-width: 300px;
}

.footer-section button {
  background-color: #0077a1;
  color: white;
  cursor: pointer;
}

.footer-section button:hover {
  background-color: #005f7a;
}

.social-icons a {
  margin: 0 0.5rem;
  color: white;
  text-decoration: none;
}
</style>
