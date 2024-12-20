import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
    userRole: JSON.parse(localStorage.getItem("userRole")) || null,
  }),
  actions: {
    login(email, password) {
      const adminCredentials = {
        email: "admin@gmail.com",
        password: "123",
        isAdmin: true,
      };

      if (
        email === adminCredentials.email &&
        password === adminCredentials.password
      ) {
        this.isAuthenticated = true;
        this.userRole = adminCredentials.isAdmin;


        localStorage.setItem("isAuthenticated", JSON.stringify(this.isAuthenticated));
        localStorage.setItem("userRole", JSON.stringify(this.userRole));

        return true;
      } else {
        this.isAuthenticated = false;
        this.userRole = null;

        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("userRole");

        return false;
      }
    },
    logout() {
      this.isAuthenticated = false;
      this.userRole = null;

      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("userRole");
    },
  },
});
