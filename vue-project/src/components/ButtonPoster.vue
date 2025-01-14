<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  content: Object,
  activeDay: String,
});

const emit = defineEmits(['setActiveDay']);
const setActiveDay = (day) => {
  emit('setActiveDay', day);
};
</script>



<template>
  <div class="button-container">
    <button v-for="day in Object.keys(content)" :key="day" class="date-button"
      :class="{ active: activeDay === day }" @click="setActiveDay(day)">
      {{ day }}
    </button>
  </div>
</template>



<style scoped>
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

  
  
  <style scoped>
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
  