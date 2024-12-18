<script setup>
import Sidebar from "@/components/SideNavbar.vue";


</script>
<template>
   <div class="admin-container">
      <Sidebar :logout="logout" />
  

      <div class="content">
        <h1>Users Page</h1>
      </div>
    </div>
</template>



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

  }</style>