<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import Sidebar from "@/components/SideNavbar.vue";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const deleteUser = (userId) => {
  userStore.removeUser(userId);
};

const editUser = (userId) => {
  router.push({ name: "edit-user", params: { userId } });
};


</script>

<template>
  <div class="admin-container">
    <Sidebar :logout="logout" />

    <div class="content">
      <h1>Users Page</h1>


      <table class="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userStore.users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.password }}</td>
            <td>{{ user.isAdmin ? 'Admin' : 'User' }}</td>
            <td>
              <button class="action-btn edit" @click="editUser(user.id)">Edit</button>
              <button class="action-btn delete" @click="deleteUser(user.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
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
}

.users-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
}

.users-table th,
.users-table td {
  border: 1px solid #ccc;
  padding: 0.8rem;
  text-align: left;
}

.users-table th {
  background-color: #eaeaea;
  font-weight: bold;
}

.users-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.action-btn {
  padding: 0.4rem 0.8rem;
  margin: 0 0.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.action-btn.edit {
  background-color: #4caf50;
  color: #fff;
}

.action-btn.delete {
  background-color: #f44336;
  color: #fff;
}
</style>
