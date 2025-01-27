<script setup>
import { ref, onMounted, computed } from 'vue';
import Sidebar from '@/components/SideNavbar.vue';
import { useTicketStore } from '@/stores/ticket';
import { useEventStore } from '@/stores/event';

const ticketStore = useTicketStore();
const eventStore = useEventStore();

const isModalOpen = ref(false);
const isEditMode = ref(false);
const currentTicket = ref({
  id: null,
  name: '',
  type: '',
  price: null,
  eventId: null,
});

const tickets = computed(() => ticketStore.ticket);

const openModal = (ticket = null) => {
  if (ticket) {
    isEditMode.value = true;
    currentTicket.value = { ...ticket, eventId: ticket.event[0]?.id || null };
  } else {
    isEditMode.value = false;
    currentTicket.value = {
      id: null,
      name: '',
      type: '',
      price: null,
      eventId: null,
    };
  }
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const saveTicket = () => {
  const event = eventStore.event.find((e) => e.id === currentTicket.value.eventId);
  if (!event) {
    console.error('Evento não encontrado.');
    return;
  }

  if (isEditMode.value) {
    ticketStore.updateTicket({
      ...currentTicket.value,
      event: [event],
    });
  } else {
    ticketStore.addTicket({
      ...currentTicket.value,
      id: Date.now(),
      event: [event],
    });
  }

  closeModal();
};

const deleteTicket = (id) => {
  ticketStore.deleteTicket(id);
};

onMounted(() => {
  ticketStore.initializeTickets();
});
</script>

<template>
  <div class="admin-container">
    <Sidebar />

    <div class="content">
      <h1>Tickets Management</h1>

      <table class="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Type</th>
            <th>Event</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ticket in tickets" :key="ticket.id">
            <td>{{ ticket.id }}</td>
            <td>{{ ticket.name }}</td>
            <td>€{{ ticket.price }}</td>
            <td>{{ ticket.type }}</td>
            <td>{{ ticket.event[0]?.name }}</td>
            <td>
              <button class="action-btn edit" @click="openModal(ticket)">
                Edit
              </button>
              <button class="action-btn delete" @click="deleteTicket(ticket.id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <button class="add-button" @click="openModal()">Add Ticket</button>

      <div v-if="isModalOpen" class="modal-overlay">
        <div class="modal">
          <h2>{{ isEditMode ? 'Edit Ticket' : 'Add Ticket' }}</h2>

          <form @submit.prevent="saveTicket">
            <div class="form-group">
              <label for="name">Ticket Name</label>
              <input id="name" v-model="currentTicket.name" type="text" required />
            </div>

            <div class="form-group">
              <label for="price">Price</label>
              <input id="price" v-model.number="currentTicket.price" type="number" min="0" required />
            </div>

            <div class="form-group">
              <label for="type">Type</label>
              <select id="type" v-model="currentTicket.type" required>
                <option value="Regular">Regular</option>
                <option value="VIP">VIP</option>
                <option value="VVIP">VVIP</option>
              </select>
            </div>

            <div class="form-group">
              <label for="event">Event</label>
              <select id="event" v-model="currentTicket.eventId" required>
                <option v-for="event in eventStore.event" :key="event.id" :value="event.id">
                  {{ event.name }} - Day {{ event.day }}
                </option>
              </select>
            </div>

            <div class="modal-actions">
              <button type="submit" class="save-btn">
                {{ isEditMode ? 'Save Changes' : 'Add Ticket' }}
              </button>
              <button type="button" class="cancel-btn" @click="closeModal">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
}

.save-btn {
  background-color: #4caf50;
  color: white;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-btn {
  background-color: #f44336;
  color: white;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}


.admin-container {
  display: flex;
  height: 100vh;
}

.content {
  flex: 1;
  padding: 2rem;
  background-color: #f4f4f4;
  color: #333;
}

h1 {
  margin-bottom: 1rem;
  color: #333;
}

.add-button {
  margin-top: 20px;
  background-color: #004f6f;
  color: white;
  font-family: 'Poppins', sans-serif;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  opacity: 0.9;
}

.add-button:hover {
  background-color: #0077a1;
  transform: scale(1.05);
}

.users-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
}

.users-table th,
.users-table td {
  border: 1px solid #ccc;
  padding: 0.8rem;
  text-align: left;
}

.users-table th {
  background-color: #eaeaea;
  font-weight: bold;
}

.users-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.action-btn {
  padding: 0.4rem 0.8rem;
  margin: 0 0.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.action-btn.edit {
  background-color: #4caf50;
  color: #fff;
}

.action-btn.delete {
  background-color: #f44336;
  color: #fff;
}
</style>
