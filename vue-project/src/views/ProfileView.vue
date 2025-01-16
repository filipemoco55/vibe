<script setup>
import { ref } from 'vue';
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

const user = ref({
  name: 'John Doe',
  email: 'johndoe@example.com',
  profilePicture: '/profile-placeholder.jpg',
  events: [
    { id: 1, name: 'Vibe Music Festival - Day 1', date: '11 June 2025', location: 'Porto, Portugal' },
    { id: 2, name: 'Vibe Music Festival - Day 2', date: '12 June 2025', location: 'Porto, Portugal' },
  ],
  merch: [
    { id: 1, name: 'Vibe White Tshirt', size: 'L', price: 40 },
    { id: 2, name: 'Vibe Black Tshirt', size: 'M', price: 40 },
  ],
});
</script>

<template>
  <Navbar />

  <div class="user-profile">
    <div class="profile-header">
      <img :src="user.profilePicture" alt="Profile Picture" class="profile-picture" />
      <h1>{{ user.name }}</h1>
      <p>{{ user.email }}</p>
    </div>

    <div class="section">
      <h2>Upcoming Events</h2>
      <div v-if="user.events.length > 0" class="events-list">
        <div class="event-card" v-for="event in user.events" :key="event.id">
          <h3>{{ event.name }}</h3>
          <p>Date: {{ event.date }}</p>
          <p>Location: {{ event.location }}</p>
        </div>
      </div>
      <p v-else>No upcoming events.</p>
    </div>

    <!-- Merch Purchased Section -->
    <div class="section">
      <h2>Purchased Merch</h2>
      <div v-if="user.merch.length > 0" class="merch-list">
        <div class="merch-item" v-for="item in user.merch" :key="item.id">
          <h3>{{ item.name }}</h3>
          <p>Size: {{ item.size }}</p>
          <p>Price: ${{ item.price }}</p>
        </div>
      </div>
      <p v-else>No merch purchased yet.</p>
    </div>

    <!-- Edit Profile Button -->
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
