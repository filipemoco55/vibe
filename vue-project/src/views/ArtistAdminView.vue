<script setup>
import { ref } from "vue";
import Sidebar from "@/components/SideNavbar.vue";

const artists = ref([
  { id: 1, name: "Artist A", genre: "Pop", followers: 50000, image: null },
  { id: 2, name: "Artist B", genre: "Rock", followers: 75000, image: null },
  { id: 3, name: "Artist C", genre: "Electronic", followers: 120000, image: null },
]);

const handleImageUpload = (event, item) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      item.image = reader.result;
    };
    reader.readAsDataURL(file);
  }
};
</script>

<template>
  <div class="admin-container">
    <Sidebar :logout="logout" />

    <div class="content">
      <h1>Artist Page</h1>

      <table class="artist-table">
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Genre</th>
            <th>Followers</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in artists" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.genre }}</td>
            <td>{{ item.followers }}</td>
            <td>
              <div>
                <img v-if="item.image" :src="item.image" alt="Item Image" class="table-image" />
                <span v-else>No Image</span>
              </div>
              <input type="file" @change="handleImageUpload($event, item)" accept="image/*" />
            </td>
            <td>
              <button class="action-btn edit">Edit</button>
              <button class="action-btn delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="add-button">Add Artist</button>
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

.artist-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
}

.artist-table th,
.artist-table td {
  border: 1px solid #ccc;
  padding: 0.8rem;
  text-align: left;
}

.artist-table th {
  background-color: #eaeaea;
  font-weight: bold;
}

.artist-table tr:nth-child(even) {
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

.table-image {
  width: 60px;
  height: auto;
  display: block;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
