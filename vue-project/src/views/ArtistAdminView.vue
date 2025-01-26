<script setup>
import { ref, onMounted, computed } from "vue";
import { useArtistStore } from "@/stores/artist";
import Sidebar from "@/components/SideNavbar.vue";

const artistStore = useArtistStore();

// Pagination state
const currentPage = ref(1);
const itemsPerPage = 8;

// Modal state
const showAddModal = ref(false);
const showUpdateModal = ref(false);
const newArtist = ref({ name: "", genre: "", followers: 0, image: "" });
const artistToUpdate = ref(null);

// Fetch artists on page load
onMounted(async () => {
  await artistStore.fetchArtists();
});

// Pagination logic
const paginatedArtists = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  return artistStore.artists.slice(startIndex, startIndex + itemsPerPage);
});

const totalPages = computed(() => Math.ceil(artistStore.artists.length / itemsPerPage));

// CRUD Actions
const addArtist = async () => {
  if (newArtist.value.name && newArtist.value.genre) {
    await artistStore.addArtist({ ...newArtist.value });
    newArtist.value = { name: "", genre: "", followers: 0, image: "" };
    showAddModal.value = false;
  }
};

const updateArtist = async () => {
  if (artistToUpdate.value) {
    await artistStore.updateArtist({ ...artistToUpdate.value });
    showUpdateModal.value = false;
  }
};

const deleteArtist = async (id) => {
  await artistStore.removeArtist(id);
};

// Open update modal and set the artist to update
const openUpdateModal = (artist) => {
  artistToUpdate.value = { ...artist };
  showUpdateModal.value = true;
};
</script>


<template>
  <div class="admin-container">
    <Sidebar />

    <div class="content">
      <h1>Artist Page</h1>

      <!-- Artist Table -->
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
          <tr v-for="item in paginatedArtists" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.genre }}</td>
            <td>{{ item.followers }}</td>
            <td>
              <img v-if="item.image" :src="item.image" alt="Item Image" class="table-image" />
              <span v-else>No Image</span>
            </td>
            <td>
              <button class="action-btn edit" @click="openUpdateModal(item)">
                Update
              </button>
              <button class="action-btn delete" @click="deleteArtist(item.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <div class="pagination">
        <button :disabled="currentPage === 1" @click="currentPage--">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button :disabled="currentPage === totalPages" @click="currentPage++">Next</button>
      </div>

      <!-- Add Button -->
      <button class="add-button" @click="showAddModal = true">Add Artist</button>
    </div>

    <!-- Add Artist Modal -->
    <div v-if="showAddModal" class="modal">
      <div class="modal-content">
        <h2>Add Artist</h2>
        <form @submit.prevent="addArtist">
          <input v-model="newArtist.name" placeholder="Name" required />
          <input v-model="newArtist.genre" placeholder="Genre" required />
          <input v-model.number="newArtist.followers" placeholder="Followers" type="number" />
          <input v-model="newArtist.image" placeholder="Image URL" type="text" />
          <div class="modal-actions">
            <button type="submit" class="action-btn save">Add</button>
            <button type="button" class="action-btn cancel" @click="showAddModal = false">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Update Artist Modal -->
    <div v-if="showUpdateModal" class="modal">
      <div class="modal-content">
        <h2>Update Artist</h2>
        <form @submit.prevent="updateArtist">
          <input v-model="artistToUpdate.name" placeholder="Name" required />
          <input v-model="artistToUpdate.genre" placeholder="Genre" required />
          <input v-model.number="artistToUpdate.followers" placeholder="Followers" type="number" />
          <input v-model="artistToUpdate.image" placeholder="Image URL" type="text" />
          <div class="modal-actions">
            <button type="submit" class="action-btn save">Update</button>
            <button type="button" class="action-btn cancel" @click="showUpdateModal = false">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<style scoped>


.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;
}

.modal-content {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  width: 450px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.4s ease-in-out;
}

.modal-content h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
}

.action-btn.save {
  background-color: #4caf50;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.action-btn.cancel {
  background-color: #f44336;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.modal-actions button:hover {
  opacity: 0.9;
}

.action-btn.save {
  background-color: #4caf50;
  color: #fff;
}

.action-btn.cancel {
  background-color: #f44336;
  color: #fff;
}

.pagination {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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

@keyframes fadeIn {
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.6);
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
