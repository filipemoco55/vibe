<template>
    <Navbar />

    <div class="cards-section">
        <h1>Popular Artists!</h1>
        <br />
        <div class="cards-container">
            <div class="card" v-for="(artist, index) in artists" :key="index">
                <img :src="artist.image" :alt="artist.name" />
                <div class="play-icon">▶</div>
                <div class="text-overlay">
                    <p class="name">{{ artist.name }}</p>
                    <p class="role">{{ artist.role }}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="cards-section">
        <h1>Popular Albums!</h1>
        <br />
        <div class="cards-container">
            <div class="card" v-for="(artist, index) in album" :key="index">
                <img :src="artist.image" :alt="artist.name" />
                <div class="play-icon">▶</div>
                <div class="text-overlay">
                    <p class="name">{{ artist.name }}</p>
                    <p class="role">{{ artist.role }}</p>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>

<script setup>
import Navbar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

const artists = [
    { name: "Cash Cobain", role: "Artist", image: "/src/assets/cash.jpg" },
    { name: "Luh Tyler", role: "Artist", image: "/src/assets/luh.jpg" },
    { name: "Pupil Slicer", role: "Artist", image: "/src/assets/pupil.jpg" },
    { name: "DJ Boring", role: "Artist", image: "/src/assets/djboring.jpg" },
    { name: "Nervo", role: "Artist", image: "/src/assets/nervo.jpg" },
    { name: "Bispo", role: "Artist", image: "/src/assets/bispo.jpg" },
];

const album = [
    { name: "PLAY Cash Cobain", role: "Cash Cobain", image: "/src/assets/playcash.jpg" },
    { name: "My Vision", role: "Luh Tyler", image: "/src/assets/myvision.jpg" },
    { name: "Blossom", role: "Pupil Slicer", image: "/src/assets/blossom.jpg" },
    { name: "Winona", role: "DJ Boring", image: "/src/assets/winona.jpg" },
    { name: "Collateral", role: "Nervo", image: "/src/assets/collateral.jpg" },
    { name: "Mais Antigo", role: "Bispo", image: "/src/assets/maisantigo.jpg" },
];
</script>

<style scoped>
h1 {
    font-family: 'Poppins', sans-serif;
    color: white;
    margin-top: 50px;
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
</style>
