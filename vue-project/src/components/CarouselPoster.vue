<script setup>
import { defineProps, computed, ref, defineEmits } from 'vue';
import { useEventStore } from '@/stores/event';
import { useArtistStore } from '@/stores/artist';

const props = defineProps({
  activeDay: String,  // Active day is passed from the parent component
});

const emit = defineEmits(['setActiveDay']); // Emit event when day is selected

// Access the stores
const eventStore = useEventStore();
const artistStore = useArtistStore();

// Methods for changing days
const setActiveDay = (day) => {
  emit('setActiveDay', day);
};

// Get the event for the active day
const activeEvent = computed(() => {
  return eventStore.event.find(event => event.day === parseInt(props.activeDay));
});

// Main Stage Artists
const mainStageArtists = computed(() => {
  return activeEvent.value ? activeEvent.value.lineup.mainStage : [];
});

// Secondary Stage Artists
const secondaryStageArtists = computed(() => {
  return activeEvent.value ? activeEvent.value.lineup.secondaryStage : [];
});

// Carousel Scroll Logic
const carousel = ref(null);
const secondaryCarousel = ref(null);

const scrollLeft = () => {
  carousel.value.scrollBy({ left: -carousel.value.offsetWidth, behavior: "smooth" });
};

const scrollRight = () => {
  carousel.value.scrollBy({ left: carousel.value.offsetWidth, behavior: "smooth" });
};

const scrollLeftSecondary = () => {
  secondaryCarousel.value.scrollBy({ left: -secondaryCarousel.value.offsetWidth, behavior: "smooth" });
};

const scrollRightSecondary = () => {
  secondaryCarousel.value.scrollBy({ left: secondaryCarousel.value.offsetWidth, behavior: "smooth" });
};
</script>

<template>
  <div>
    <!-- Day Selection Buttons -->
    <div class="button-container">
      <button v-for="day in ['11', '12', '13']" :key="day" class="date-button"
        :class="{ active: props.activeDay === day }" @click="setActiveDay(day)">
        {{ day }} Jun
      </button>
    </div>

    <!-- Main Stage Carousel -->
    <h1>MAIN STAGE</h1>
    <div class="carousel-wrapper">
      <button class="carousel-button left" @click="scrollLeft">‹</button>

      <div class="carousel" ref="carousel">
        <div class="carousel-item" v-for="(artist, index) in mainStageArtists" :key="index">
          <img :src="artist.image" alt="Artist Image" class="carousel-image" />
          <div class="carousel-caption">{{ artist.name }}</div>
        </div>
      </div>

      <button class="carousel-button right" @click="scrollRight">›</button>
    </div>

    <!-- Secondary Stage Carousel -->
    <h1>SECONDARY STAGE</h1>
    <div class="small-carousel-wrapper">
      <button class="carousel-button left" @click="scrollLeftSecondary">‹</button>

      <div class="small-carousel" ref="secondaryCarousel">
        <div class="small-carousel-item" v-for="(artist, index) in secondaryStageArtists" :key="index">
          <img :src="artist.image" alt="Artist" class="small-card-image" />
          <div class="small-card-caption">{{ artist.name }}</div>
        </div>
      </div>

      <button class="carousel-button right" @click="scrollRightSecondary">›</button>
    </div>
  </div>
</template>

<style scoped>
/* Button styles */
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

/* Carousel styles */
.carousel-wrapper, .small-carousel-wrapper {
  position: relative;
  margin: 30px auto;
  max-width: 90%;
  overflow: hidden;
}

.carousel, .small-carousel {
  display: flex;
  gap: 20px;
  scroll-behavior: smooth;
  overflow-x: auto;
  padding: 10px 0;
}

.carousel::-webkit-scrollbar, .small-carousel::-webkit-scrollbar {
  display: none;
}

.carousel-item, .small-carousel-item {
  flex: 0 0 auto;
  width: 100%;
  max-width: 900px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.carousel-image, .small-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-caption, .small-card-caption {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
}

/* Button for carousel navigation */
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
</style>
