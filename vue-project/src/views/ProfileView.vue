<script setup>
import { computed, watchEffect } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { useUserStore } from '@/stores/user';
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';


const authStore = useAuthStore();
const userStore = useUserStore();

const loggedInUser = computed(() => {
  if (authStore.isAuthenticated) {
    return userStore.users.find((user) =>
      user.email === (authStore.userRole === "admin" ? "admin@gmail.com" : "user@gmail.com")
    );
  }
  return null;
});

// Redireciona se não autenticado
watchEffect(() => {
  if (!authStore.isAuthenticated) {
    alert("Please Login before entering this page");
    window.location.href = "/login";
  }
});
</script>


<template>
  <Navbar />
  <br>

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

    <div class="edit-profile">
      <button>Edit Profile</button>
    </div>
  </div>

  <Footer />
</template>


<style scoped>
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

button:focus {
  outline: none;
}

button:active {
  background-color: #004a61;
}
</style>
