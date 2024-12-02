<script setup>
import Navbar from '@/components/NavBar.vue';
</script>


<template>
    <Navbar />

    <div class="button-container">
        <RouterLink to="/Poster" class="date-button" >
            10 Jun
        </RouterLink>

        <RouterLink to="/Poster2" class="date-button">
            11 Jun
        </RouterLink>
        
        <RouterLink to="/Poster3" class="date-button">
            12 Jun
        </RouterLink>
    </div>
    <h1>MAIN STAGE</h1>
</template>

<script>
import { useRoute } from "vue-router";

export default {
    name: "DateButtons",
    setup() {
        const route = useRoute();
        return {
            currentRoute: route.path,
        };
    },
};
</script>

<style>

h1 {
    font-family: 'Poppins', sans-serif;
    color: white;
    margin-top: 50px;
    margin-left: 100px;
    font-weight: bold;
    font-size: 40px;
}

.button-container {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    gap: 70px;
    padding: 15px;
}


.date-button {
    display: inline-flex;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    justify-content: center;
    border: none;
    border-radius: 12px;
    height: 70px;
    width: 300px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    color: #0077a1;
    background-color: white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
}


.date-button.active {
    background-color: #002933;
    color: white;
}


.date-button:hover {
    transform: scale(1.05);
}
</style>