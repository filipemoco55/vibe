<script setup>
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Navbar />

  <div class="video-container">
    <video autoplay muted loop playsinline class="background-video">
      <source src="/src/assets/video.mp4" type="video/mp4" />
    </video>
    <router-link to="/tickets" class="buy-button">Tickets</router-link>
  </div>


  <h1>More Upcoming Artists</h1>

  <Footer></Footer>
</template>

<style scoped>
.video-container {
  position: relative;
  overflow: hidden;
  height: 100%px;
  max-width: 100%;
}

.background-video {
  width: 100%;
  height: 100%;
}

h1 {
  font-family: 'Poppins', sans-serif;
  color: white;
  margin-top: 50px;
  margin-left: 100px;
  font-weight: bold;
  font-size: 40px;
}

.event-card {
  text-align: center;
  font-weight: bold;
  color: white;
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 1300px;
  margin: 10px auto;
}

.event-image {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.event-image img {
  width: 100%;
  display: block;
  height: auto;
}

.event-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  text-align: justify;
}

.event-title {
  font-size: 50px;
  margin-bottom: 320px;
  line-height: 3;
}

.buy-button {
  background-color: #0088ccb9;
  color: rgb(255, 255, 255);
  border: none;
  padding: 15px 60px;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: bold;
  transition: background-color 0.8s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 90%;
  right: 1%;
}

.buy-button:hover {
  background-color: #003b57;
  opacity: 0.7;
}
</style>
