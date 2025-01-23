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
        Welcome to our exclusive event! Here, you can find all the information about our featured artists, and more
        exciting surprises. Stay tuned for the latest updates.
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
        <li><strong>Ticketing:</strong><router-link to="/tickets" class="buy-button"> Buy your Ticket Now!</router-link>
        </li>
        <li><strong>Schedule:</strong> <a href="#">View Full Schedule</a></li>
      </ul>
    </section>

    <section class="map-section">
      <h2>How to get there</h2>
      <p>
        Our event is going to take place at the Queimódromo. Look below for the pinned map.
      </p>
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1262.7130741599756!2d-8.685146732682757!3d41.17261064376814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246f7f4002cf19%3A0x6b6e3092d43e6880!2sQueim%C3%B3dromo%20do%20Porto!5e0!3m2!1spt-PT!2spt!4v1737557367101!5m2!1spt-PT!2spt"
          width="100%" height="450" style="border: 0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <br>
      <br>
      <p>
        And the other big event will be in Jacarta, Indonesia. look below for the pinned map.
      </p>
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.343273033742!2d106.80227485509864!3d-6.218383150176047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d30079f01%3A0x2e74f2341fff266d!2sEst%C3%A1dio%20Gelora%20Bung%20Karno!5e0!3m2!1spt-PT!2spt!4v1737662083375!5m2!1spt-PT!2spt"
          width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
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
          <textarea v-model="message" id="message" rows="5" placeholder="Write your message here..."
            required></textarea>
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

.map-section {
  background-color: #001f26;
  padding: 40px;
  margin: 40px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  text-align: center;
}

.map-section h2 {
  font-size: 2.5rem;
  font-weight: bold;
}

.map-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #cccccc;
  /* Slightly muted color for the text */
}

.map-container {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  /* Rounded corners for a polished look */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  /* Subtle shadow for depth */
}

.map-container iframe {
  width: 100%;
  height: 650px;
  /* Fixed height for responsiveness */
  border: 0;
  border-radius: 10px;
  /* Match the container's rounded corners */
}

/* Responsive Design */
@media (max-width: 768px) {
  .details-section h2 {
    font-size: 1.8rem;
  }

  .details-section p {
    font-size: 1rem;
  }

  .map-container iframe {
    height: 350px;
    /* Smaller height for smaller screens */
  }
}

@media (max-width: 480px) {
  .details-section h2 {
    font-size: 1.5rem;
  }

  .details-section p {
    font-size: 0.9rem;
  }

  .map-container iframe {
    height: 300px;
    /* Even smaller for mobile */
  }
}
</style>
