<script setup>
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Navbar />

  <div class="event-card">
    <div class="event-image">
      <img src="/src/assets/foto exemplo.png" alt=Event Background>
      <div class="event-overlay">
        <h2 class="event-title">Come watch Coldplay and much more this summer</h2>
        <button class="buy-button">BUY NOW</button>
      </div>
    </div>
  </div>

  <h1>More Upcoming Artists</h1>

  <Footer></Footer>
</template>


<script>
export default {
  name: "EventCard",
};
</script>


<style>
h1 {
  font-family: 'Poppins', sans-serif;
  color: white;
  margin-top: 40px;
  margin-left: 100px;
  font-weight: bold;
  font-size: 50px;
}

h3 {
  font-family: 'Poppins', sans-serif;
  color: white;
  margin: 30px;
  font-weight: bold;
  font-size: 30px;
}

h2 {
  color: white;
  font-weight: bold;
}

.event-card {
  text-align: center;
  font-weight: Bold;
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

.event-details {
  font-size: 1em;
  margin-bottom: 20px;
}

.buy-button {
  background-color: #0088ccb9;
  color: rgb(255, 255, 255);
  border: none;
  padding: 15px 50px;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: bold;
  transition: background-color 0.8s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 1100px;
  bottom: 20px;
}

.buy-button:hover {
  background-color: #003b57;
  opacity: 0.7
}

</style>