<template>
  <div class="cards-section">
    <h1>Popular Artist</h1>
    <br />
    <div class="cards-container">
      <div class="card" v-for="(item, index) in items" :key="index" @click="playAudio(item.preview)">
        <img :src="item.image" :alt="item.name" />
        <div class="play-icon">▶</div>
        <div class="text-overlay">
          <p class="name">{{ item.name }}</p>
          <p class="role">{{ item.genre }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentAudio = ref(null);


const playAudio = (audioPath) => {
  if (currentAudio.value) {
    currentAudio.value.pause();
    currentAudio.value.currentTime = 0;
  }

  const audio = new Audio(audioPath);

  currentAudio.value = audio;

  audio.play().catch((error) => {
    console.error("Error playing audio:", error);
  });

  audio.onended = () => {
    currentAudio.value = null;
  };
};

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});
</script>


<style scoped>
h1 {
    font-family: 'Poppins', sans-serif;
    color: white;
    margin-top: 50px;
    margin-left: 100px;
    font-weight: bold;
    font-size: 40px;
}

.cards-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 100px;
  margin: 0 auto;
}

.card {
  position: relative;
  background: #000;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.play-icon {
  position: absolute;
  font-size: 40px;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.card:hover .play-icon {
  opacity: 1;
}

.text-overlay {
  position: absolute;
  bottom: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 5px 0;
}

.name {
  font-family: 'Poppins', sans-serif;
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
}

.role {
  font-family: 'Poppins', sans-serif;
  color: #ccc;
  font-size: 12px;
  margin: 0;
}

@media (min-width: 1024px) {
  .cards-container {
    gap: 100px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .cards-container {
    gap: 70px;
  }

  .card {
    width: 130px;
    height: 130px;
  }

  .play-icon {
    font-size: 35px;
  }

  .name {
    font-size: 13px;
  }

  .role {
    font-size: 11px;
  }
}

@media (max-width: 767px) {
  h1 {
    font-size: 30px;
  }

  .cards-container {
    gap: 30px;
  }

  .card {
    width: 100px;
    height: 100px;
  }

  .play-icon {
    font-size: 25px;
  }

  .name {
    font-size: 12px;
  }

  .role {
    font-size: 10px;
  }
}
</style>
