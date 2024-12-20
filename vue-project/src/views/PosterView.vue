<script setup>
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';
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
        <div class="button-container">
            <button v-for="day in Object.keys(content)" :key="day" class="date-button"
                :class="{ active: activeDay === day }" @click="setActiveDay(day)">
                {{ day }}
            </button>
        </div>

        <h1>MAIN STAGE</h1>
        <div class="carousel-wrapper">
            <button class="carousel-button left" @click="scrollLeft">‹</button>

            <div class="carousel" ref="carousel">
                <div class="carousel-item" v-for="(item, index) in content[activeDay]" :key="index">
                    <img :src="item.image" alt="Concert Image" class="carousel-image" />
                    <div class="carousel-caption">{{ item.caption }}</div>
                </div>
            </div>

            <button class="carousel-button right" @click="scrollRight">›</button>
        </div>

        <h1>SECONDARY STAGE</h1>
        <div class="small-carousel-wrapper">
            <button class="carousel-button left" @click="scrollLeftSecondary">‹</button>

            <div class="small-carousel" ref="secondaryCarousel">
                <div class="small-carousel-item" v-for="(item, index) in secondaryContent[activeDay]" :key="index">
                    <img :src="item.image" alt="Artist" class="small-card-image" />
                    <div class="small-card-caption">{{ item.caption }}</div>
                </div>
            </div>

            <button class="carousel-button right" @click="scrollRightSecondary">›</button>
        </div>
    </div>

    <Footer />

</template>

<script>
export default {
    name: "MainPage",
    methods: {
        scrollLeft() {
            const carousel = this.$refs.carousel;
            carousel.scrollBy({ left: -carousel.offsetWidth, behavior: "smooth" });
        },
        scrollRight() {
            const carousel = this.$refs.carousel;
            carousel.scrollBy({ left: carousel.offsetWidth, behavior: "smooth" });
        },
        scrollLeftSecondary() {
            const secondaryCarousel = this.$refs.secondaryCarousel;
            secondaryCarousel.scrollBy({ left: -secondaryCarousel.offsetWidth, behavior: "smooth" });
        },
        scrollRightSecondary() {
            const secondaryCarousel = this.$refs.secondaryCarousel;
            secondaryCarousel.scrollBy({ left: secondaryCarousel.offsetWidth, behavior: "smooth" });
        },
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


h3 {
    font-family: 'Poppins', sans-serif;
    color: white;
    margin: 30px;
    font-weight: bold;
    font-size: 40px;
}

.carousel-wrapper,
.small-carousel-wrapper {
    position: relative;
    margin: 30px auto;
    max-width: 90%;
    overflow: hidden;
}

.carousel,
.small-carousel {
    display: flex;
    gap: 20px;
    scroll-behavior: smooth;
    overflow-x: auto;
    padding: 10px 0;
}

.carousel::-webkit-scrollbar,
.small-carousel::-webkit-scrollbar {
    display: none;
}

.carousel-item {
    flex: 0 0 auto;
    width: 100%;
    max-width: 900px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
}

.carousel-image,
.small-card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.carousel-caption,
.small-card-caption {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
}

.carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    font-size: 1.5rem;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
}

.carousel-button.left {
    left: 10px;
}

.carousel-button.right {
    right: 10px;
}

.carousel-button:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

.small-carousel-item {
    flex: 0 0 auto;
    width: 340px;
    height: 250px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    margin: 0 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.small-card {
    position: relative;
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
    background-color: #f0f0f0;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.small-card-caption {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
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