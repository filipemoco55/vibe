<script setup>
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
    <Navbar />
    
    <div class="more-page">
      <section class="intro-section">
        <h1>About the Event</h1>
        <p>
          Welcome to our exclusive event! Here, you can find all the information about our featured artists, and more exciting surprises. Stay tuned for the latest updates.
        </p>
      </section>
      
     
    
      <section class="details-section">
        <h2>Event Details</h2>
        <p>
          Find all the important details about the event, such as the schedule, location, and ticketing information.
        </p>
        <ul>
          <li><strong>Location:</strong> Porto, Portugal and Jacarta, Indonesia </li>
          <li><strong>Ticketing:</strong><router-link to="/tickets" class="buy-button">Buy your Ticket Now!</router-link></li>
          <li><strong>Schedule:</strong> <a href="#">View Full Schedule</a></li>
        </ul>
      </section>
    </div>
  
    <Footer />
  </template>
  
  



<style>
  
  .more-page {
    font-family: 'Poppins', sans-serif;
    color: white;
  }
  
  .intro-section {
    margin: 40px;
    text-align: center;
  }
  
  .intro-section h1 {
    font-size: 3rem;
    font-weight: bold;
  }
  
  .intro-section p {
    font-size: 1.2rem;
    margin-top: 10px;
    line-height: 1.6;
  }
  
  .carousel-section, .secondary-carousel-section {
    margin: 60px 0;
    text-align: center;
  }
  
  .carousel-section h2, .secondary-carousel-section h2 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  
  .details-section {
    background-color: #002933;
    padding: 40px;
    margin: 40px;
    border-radius: 12px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  }
  
  .details-section h2 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  
  .details-section ul {
    list-style: none;
    padding: 0;
  }
  
  .details-section ul li {
    font-size: 1.2rem;
    margin-top: 15px;
  }
  
  .details-section a {
    color: #0077a1;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .details-section a:hover {
    color: white;
  }
  </style>
  