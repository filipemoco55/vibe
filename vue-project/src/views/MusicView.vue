<template>
  <Navbar />

  <!-- Search and Filter Inputs -->
  <div class="filter-section">
    <input 
      type="text" 
      placeholder="Search by artist name..." 
      v-model="searchQuery" 
      @input="filterArtistsByName"
      class="text-input"
    />

    <select 
      v-model="selectedGenre" 
      @change="filterArtistsByGenre" 
      class="dropdown"
    >
      <option value="">All Genres</option>
      <option v-for="genre in genres" :key="genre" :value="genre">
        {{ genre }}
      </option>
    </select>
  </div>

  <div v-if="isLoading" class="spinner-wrapper">
    <div class="spinner"></div>
    <p>Loading Music...</p>
  </div>

  <!-- Error Message -->
  <div v-else-if="hasError" class="error-wrapper">
    <h2>Oops! Something went wrong.</h2>
    <p>We’re experiencing technical difficulties. Please try again later.</p>
    <p>If the issue persists, contact our support team.</p>
    <img src="@/assets/server-error.png" alt="Server Error" class="error-image" />
  </div>

  <div v-else>
    <MusicComponent title="Popular Artists!" :items="filteredArtists" />
  </div>

  <Footer />
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useArtistStore } from '@/stores/artist';
import Navbar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import MusicComponent from "@/components/MusicComponent.vue";

const artistStore = useArtistStore();
const artists = ref([]);
const isLoading = ref(true);
const hasError = ref(false);
const searchQuery = ref("");
const selectedGenre = ref("");
const genres = ref([]);

const filteredArtists = computed(() => {
  let filtered = artists.value;

  if (searchQuery.value) {
    filtered = filtered.filter((artist) =>
      artist.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  if (selectedGenre.value) {
    filtered = filtered.filter((artist) =>
      artist.genre.toLowerCase() === selectedGenre.value.toLowerCase()
    );
  }

  return filtered;
});

onMounted(async () => {
  isLoading.value = true;
  hasError.value = false;

  try {
    await artistStore.fetchArtists();
    artists.value = artistStore.artists;

    // Extract unique genres
    genres.value = [...new Set(artists.value.map((artist) => artist.genre))];

    if (!artists.value.length) {
      console.warn("No artists data received.");
      hasError.value = true;
    }
  } catch (error) {
    console.error("Error fetching artists:", error);
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
});

const filterArtistsByName = () => {
  // Computed property handles the filtering
};

const filterArtistsByGenre = () => {
  // Computed property handles the filtering
};
</script>


<style scoped>
h1 {
    font-family: 'Poppins', sans-serif;
    color: white;
    margin-top: 50px;
    margin-left: 100px;
    font-weight: bold;
    font-size: 40px;
}

.spinner-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    text-align: center;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(255, 255, 255, 0.3);
    border-top: 5px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 10px;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.error-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 70vh; 
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
}

.error-wrapper h2 {
    font-size: 28px;
    margin-bottom: 10px;
}

.error-wrapper p {
    margin: 5px 0;
}

.error-image {
    width: 200px;
    margin-top: 20px;
    opacity: 0.8;
}
.filter-section {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}

.text-input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  outline: none;
  font-family: 'Poppins', sans-serif;
  width: 250px;
}

.text-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.dropdown {
  padding: 10px;
  font-size: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  outline: none;
  font-family: 'Poppins', sans-serif;
  width: 200px;
}
</style>
