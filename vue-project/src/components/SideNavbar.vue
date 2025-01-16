<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h2>Admin</h2>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/" class="menu-link">Home</router-link>
      </li>
      <li>
        <router-link to="/users/admin" class="menu-link">Users </router-link>
      </li>
      <li>
        <router-link to="/merch/admin" class="menu-link">Merch</router-link>
      </li>
      <li>
        <router-link to="/tickets/admin" class="menu-link">Tickets</router-link>
      </li>
      <li>
        <router-link to="/event/admin" class="menu-link">Event</router-link>
      </li>
    </ul>
    <div class="logout-section">
      <button @click="logout" class="logout-button">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    logout: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
h2 {
  font-family: 'Poppins', sans-serif;
  color: white;
}

.sidebar {
  height: 100vh;
  width: 250px;
  background-color: #004f6f;
  display: block;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar-header {
  text-align: center;
  margin-bottom: 2rem;
}

.sidebar-header h2 {
  font-size: 3rem;
  font-weight: bold;
  margin: 10%;
}

.menu {
  list-style: none;
  padding: 0;
}

.menu-link {
  display: block;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  font-weight: bold;
}

.menu-link:hover {
  background-color: #0077a1;
}

.logout-section {
  padding: 1rem;
  text-align: center;
}

.logout-button {
  padding: 0.3rem 3rem;
  background-color: #004f6f;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 4px;
  font-size: 1.3rem;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: background 0.3s ease;
}

.logout-button:hover {
  background-color: black;
}
</style>