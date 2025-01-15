<template>
  <Navbar />

  <!-- Popular Artists Section -->
  <MusicComponent 
      title="Popular Artists!" 
      :items="artists" 
  />

  <Footer />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useArtistStore } from '@/stores/artist'; // Import the artist store
import Navbar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import MusicComponent from "@/components/MusicComponent.vue"; // The component displaying the artists

// Initialize artist data
const artistStore = useArtistStore();
const artists = ref([]);

// Fetch artist data when the component is mounted
onMounted(async () => {
  await artistStore.fetchArtists(); // Fetch the artists using the store
  artists.value = artistStore.artists; // Populate the artists reference with the fetched data
});
</script>
