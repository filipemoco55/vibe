<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  secondaryContent: Object,
  activeDay: String,
});

const secondaryCarousel = ref(null);

const scrollLeftSecondary = () => {
  secondaryCarousel.value.scrollBy({ left: -secondaryCarousel.value.offsetWidth, behavior: "smooth" });
};

const scrollRightSecondary = () => {
  secondaryCarousel.value.scrollBy({ left: secondaryCarousel.value.offsetWidth, behavior: "smooth" });
};
</script>


<template>
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
</template>


<style scoped>
.small-carousel-wrapper {
  position: relative;
  margin: 30px auto;
  max-width: 90%;
  overflow: hidden;
}

.small-carousel {
  display: flex;
  gap: 20px;
  scroll-behavior: smooth;
  overflow-x: auto;
  padding: 10px 0;
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

.small-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
