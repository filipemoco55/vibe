<script setup>
import { ref, onMounted } from "vue";
import { useEventStore } from "@/stores/event"; // Import the Pinia store
import Sidebar from "@/components/SideNavbar.vue";

const eventStore = useEventStore(); // Access the event store
const events = ref([]);

// Fetch data from the store when the component is mounted
onMounted(() => {
  eventStore.initializeLineups(); // Initialize the lineups dynamically
  events.value = eventStore.event; // Populate the events from the store
});

// Add/Edit/Delete functionality
const addEvent = () => {
  const newEvent = {
    id: Date.now(),
    name: "New Event",
    day: 14,
    location: "New Location",
    lineup: {
      mainStage: [],
      secondaryStage: [],
    },
  };
  eventStore.addEvent(newEvent); // Add the new event to the store
};

const deleteEvent = (eventId) => {
  const index = events.value.findIndex((e) => e.id === eventId);
  if (index !== -1) {
    events.value.splice(index, 1);
  }
};
</script>

<template>
  <div class="admin-container">
    <Sidebar />

    <div class="content">
      <h1>Event Page</h1>

      <table class="events-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Day</th>
            <th>Location</th>
            <th>Main Stage</th>
            <th>Secondary Stage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events" :key="event.id">
            <td>{{ event.id }}</td>
            <td>{{ event.name }}</td>
            <td>{{ event.day }}</td>
            <td>{{ event.location }}</td>
            <!-- Extract artist names for mainStage -->
            <td>{{ event.lineup.mainStage.map(artist => artist.name).join(", ") }}</td>
            <!-- Extract artist names for secondaryStage -->
            <td>{{ event.lineup.secondaryStage.map(artist => artist.name).join(", ") }}</td>
            <td>
              <button class="action-btn edit">Edit</button>
              <button class="action-btn delete" @click="deleteEvent(event.id)">Delete</button>
            </td>
          </tr>
        </tbody>

      </table>
      <button class="add-button" @click="addEvent">Add Event</button>
    </div>
  </div>
</template>

<style scoped>
/* Same styles as before */
</style>



<style scoped>
/* Modal styling */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.modal h2 {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 1rem;
}

.artist-checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.checkbox-item {
  display: flex;
  align-items: center;
}

input[type="checkbox"] {
  margin-right: 0.5rem;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
}

button[type="button"] {
  background-color: #f44336;
  color: white;
  margin-left: 1rem;
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

.events-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
}

.events-table th,
.events-table td {
  border: 1px solid #ccc;
  padding: 0.8rem;
  text-align: left;
}

.events-table th {
  background-color: #eaeaea;
  font-weight: bold;
}

.events-table tr:nth-child(even) {
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