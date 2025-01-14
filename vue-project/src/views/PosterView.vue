<script setup>
import { ref } from 'vue';
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import CarouselPoster from '@/components/CarouselPoster.vue';
import SecondaryCarousel from '@/components/SecondaryCarousel.vue';
import ButtonPoster from '@/components/ButtonPoster.vue';
import { useEventStore } from '@/stores/event';

const activeDay = ref('10 Jun');

const content = {
    "10 Jun": [
        { image: "/src/assets/coldplay.jpg", caption: "COLDPLAY" },
        { image: "/src/assets/cash.jpg", caption: "CASH COBAIN" },
        { image: "/src/assets/luh.jpg", caption: "LUH TYLER" },
        { image: "/src/assets/twenty.jpg", caption: "TWENTY ONE PILOTS" },
        { image: "/src/assets/Ed.jpg", caption: "ED SHEERAN" },
    ],
    "11 Jun": [
        { image: "/src/assets/luh.jpg", caption: "LUH TYLER" },
        { image: "/src/assets/twenty.jpg", caption: "TWENTY ONE PILOTS" },
    ],
    "12 Jun": [
        { image: "/src/assets/Ed.jpg", caption: "ED SHEERAN" },
        { image: "/src/assets/pupil.jpg", caption: "PUPIL SLICER" },
    ],
};

const secondaryContent = {
    "10 Jun": [
        { image: "/src/assets/danni.jpg", caption: "DJ DANNI GATO" },
        { image: "/src/assets/djfifty.jpg", caption: "DJ FIFTY" },
        { image: "/src/assets/bispo.jpg", caption: "BISPO" },
        { image: "/src/assets/skrillex.jpg", caption: "SKRILLEX" },
        { image: "/src/assets/djboring.jpg", caption: "DJ BORING" },
        { image: "/src/assets/kappa.jpg", caption: "KAPPA J" },
    ],
    "11 Jun": [
        { image: "/src/assets/secondary3.jpg", caption: "THE STRANGERS" },
        { image: "/src/assets/secondary4.jpg", caption: "HOUSE GROOVE" },
    ],
    "12 Jun": [
        { image: "/src/assets/secondary5.jpg", caption: "THE BEATS" },
        { image: "/src/assets/secondary6.jpg", caption: "SUNSET TUNES" },
    ],
};

const setActiveDay = (day) => {
    activeDay.value = day;
};
</script>


<template>
    <Navbar />

    <div>

        <ButtonPoster :content="content" :activeDay="activeDay" @setActiveDay="setActiveDay" />


        <h1>MAIN STAGE</h1>
        <CarouselPoster :content="content" :activeDay="activeDay" />


        <h1>SECONDARY STAGE</h1>
        <SecondaryCarousel :secondaryContent="secondaryContent" :activeDay="activeDay" />
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