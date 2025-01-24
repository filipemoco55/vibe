<template>
    <div class="edit-user-container">
      <h1>Edit User</h1>
      <form @submit.prevent="handleEditUser">
        <div class="input-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            v-model="user.name"
            placeholder="Full Name"
            required
          />
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="user.email"
            placeholder="email@example.com"
            required
          />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="user.password"
            placeholder="********"
            required
          />
        </div>
        <div class="input-group">
          <label for="role">Role</label>
          <select v-model="user.isAdmin">
            <option :value="false">User</option>
            <option :value="true">Admin</option>
          </select>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useUserStore } from "@/stores/user";
  import { useRoute, useRouter } from "vue-router";
  
  const route = useRoute();
  const router = useRouter();
  const userStore = useUserStore();
  const userId = route.params.userId;
  const user = ref({});
  
  onMounted(() => {
    const userToEdit = userStore.users.find((u) => u.id === parseInt(userId));
    if (userToEdit) {
      user.value = { ...userToEdit }; // Faz uma cópia do usuário para edição
    } else {
      
      router.push("/admin");
    }
  });
  
  const handleEditUser = () => {
    userStore.updateUser(user.value.id, user.value);
    router.push("/admin"); 
  };
  </script>
  
  <style scoped>
  .edit-user-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .input-group {
    margin-bottom: 1rem;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
  
  .input-group input,
  .input-group select {
    width: 100%;
    padding: 0.8rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }
  
  button {
    width: 100%;
    padding: 0.8rem;
    background-color: #4caf50;
    border: none;
    color: white;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  