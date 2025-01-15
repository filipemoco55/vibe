<template>
    <Navbar />
  
    <MusicComponent title="Popular Artists!" :items="artists" />
    <MusicComponent title="Popular Albums!" :items="albums" />
  
    <Footer />
  </template>
  
  <script setup>
  import Navbar from "@/components/NavBar.vue";
  import Footer from "@/components/Footer.vue";
  import MusicComponent from "@/components/MusicComponent.vue";
  
  const artists = [
    { name: "Cash Cobain", role: "Artist", image: "/src/assets/cash.jpg" },
    { name: "Luh Tyler", role: "Artist", image: "/src/assets/luh.jpg" },
    { name: "Pupil Slicer", role: "Artist", image: "/src/assets/pupil.jpg" },
    { name: "DJ Boring", role: "Artist", image: "/src/assets/djboring.jpg" },
    { name: "Nervo", role: "Artist", image: "/src/assets/nervo.jpg" },
    { name: "Bispo", role: "Artist", image: "/src/assets/bispo.jpg" },
  ];
  
  const albums = [
    { name: "PLAY Cash Cobain", role: "Cash Cobain", image: "/src/assets/playcash.jpg" },
    { name: "My Vision", role: "Luh Tyler", image: "/src/assets/myvision.jpg" },
    { name: "Blossom", role: "Pupil Slicer", image: "/src/assets/blossom.jpg" },
    { name: "Winona", role: "DJ Boring", image: "/src/assets/winona.jpg" },
    { name: "Collateral", role: "Nervo", image: "/src/assets/collateral.jpg" },
    { name: "Mais Antigo", role: "Bispo", image: "/src/assets/maisantigo.jpg" },
  ];
  </script>
  
