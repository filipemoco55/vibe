import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    userRole: null,
  }),
  actions: {
    login(email, password) {
      const adminCredentials = {
        email: "admin@gmail.com",
        password: "123",
        role: "admin",
      };

      if (
        email === adminCredentials.email &&
        password === adminCredentials.password
      ) {
        this.isAuthenticated = true;
        this.userRole = adminCredentials.role;
        return true; 
      } else {
        this.isAuthenticated = false;
        this.errorMessage = "Invalid email or password!";
        return false;
      }
    },
    logout() {
      this.isAuthenticated = false;
      this.userRole = null;
    },
  },
});
