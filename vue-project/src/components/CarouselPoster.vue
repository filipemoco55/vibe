<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  content: Object,
  activeDay: String,
});

const carousel = ref(null);

const scrollLeft = () => {
  carousel.value.scrollBy({ left: -carousel.value.offsetWidth, behavior: "smooth" });
};

const scrollRight = () => {
  carousel.value.scrollBy({ left: carousel.value.offsetWidth, behavior: "smooth" });
};
</script>

<template>
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
</template>



<style scoped>
.carousel-wrapper {
  position: relative;
  margin: 30px auto;
  max-width: 90%;
  overflow: hidden;
}

.carousel {
  display: flex;
  gap: 20px;
  scroll-behavior: smooth;
  overflow-x: auto;
  padding: 10px 0;
}

.carousel::-webkit-scrollbar {
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

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-caption {
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
</style>
