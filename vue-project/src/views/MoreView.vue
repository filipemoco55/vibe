<script setup>
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';


const name = ref('');
const email = ref('');
const message = ref('');


const handleSubmit = (event) => {
  event.preventDefault();
  
 
  alert(`Feedback enviado com sucesso! Obrigado, ${name.value}!`);

 
  name.value = '';
  email.value = '';
  message.value = '';
};
</script>

<template>
  <Navbar />

  <div class="more-page">
    <!-- Seção de introdução -->
    <section class="intro-section">
      <h1>About the Event</h1>
      <p>
        Welcome to our exclusive event! Here, you can find all the information about our featured artists, and more exciting surprises. Stay tuned for the latest updates.
      </p>
    </section>

    <!-- Detalhes do evento -->
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

    
    <section class="feedback-section">
      <h2>We Value Your Feedback</h2>
      <p>Share your thoughts about the event or ask us anything!</p>
      <form @submit="handleSubmit" class="feedback-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input v-model="name" type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input v-model="email" type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea v-model="message" id="message" rows="5" placeholder="Write your message here..." required></textarea>
        </div>
        <button type="submit" class="submit-button">Send Feedback</button>
      </form>
    </section>
  </div>

  <Footer />
</template>

<style scoped>
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


.feedback-section {
  background-color: #001f26;
  padding: 40px;
  margin: 40px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  text-align: center;
}

.feedback-section h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.feedback-section p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.feedback-form {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 1rem;
  margin-bottom: 5px;
  color: #94a3b8;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #f8fafc;
  color: #000;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #0077a1;
}

.submit-button {
  display: inline-block;
  background-color: #0077a1;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #005f7a;
}
</style>
