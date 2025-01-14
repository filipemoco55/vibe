<script setup>
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Navbar />

  <!-- Hero Section with Video Background -->
  <div class="video-container">
    <div class="video-overlay">
      <h1 class="hero-title">Welcome to Vibe Concert</h1>
      <router-link to="/tickets" class="buy-button">Buy your Ticket Now!</router-link>
    </div>
    <video autoplay muted loop playsinline class="background-video">
      <source src="/src/assets/video.mp4" type="video/mp4" />
    </video>
  </div>

  <!-- Upcoming Artists Section -->
  <section class="artists-section">
    <h1>More Upcoming Artists</h1>
    <div class="artist-grid">
      <div v-for="artist in 6" :key="artist" class="artist-card">
        <h2>Artista {{ artist }}</h2>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style scoped>
/* General Styles */
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


.video-container {
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

.video-overlay {
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

/* Artists Section */
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

/* Responsiveness */
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