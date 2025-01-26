import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
      users: [
        { 
          id: 1, 
          name: "John", 
          email: "admin@gmail.com", 
          password: "123", 
          isAdmin: true, 
          profilePicture: "src/assets/user.png",
          events: [
            { id: 1, name: "Admin Event 1", date: "2025-01-20", location: "Online" },
          ],
          merch: [
            { id: 1, name: "Admin Shirt", size: "M", price: 30 },
          ],
        },
        { 
          id: 2, 
          name: "Jane", 
          email: "user@gmail.com", 
          password: "1234", 
          isAdmin: false, 
          profilePicture: "src/assets/user.png",
          events: [
            { id: 1, name: "User Event 1", date: "2025-01-25", location: "City Center" },
          ],
          merch: [
            { id: 1, name: "User Hat", size: "L", price: 15 },
          ],
        },
      ],
    }),
    actions: {
      removeUser(userId) {
        const index = this.users.findIndex((user) => user.id === userId);
        if (index !== -1) {
          this.users.splice(index, 1);
        }
      },
      addUser(newUser) {
        this.users.push(newUser);
      },
      updateUser(userId, updatedData) {
        const user = this.users.find((u) => u.id === userId);
        if (user) {
          Object.assign(user, updatedData); 
         
        } else {
          console.error(`Usuário com ID ${userId} não encontrado.`);
        }
      },
    },
  });
  
  
