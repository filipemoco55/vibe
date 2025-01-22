<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import CarouselPoster from '@/components/CarouselPoster.vue';
import { useEventStore } from '@/stores/event';
import { useArtistStore } from '@/stores/artist';

// State variables
const activeDay = ref(11);
const isLoading = ref(true);
const hasError = ref(false);

const setActiveDay = (day) => {
    activeDay.value = day;
};

// Fetch data when the component is mounted
onMounted(async () => {
    const artistStore = useArtistStore();
    const eventStore = useEventStore();

    try {
        await artistStore.fetchArtists();  // Fetch artists
        await eventStore.initializeLineups();  // Fetch event lineups
        if (artistStore.artists.length === 0) {
            hasError.value = true;  // Set error flag    
        }
    } catch (error) {
        console.error('Error loading data:', error);
        hasError.value = true;  // Set error flag
    } finally {
        isLoading.value = false;  // Hide the loading spinner
    }
});
</script>

<template>
    <Navbar />

    <!-- Loading Spinner -->
    <div v-if="isLoading" class="spinner-wrapper">
        <div class="spinner"></div>
        <p>Loading artists and events...</p>
    </div>

    <!-- Error Message -->
    <div v-else-if="hasError" class="error-wrapper">
        <h2>Oops! Something went wrong.</h2>
        <p>We’re experiencing technical difficulties. Please try again later.</p>
        <p>If the issue persists, contact our support team.</p>
        <img src="@/assets/server-error.png" alt="Server Error" class="error-image" />
    </div>

    <!-- Main Content -->
    <div v-else>
        <CarouselPoster :activeDay="activeDay" @setActiveDay="setActiveDay" />
    </div>

    <Footer />
</template>

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
    /* Center vertically */
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
    height: 70vh; /* Center vertically */
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


</style>
