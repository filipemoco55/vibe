<template>
  <div class="container">
    <div class="background-section">
      <img src="@/assets/login.png" alt="Background" class="background-image" />
    </div>

    <div class="login-section">
      <div class="logo">
        <img src="@/assets/Logo.png" alt="Logo" />
      </div>
      <form class="login-form" @submit.prevent="handleRegister">
        <div class="input-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" placeholder="First and last name" required />
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="email@gmail.com" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="**********" required />
        </div>
        <button type="submit" class="submit-button">Register</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const name = ref("");
const email = ref("");
const password = ref("");
const userStore = useUserStore();
const router = useRouter();

const handleRegister = () => {
  const newUser = {
    id: userStore.users.length + 1, // Gerar ID simples. Melhor usar algo único na produção.
    name: name.value,
    email: email.value,
    password: password.value,
    isAdmin: false,
    profilePicture: "src/assets/user.png", 
    events: [],
    merch: [],
  };

  userStore.addUser(newUser);
  router.push("/login"); 
};
</script>


<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  margin: 0;
  padding: 0;
  height: 99vh;
  width: 100vw;
}

.background-section {
  flex: 1;
  position: relative;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}

.logo img {
  width: 250px;
  height: auto;
  margin-bottom: 20px;
}

.login-form {
  width: 300px;
  display: flex;
  flex-direction: column;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  display: block;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #333;
}

.signup-link {
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #555;
}
</style>