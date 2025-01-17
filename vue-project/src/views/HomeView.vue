<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import { useArtistStore } from '@/stores/artist';

// Countdown component (from the code you provided)
const targetDate = new Date("2025-11-11T18:00:00"); // Target date for countdown
const countdown = ref({
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

// Function to update countdown
const updateCountdown = () => {
  const now = new Date();
  const diffInMs = targetDate - now;

  if (diffInMs <= 0) {
    // Countdown finished
    countdown.value = { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    return;
  }

  const totalSeconds = Math.floor(diffInMs / 1000);
  const months = Math.floor(totalSeconds / (30 * 24 * 3600)); // Approximate months
  const days = Math.floor((totalSeconds % (30 * 24 * 3600)) / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  countdown.value = { months, days, hours, minutes, seconds };
};


const artistStore = useArtistStore();
const artists = ref([]);


onMounted(() => {
  artistStore.fetchArtists();
  artists.value = artistStore.artists.slice(0, 6); // Get the first 6 artists
  setInterval(updateCountdown, 1000); // Update countdown every second
});
</script>

<template>
  <Navbar />

  <!-- Hero Section with Background Video -->
  <div class="hero-container">
    <div class="hero-overlay">
      <h1 class="hero-title">Welcome to Vibe Concert</h1>
      <router-link to="/profile" class="buy-button">Buy your Ticket Now!</router-link>
    </div>
    <video autoplay muted loop playsinline class="background-video">
      <source src="/src/assets/video.mp4" type="video/mp4" />
    </video>
  </div>

  <!-- Countdown Section -->
  <div class="countdown-section">
    <div class="countdown-timer">
      <div><strong>{{ countdown.months }}</strong> Months</div>
      <div><strong>{{ countdown.days }}</strong> Days</div>
      <div><strong>{{ countdown.hours }}</strong> Hours</div>
      <div><strong>{{ countdown.minutes }}</strong> Minutes</div>
      <div><strong>{{ countdown.seconds }}</strong> Seconds</div>
    </div>
  </div>

  <!-- Artists Section -->
  <section class="artists-section">
    <h1>More Upcoming Artists</h1>
    <div class="artist-grid">
      <div v-for="artist in artists" :key="artist.id" class="artist-card">
        <img :src="artist.image" alt="Artist Image" class="artist-image" />
        <h2>{{ artist.name }}</h2>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style scoped>
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  color: white;
  background-color: #121212;
}

h1 {
  font-weight: bold;
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 0;
}

.hero-container {
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(45, 45, 45, 0.8));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
}

.buy-button {
  background-color: #00aaff;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  opacity: 0.9;
}

.buy-button:hover {
  background-color: #0077cc;
  transform: scale(1.05);
}

.countdown-section {
  padding: 2rem;
  text-align: center;
  background: #121212;
  color: white;
}

.countdown-timer {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  color: white;
  font-size: 1.5rem;
}

.artists-section {
  padding: 2rem;
}

.artist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.artist-card {
  background: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease;
}

.artist-card:hover {
  transform: translateY(-10px);
}

.artist-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.artist-card h2 {
  margin: 1rem 0;
  color: white;
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .buy-button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }

  .artist-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.5rem;
  }

  .buy-button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .artist-image {
    height: 200px;
  }
}
</style>
