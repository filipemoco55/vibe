import { defineStore } from "pinia";
import { useUserStore } from "./user";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    userRole: null,
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
    loadStateFromLocalStorage() {
      const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
      const userRole = JSON.parse(localStorage.getItem("userRole"));

      this.isAuthenticated = isAuthenticated || false;
      this.userRole = userRole || null;
    },
  },
  persist: true,
});
