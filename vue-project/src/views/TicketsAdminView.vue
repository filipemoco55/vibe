<script setup>
import { ref } from "vue";
import Sidebar from "@/components/SideNavbar.vue";

const users = ref([
  { id: 1, name: "Vibe White T-Shirt", price: 40, image: null },
  { id: 2, name: "Vibe Black T-Shirt", price: 40, image: null },
]);


</script>

<template>
  <div class="admin-container">
    <Sidebar :logout="logout" />

    <div class="content">
      <h1>Ticket Page</h1>

      <table class="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Day</th>
            <th>Price</th>
            <th>Type</th>
            <th>Event</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>11</td>
            <td>75€</td>
            <td>Day Acess</td>
            <td>Vibe Festival</td>
            <td>
              <button class="action-btn edit">Edit</button>
              <button class="action-btn delete">Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>12</td>
            <td>75€</td>
            <td>Day Acess</td>
            <td>Vibe Festival</td>
            <td>
              <button class="action-btn edit">Edit</button>
              <button class="action-btn delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="add-button">Add Ticket</button>
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
