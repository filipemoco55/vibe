<template>
  <Navbar />

  <div v-if="isLoading" class="loader-container">
    <div class="loader"></div>
  </div>
  <div v-else-if="hasError" class="error-container">
    <p class="error-message">The server is offline or data could not be loaded. Please try again later.</p>
  </div>
  <div v-else-if="artists.length === 0" class="no-data-container">
    <p class="no-data-message">No artists available at the moment. Check back later!</p>
  </div>
  <div v-else>
    <MusicComponent 
      title="Popular Artists!" 
      :items="artists" 
    />
  </div>

  <Footer />
</template>



<script setup>
import { onMounted, ref } from 'vue';
import { useArtistStore } from '@/stores/artist';
import Navbar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import MusicComponent from "@/components/MusicComponent.vue";

const artistStore = useArtistStore();
const artists = ref([]);
const isLoading = ref(true);
const hasError = ref(false);

onMounted(async () => {
  isLoading.value = true;
  hasError.value = false;

  try {
    await artistStore.fetchArtists();
    artists.value = artistStore.artists;

    if (!artists.value.length) {
      console.warn("No artists data received.");
    }
  } catch (error) {
    console.error("Error fetching artists:", error);
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
});
</script>


<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

.error-container,
.no-data-container {
  text-align: center;
  padding: 50px 20px;
}

.error-message {
  color: red;
  font-size: 18px;
  font-weight: bold;
}

.no-data-message {
  color: gray;
  font-size: 16px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
