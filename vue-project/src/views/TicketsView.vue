<template>
  <div class="tickets-page">
    <Navbar />
    <section class="intro-section">
      <h1>Available Tickets</h1>
      <p class="phase">Choose your tickets and join the event for an unforgettable experience!</p>
    </section>

    <div class="ticket-list-container">
      <div v-for="(eventTickets, eventName) in groupedTickets" :key="eventName" class="event-section">
        <div class="event-header">
          <h2>{{ eventName }}</h2>
          <p><strong>Location:</strong> {{ eventTickets[0].event[0].location }}</p>
        </div>
        <div class="ticket-list">
          <div
            v-for="ticket in eventTickets"
            :key="ticket.id"
            class="ticket-card"
          >
            <div class="ticket-info">
              <h3>{{ ticket.name }}</h3>
              <p class="ticket-price">Price: €{{ ticket.price }}</p>
              <p class="ticket-type">Type: {{ ticket.type }}</p>
              <p class="ticket-availability">Available</p>
              <button @click="addTicketToUser(ticket)">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useTicketStore } from '@/stores/ticket';
import { useEventStore } from '@/stores/event';
import { useAuthStore } from '@/stores/authStore';
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

const ticketStore = useTicketStore();
const eventStore = useEventStore();
const authStore = useAuthStore();
const groupedTickets = ref({});


const addTicketToUser = (ticket) => {
  ticketStore.addTicketToUser(ticket);
  console.log("Ticket adicionado:", ticket);
  updateGroupedTickets(); //Vai atuazilar os tickets apos serem adicionadaos
};

const updateGroupedTickets = () => {
  const ticketsByEvent = {};

  ticketStore.ticket.forEach(ticket => {
    ticket.event.forEach(event => {
      const eventName = `${event.name} - Day ${event.day}`;
      if (!ticketsByEvent[eventName]) {
        ticketsByEvent[eventName] = [];
      }
      ticketsByEvent[eventName].push(ticket);
    });
  });

  groupedTickets.value = ticketsByEvent;
};

// Inicializa os tickets e grupos ao carregar a página
onMounted(() => {
  ticketStore.initializeTickets(); 
  updateGroupedTickets(); 
});
</script>

<style scoped>
h1 {
  font-family: 'Poppins', sans-serif;
  color: white;
}

.phase {
  font-family: 'Poppins', sans-serif;
  color: white;
}

.tickets-page {
  font-family: 'Poppins', sans-serif;
  color: rgb(0, 0, 0);
  background-color: #001f26; 
}

.intro-section {
  margin: 40px;
  text-align: center;
  background-color: #002933;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
}

.intro-section h1 {
  font-size: 3rem;
  font-weight: bold;
}

.intro-section p {
  font-size: 1.2rem;
  margin-top: 10px;
  line-height: 1.6;
}

.ticket-list-container {
  padding: 50px;
  background-color: #f5f5f5;
}

.event-section {
  margin-bottom: 50px;
  padding-bottom: 40px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

.event-header {
  padding: 25px;
  background: #002933;
  color: white;
  border-radius: 12px 12px 0 0;
  text-align: center;
}

.event-header h2 {
  font-size: 2.5rem;
}

.event-header p {
  font-size: 1.2rem;
}

.ticket-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.ticket-card {
  background: #fff;
  border: 1px solid #ddd;
  padding: 25px;
  width: 320px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.ticket-card:hover {
  transform: translateY(-5px);
}

.ticket-info h3 {
  font-size: 1.6rem;
  margin-bottom: 15px;
}

.ticket-price, .ticket-type, .ticket-availability {
  font-size: 1.1rem;
  margin: 10px 0;
}

button {
  background: #033749;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background 0.3s ease;
}

button:hover {
  background: #005f7a;
}

@media (max-width: 768px) {
  .intro-section h1 {
    font-size: 2.5rem;
  }

  .ticket-card {
    width: 280px;
  }
}

@media (max-width: 480px) {
  .intro-section h1 {
    font-size: 2rem;
  }

  .ticket-card {
    width: 100%;
  }
}
</style>
