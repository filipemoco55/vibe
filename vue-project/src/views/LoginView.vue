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

        <p v-if="authStore.errorMessage" class="error-message">
          {{ authStore.errorMessage }}
        </p>

        <button type="submit" class="submit-button">Login</button>

        <div class="signup-link">
          <RouterLink to="/register" style="color: #0077a1;">Dont have an account?</RouterLink>
        </div>
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
    };
  },
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    return { authStore, router };
  },
  methods: {
    handleLogin() {
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      const success = this.authStore.login(this.email, this.password);
      console.log("Success:", success);
      if (success) {
        const from = this.$route.query.from || "/";
        this.$router.push(from);
        console.log("Redirecting to:", from);
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

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.signup-link {
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #555;
}
</style>
