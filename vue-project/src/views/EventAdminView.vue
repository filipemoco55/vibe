<script setup>
import { ref, onMounted, computed } from "vue";
import { useEventStore } from "@/stores/event";
import { useArtistStore } from "@/stores/artist"; // Import artist store
import Sidebar from "@/components/SideNavbar.vue";

const eventStore = useEventStore(); // Access the event store
const artistStore = useArtistStore(); // Access the artist store
const events = ref([]); // Local events reference
const showModal = ref(false); // Modal visibility state
const isEditing = ref(false); // To check if editing or adding

// New event template
const newEvent = ref({
  id: null,
  name: "",
  day: null,
  location: "",
  lineup: {
    mainStage: [],
    secondaryStage: [],
  },
});

// Fetch data when the component mounts
onMounted(() => {
  eventStore.initializeLineups(); // Initialize event lineups
  artistStore.fetchArtists(); // Fetch artists from the artist store
  events.value = eventStore.event; // Sync events with the store
});

// Computed property for the next event ID
const nextEventId = computed(() => {
  const maxId = events.value.reduce((max, event) => Math.max(max, event.id), 0);
  return maxId + 1;
});

// Open the modal for editing
const editEvent = (event) => {
  newEvent.value = JSON.parse(JSON.stringify(event)); // Clone the event to avoid mutations
  isEditing.value = true; // Set editing mode
  showModal.value = true; // Open modal
};

// Add or update event
const addEvent = () => {
  if (newEvent.value.name && newEvent.value.day && newEvent.value.location) {
    if (isEditing.value) {
      // Update existing event
      eventStore.updateEvent(newEvent.value);
    } else {
      // Add new event
      const eventToAdd = {
        ...newEvent.value,
        id: nextEventId.value, // Auto-incremented ID
      };
      eventStore.addEvent(eventToAdd);
    }
    resetForm();
    showModal.value = false; // Close the modal
  } else {
    alert("Please fill out all fields!");
  }
};

// Reset the form after submission
const resetForm = () => {
  newEvent.value = {
    id: null,
    name: "",
    day: null,
    location: "",
    lineup: {
      mainStage: [],
      secondaryStage: [],
    },
  };
  isEditing.value = false; // Reset editing mode
};

// Delete an event
const deleteEvent = (eventId) => {
  const index = events.value.findIndex((e) => e.id === eventId);
  if (index !== -1) {
    events.value.splice(index, 1);
  }
};

// Artists list for the multi-select dropdown
const artists = computed(() => artistStore.artists);
</script>



<template>
  <div class="admin-container">
    <Sidebar />

    <div class="content">
      <h1>Event Page</h1>

      <!-- Events Table -->
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
            <td>{{ event.lineup.mainStage.map(artist => artist.name).join(", ") }}</td>
            <td>{{ event.lineup.secondaryStage.map(artist => artist.name).join(", ") }}</td>
            <td>
              <button class="action-btn edit" @click="editEvent(event)">Edit</button>
              <button class="action-btn delete" @click="deleteEvent(event.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Add Event Button -->
      <button class="add-button" @click="() => { isEditing = false; showModal = true }">Add Event</button>

      <!-- Add/Edit Event Modal -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal">
          <h2>{{ isEditing ? "Edit Event" : "Add Event" }}</h2>

          <!-- Event Form -->
          <form @submit.prevent="addEvent">
            <label>
              Event Name:
              <input type="text" v-model="newEvent.name" required />
            </label>

            <label>
              Day:
              <input type="number" v-model="newEvent.day" required />
            </label>

            <label>
              Location:
              <input type="text" v-model="newEvent.location" required />
            </label>

            <!-- Main Stage Multi-Select -->
            <label>
              Main Stage Lineup:
              <select
                v-model="newEvent.lineup.mainStage"
                multiple
                required
              >
                <option
                  v-for="artist in artists"
                  :key="artist.id"
                  :value="artist"
                >
                  {{ artist.name }}
                </option>
              </select>
            </label>

            <!-- Secondary Stage Multi-Select -->
            <label>
              Secondary Stage Lineup:
              <select
                v-model="newEvent.lineup.secondaryStage"
                multiple
                required
              >
                <option
                  v-for="artist in artists"
                  :key="artist.id"
                  :value="artist"
                >
                  {{ artist.name }}
                </option>
              </select>
            </label>

            <!-- Submit & Cancel Buttons -->
            <button type="submit">{{ isEditing ? "Update Event" : "Add Event" }}</button>
            <button type="button" @click="showModal = false">Cancel</button>
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

input {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
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

select[multiple] {
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1rem;
}

option {
  padding: 0.5rem;
}
</style>