<template>
    <div class="ticket-card" @click="toggleTicket">
  <span class="location">{{ ticket.location }}</span>
  <p class="details">{{ ticket.details }}</p>


  <div v-if="selectedTicketId === ticket.id" class="buttons-container">
    <button
      v-for="(btn, index) in buttons"
      :key="index"
      :class="['button', { active: activeButton === index }]"
      @click.stop="selectButton(index)"
    >
      🎟️ {{ btn }}
    </button>
  </div>
  
      <div v-if="showTicketDetails && isSelected" class="ticket-details">
        <div v-if="activeButton === 0">
          <h3>DAY FESTIVAL TICKETS</h3>
          <div v-for="(detail, index) in ticket.dates" :key="index" class="ticket-detail">
            <p><span class="date">{{ detail.date }}</span> | 1 DAY GENERAL ACCESS | {{ detail.price }}</p>
            <button class="buy-btn">BUY</button>
          </div>
        </div>
  
        <div v-if="activeButton === 1">
          <h3>FULL FESTIVAL TICKETS</h3>
          <div v-for="(festival, index) in ticket.fullFestival" :key="index" class="ticket-detail">
            <p>
              <span class="date">{{ festival.date }}</span> | {{ festival.type }} | {{ festival.price }}
            </p>
            <button class="buy-btn">BUY</button>
          </div>
        </div>
  
        <div v-if="activeButton === 2">
          <h3>DAY VIP TICKETS</h3>
          <div v-for="(vip, index) in ticket.vip.filter(v => v.type === 'DAY VIP')" :key="index" class="ticket-detail">
            <p><span class="date">{{ vip.date }}</span> | {{ vip.type }} | {{ vip.price }}</p>
            <button class="buy-btn">BUY</button>
          </div>
  
          <h3>FULL FESTIVAL VIP TICKETS</h3>
          <div v-for="(vip, index) in ticket.vip.filter(v => v.type === 'FULL FESTIVAL VIP')" :key="index" class="ticket-detail">
            <p><span class="date">{{ vip.date }}</span> | {{ vip.type }} | {{ vip.price }}</p>
            <button class="buy-btn">BUY</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, computed } from 'vue';

// Declaração (props)
const props = defineProps({
  ticket: Object, 
  selectedTicketId: Number, 
});

// atualizar o estado no componente pai
const emit = defineEmits(['update:selectedTicketId']);

// Computed para verificar se o ticket está selecionado
const isSelected = computed(() => props.selectedTicketId === props.ticket.id);

const activeButton = ref(null);
const showTicketDetails = ref(false);

// Função para alternar o estado do ticket
const toggleTicket = () => {
  if (isSelected.value) {
    emit('update:selectedTicketId', null); 
    showTicketDetails.value = false;
  } else {
    emit('update:selectedTicketId', props.ticket.id); 
    showTicketDetails.value = false;
  }
};


const selectButton = (index) => {
  activeButton.value = index;
  showTicketDetails.value = true;
};

// Botões disponíveis
const buttons = ['DAY TICKETS', 'FULL FESTIVAL TICKETS', 'VIP'];
</script>
  
  
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
</style>