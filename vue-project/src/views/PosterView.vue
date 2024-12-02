<script setup>
import Navbar from '@/components/NavBar.vue';

</script>

<template>
    <Navbar />

    <div>
        <div class="button-container">
            <RouterLink to="/Poster" class="date-button">
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
        <div class="carousel-wrapper">
            <button class="carousel-button left" @click="scrollLeft">‹</button>

            <div class="carousel" ref="carousel">
                <div class="carousel-item" v-for="(item, index) in items" :key="index">
                    <img :src="item.image" alt="Concert Image" class="carousel-image" />
                    <div class="carousel-caption">{{ item.caption }}</div>
                </div>
            </div>

            <button class="carousel-button right" @click="scrollRight">›</button>
        </div>

        <h1>SECONDARY STAGE</h1>

        <div class="small-carousel-wrapper">
            <button class="carousel-button left" @click="scrollLeftSmall">‹</button>

            <div class="small-carousel" ref="smallCarousel">
                <div class="small-carousel-item" v-for="(item, index) in smallItems" :key="index">
                    <div class="small-card">
                        <img :src="item.image" alt="Artist" class="small-card-image" />
                        <div class="small-card-caption">{{ item.caption }}</div>
                    </div>
                </div>
            </div>

            <button class="carousel-button right" @click="scrollRightSmall">›</button>
        </div>
    </div>

</template>

<script>
export default {
    name: "MainPage",
    data() {
        return {
            items: [
                { image: "/src/assets/coldplay.jpg", caption: "COLDPLAY" },
                { image: "/src/assets/cash.jpg", caption: "CASH COBAIN" },
                { image: "/src/assets/luh.jpg", caption: "LUH TYLER" },
                { image: "/src/assets/twenty.jpg", caption: "TWENTY ONE PILOTS" },
                { image: "/src/assets/Ed.jpg", caption: "ED SHEERAN" },
            ],
            smallItems: [
                { image: "/src/assets/pupil.jpg", caption: "PUPIL SLICER" },
                { image: "/src/assets/djboring.jpg", caption: "DJ BORING" },
                { image: "/src/assets/nervo.jpg", caption: " DJ NERVO" },
                { image: "/src/assets/third.jpg", caption: "THIRD PARTY" },
                { image: "/src/assets/danni.jpg", caption: "DANNI GATO" },
                { image: "/src/assets/bispo.jpg", caption: "BISPO" },
                { image: "/src/assets/kappa.jpg", caption: "KAPPA JOTTA" },
                { image: "/src/assets/skrillex.jpg", caption: "SKRILLEX" },
                { image: "/src/assets/djfifty.jpg", caption: "DJ FIFTY" },
            ],
        };
    },
    methods: {

        scrollLeft() {
            const carousel = this.$refs.carousel;
            carousel.scrollBy({ left: -carousel.offsetWidth, behavior: "smooth" });
        },
        scrollRight() {
            const carousel = this.$refs.carousel;
            carousel.scrollBy({ left: carousel.offsetWidth, behavior: "smooth" });
        },

        scrollLeftSmall() {
            const smallCarousel = this.$refs.smallCarousel;
            smallCarousel.scrollBy({ left: -smallCarousel.offsetWidth, behavior: "smooth" });
        },
        scrollRightSmall() {
            const smallCarousel = this.$refs.smallCarousel;
            smallCarousel.scrollBy({ left: smallCarousel.offsetWidth, behavior: "smooth" });
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
