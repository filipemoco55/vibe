<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import CarouselPoster from '@/components/CarouselPoster.vue';
import { useEventStore } from '@/stores/event';
import { useArtistStore } from '@/stores/artist';

const activeDay = ref(11);
const isLoading = ref(true);  // Loading state

const setActiveDay = (day) => {
    activeDay.value = day;
};

onMounted(async () => {
    const artistStore = useArtistStore();
    const eventStore = useEventStore();

    await artistStore.fetchArtists(); // Fetch artist data
    await eventStore.initializeLineups(); // Initialize lineups with fetched artists

    isLoading.value = false; // Stop loading after data is fetched and lineups are initialized
});


</script>

<template>
    <Navbar />

    <div v-if="isLoading">Loading artists...</div> <!-- Show loading message -->

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
</style>
