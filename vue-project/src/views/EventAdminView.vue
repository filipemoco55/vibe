<script setup>
import { ref } from "vue";
import Sidebar from "@/components/SideNavbar.vue";

const events = ref([
  {
    id: 1,
    name: "Vibe Festival",
    date: "2025-06-15",
    location: "Porto,Portugal",
    lineup: {
      mainStage: "Artist A, Artist B",
      secondaryStage: "Artist C, Artist D"
    }
  },
  {
    id: 2,
    name: "Art Attack event",
    date: "2025-12-10",
    location: "Porto,Portugal",
    lineup: {
      mainStage: "Artist X, Artist Y",
      secondaryStage: "Artist Z, Artist W"
    }
  }
]);
</script>

<template>
  <div class="admin-container">
    <Sidebar :logout="logout" />

    <div class="content">
      <h1>Event Page</h1>

      <table class="events-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
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
            <td>{{ event.date }}</td>
            <td>{{ event.location }}</td>
            <td>{{ event.lineup.mainStage }}</td>
            <td>{{ event.lineup.secondaryStage }}</td>
            <td>
              <button class="action-btn edit">Edit</button>
              <button class="action-btn delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="add-button">Add Event</button>
    </div>
  </div>
</template>

<style scoped>
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