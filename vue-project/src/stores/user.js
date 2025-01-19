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
            { id: 1, name: "Admin Shirt", size: "M", price: 25 },
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
      updateUser(userId, updatedData) {
        const user = this.users.find((u) => u.id === userId);
        if (user) {
          Object.assign(user, updatedData);
          localStorage.setItem(`user_${userId}`, JSON.stringify(user)); // Persistência local
        } else {
          console.error(`Usuário com ID ${userId} não encontrado.`);
        }
      },
    },
  });
  
  
