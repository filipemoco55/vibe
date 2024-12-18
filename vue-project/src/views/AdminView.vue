<template>
    <div class="admin-container">
      <Sidebar :logout="logout" />
  

      <div class="content">
        <h1>Admin Page</h1>
      </div>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from "@/stores/authStore";
  import { useRouter } from "vue-router";
  import Sidebar from "@/components/SideNavbar.vue";
  
  export default {
    components: {
      Sidebar,
    },
    setup() {
      const authStore = useAuthStore();
      const router = useRouter();
  
      const logout = () => {
        authStore.logout();
        router.push("/");
      };
  
      return { logout };
    },
  };
  </script>
  
  <style scoped>

  .admin-container {
    display: flex;
    height: 100vh;
  }
  
  .content {
    flex: 1;
    padding: 2rem;
    background-color: #f4f4f4;
    color: #333;
  }
  
  h1 {
    margin-bottom: 1rem;
    color: #333;
  }
  </style>
  