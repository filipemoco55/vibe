<template>
  <div class="container">
    <div class="background-section">
      <img src="@/assets/login.png" alt="Background" class="background-image" />
    </div>

    <div class="login-section">
      <div class="logo">
        <img src="@/assets/Logo.png" alt="Logo" />
      </div>

      <form class="login-form" @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="admin@gmail.com" required />
        </div>

        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="**********" required />
        </div>

        <p v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </p>

        <button type="submit" class="submit-button">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    return { authStore, router };
  },
  methods: {
    handleLogin() {
      const success = this.authStore.login(this.email, this.password);

      if (success) {
        this.router.push("/"); // Centralized logic in the router will handle redirection
      } else {
        this.errorMessage = "Invalid email or password. Please try again.";
      }
    },

  },
};

</script>

<style scoped>
.container {
  display: flex;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}

.background-section {
  flex: 1;
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
  margin-bottom: 20px;
}

.login-form {
  width: 300px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.error-message {
  color: red;
  font-size: 14px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
