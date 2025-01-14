<script setup>
import { ref } from 'vue';
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import TicketCard from '@/components/TicketCard.vue';

// Estado e dados
const selectedTicketId = ref(null);
// const activeButton = ref(null);
// const showTicketDetails = ref(false);


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

    <TicketCard
  v-for="ticket in tickets"
  :key="ticket.id"
  :ticket="ticket"
  :selectedTicketId="selectedTicketId"
  @update:selectedTicketId="(id) => selectedTicketId = id"
/>


    <Footer></Footer>
  </div>
</template>

