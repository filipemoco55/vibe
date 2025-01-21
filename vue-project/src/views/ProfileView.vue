<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { useUserStore } from '@/stores/user';
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

const authStore = useAuthStore();
const userStore = useUserStore();

// Computed para buscar o usuário logado
const loggedInUser = computed(() => {
  if (authStore.isAuthenticated) {
    return userStore.users.find((user) => user.id === authStore.loggedInUser.id);
  }
  return null;
});

// Estados para a edição do perfil
const editing = ref(false);
const profilePicture = ref('');
const name = ref('');
const email = ref('');

// Abrir o editor e carregar os dados do usuário
const openEditor = () => {
  if (loggedInUser.value) {
    profilePicture.value = loggedInUser.value.profilePicture || '';
    name.value = loggedInUser.value.name || '';
    email.value = loggedInUser.value.email || '';
    editing.value = true;
  }
};

// Salvar alterações no perfil
const saveChanges = () => {
  const userId = loggedInUser.value.id;
  const updatedUser = {
    profilePicture: profilePicture.value,
    name: name.value,
    email: email.value,
  };

  userStore.updateUser(userId, updatedUser);
  authStore.loggedInUser = { ...authStore.loggedInUser, ...updatedUser };

  localStorage.setItem(`user_${userId}`, JSON.stringify(authStore.loggedInUser));
  editing.value = false;
};
</script>

<template>
  <Navbar />
  <br />

  <div class="user-profile" v-if="loggedInUser">
    <div class="profile-header">
      <img :src="loggedInUser.profilePicture || '/default-profile.jpg'" alt="Profile Picture" class="profile-picture" />
      <h2>{{ loggedInUser.name }}</h2>
      <p>{{ loggedInUser.email }}</p>
    </div>

    <div class="section">
      <h2>Upcoming Events</h2>
      <div v-if="loggedInUser.events.length > 0" class="events-list">
        <div class="event-card" v-for="event in loggedInUser.events" :key="event.id">
          <h3>{{ event.name }}</h3>
          <p>Date: {{ event.date }}</p>
          <p>Location: {{ event.location }}</p>
        </div>
      </div>
      <p v-else>No upcoming events.</p>
    </div>

    <div class="section">
      <h2>Purchased Merch</h2>
      <div v-if="loggedInUser.merch.length > 0" class="merch-list">
        <div class="merch-item" v-for="item in loggedInUser.merch" :key="item.id">
          <h3>{{ item.name }}</h3>
          <p>Size: {{ item.size }}</p>
          <p>Price: ${{ item.price }}</p>
        </div>
      </div>
      <p v-else>No merch purchased yet.</p>
    </div>

    <!-- Botão para abrir o editor -->
    <div class="edit-profile">
      <button @click="openEditor">Edit Profile</button>
    </div>

    <!-- Modal de edição do perfil -->
    <div class="modal" v-if="editing">
      <div class="modal-content">
        <h2>Edit Profile</h2>
        <label>
          Profile Picture URL:
          <input v-model="profilePicture" type="text" placeholder="Enter image URL" />
        </label>
        <label>
          Name:
          <input v-model="name" type="text" placeholder="Enter your name" />
        </label>
        <label>
          Email:
          <input v-model="email" type="email" placeholder="Enter your email" />
        </label>
        <div class="buttons">
          <button @click="saveChanges" class="save-button">Save Changes</button>
          <button @click="editing = false" class="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<style scoped>
/* Design original do perfil */
.user-profile {
  color: white;
  font-family: 'Poppins', sans-serif;
  max-width: 900px;
  margin: auto;
  padding: 20px;
  background-color: #121212;
  border-radius: 12px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.6);
}

.profile-header {
  text-align: center;
  margin-bottom: 40px;
}

.profile-picture {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  color: #ccc;
}

.section {
  margin-bottom: 40px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #0077a1;
}

.events-list,
.merch-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.event-card,
.merch-item {
  background: #002933;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
}

.event-card h3,
.merch-item h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff;
}

.event-card p,
.merch-item p {
  font-size: 1.1rem;
  color: #ccc;
}

.edit-profile {
  text-align: center;
  margin-top: 20px;
}

button {
  background-color: #0077a1;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

button:hover {
  background-color: #005f7f;
}

/* Estilos do modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #121212;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  width: 400px;
  text-align: center;
}

.modal-content label {
  display: block;
  margin-bottom: 10px;
  color: #ccc;
}

.modal-content input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #f8fafc;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.save-button {
  background: #2ae604;
}

.cancel-button {
  background: #e74c3c;
}
</style>
