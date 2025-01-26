<script setup>
import { defineProps, computed, ref, defineEmits, onMounted } from 'vue';
import { useEventStore } from '@/stores/event';
import { useArtistStore } from '@/stores/artist';

const props = defineProps({
  activeDay: String,
});

const emit = defineEmits(['setActiveDay']);

const eventStore = useEventStore();
const artistStore = useArtistStore();

const setActiveDay = (day) => {
  emit('setActiveDay', day);
};

const activeEvent = computed(() => {
  return eventStore.event.find(event => event.day === parseInt(props.activeDay));
});

const mainStageArtists = computed(() => {
  return activeEvent.value ? activeEvent.value.lineup.mainStage : [];
});

const secondaryStageArtists = computed(() => {
  return activeEvent.value ? activeEvent.value.lineup.secondaryStage : [];
});

const carousel = ref(null);
const secondaryCarousel = ref(null);


const scrollLeft = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: -carousel.value.clientWidth, behavior: "smooth" });
  } else {
    console.error("Carousel principal não encontrado.");
  }
};

const scrollRight = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: carousel.value.clientWidth, behavior: "smooth" });
  } else {
    console.error("Carousel principal não encontrado.");
  }
};

const scrollLeftSecondary = () => {
  if (secondaryCarousel.value) {
    secondaryCarousel.value.scrollBy({ left: -secondaryCarousel.value.clientWidth, behavior: "smooth" });
  } else {
    console.error("Carousel secundário não encontrado.");
  }
};

const scrollRightSecondary = () => {
  if (secondaryCarousel.value) {
    secondaryCarousel.value.scrollBy({ left: secondaryCarousel.value.clientWidth, behavior: "smooth" });
  } else {
    console.error("Carousel secundário não encontrado.");
  }
};

// Verificar referências ao montar
onMounted(() => {
  if (!carousel.value) {
    console.error("Referência para o carrossel principal está ausente.");
  }
  if (!secondaryCarousel.value) {
    console.error("Referência para o carrossel secundário está ausente.");
  }
});
</script>



<template>
  <div>
    <div class="button-container">
      <button v-for="day in ['11', '12', '13']" :key="day" class="date-button"
        :class="{ active: props.activeDay === day }" @click="setActiveDay(day)">
        {{ day }} Jun
      </button>
    </div>

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
.button-container {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 15px;
  flex-wrap: wrap;
}

.date-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 30px;
  height: 60px;
  width: 200px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: #005f7a;
  background: linear-gradient(135deg, #e3f6fd, #ffffff);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
}

.date-button.active {
  background: linear-gradient(135deg, #004e62, #006d88);
  color: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
}

.date-button:hover {
  transform: scale(1.1);
}

.carousel-wrapper,
.small-carousel-wrapper {
  position: relative;
  margin: 40px auto;
  max-width: 90%;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}

.carousel,
.small-carousel {
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  gap: 15px;
  padding: 10px;
}

.carousel::-webkit-scrollbar,
.small-carousel::-webkit-scrollbar {
  display: none;
}

.carousel-item,
.small-carousel-item {
  flex: 0 0 auto;
  width: 500px;
  margin-left: 30px;
  height: 500px;
  max-width: 500px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background-color: #f0f4f8;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.carousel-item:hover,
.small-carousel-item:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.carousel-image,
.small-card-image {
  width: 100%;
  gap: 50px;
  height: 500px;
  border-radius: 15px 15px 0 0;
  object-fit: cover;
}

.carousel-caption,
.small-card-caption {
  position: absolute;
  bottom: 10px;
  left: 15px;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.8);
  padding: 10px 15px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, #005f7a, #0077a1);
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  font-size: 2rem;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.carousel-button.left {
  left: 15px;
}

.carousel-button.right {
  right: 15px;
}

.carousel-button:hover {
  background: linear-gradient(135deg, #004e62, #005f7a);
  transform: scale(1.1);
}

h1 {
  font-family: 'Poppins', sans-serif;
  color: white;
  margin-top: 50px;
  font-weight: bold;
  font-size: 40px;
}
</style>