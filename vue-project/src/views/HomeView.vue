<script setup>
import Navbar from '@/components/NavBar.vue';
</script>

<template>
   <Navbar/>
   <p>
    Home
   </p>
</template>

<style scoped>

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #004f6f;
}

.nav a {
    margin: 0 1rem;
    color: white;
    text-decoration: none;
}

.account-button {
    padding: 0.5rem 1rem;
    background-color: white;
    color: #004f6f;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.upcoming-artists {
    margin: 2rem;
    text-align: center;
}

.artist-cards {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.artist-card {
    background-color: #005a7a;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    width: 150px;
}

.artist-card img {
    width: 100%;
    border-radius: 50%;
}

.artist-card p {
    margin-top: 0.5rem;
}
</style>