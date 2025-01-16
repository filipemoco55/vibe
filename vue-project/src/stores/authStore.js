import { defineStore } from "pinia";
import { useUserStore } from "./user";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    userRole: null,
    loggedInUser: null, 
  }),
  actions: {
    login(email, password) {
      const userStore = useUserStore();
      const user = userStore.users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        this.isAuthenticated = true;
        this.userRole = user.isAdmin ? "admin" : "user";
        this.loggedInUser = user; // Define o utilizador logado

        localStorage.setItem("isAuthenticated", JSON.stringify(this.isAuthenticated));
        localStorage.setItem("userRole", JSON.stringify(this.userRole));
        localStorage.setItem("loggedInUser", JSON.stringify(this.loggedInUser)); // Armazena o utilizador logado

        return true;
      } else {
        this.isAuthenticated = false;
        this.userRole = null;
        this.loggedInUser = null;

        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("userRole");
        localStorage.removeItem("loggedInUser");

        return false;
      }
    },
    logout() {
      this.isAuthenticated = false;
      this.userRole = null;
      this.loggedInUser = null;

      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("userRole");
      localStorage.removeItem("loggedInUser");
    },
    loadStateFromLocalStorage() {
      const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
      const userRole = JSON.parse(localStorage.getItem("userRole"));
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

      this.isAuthenticated = isAuthenticated || false;
      this.userRole = userRole || null;
      this.loggedInUser = loggedInUser || null;
    },
  },
  persist: true,
});
