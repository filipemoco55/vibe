import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        users: [
            { id: 1, name: "John", email: "admin@gmail.com", password: "123", isAdmin: true },
            { id: 2, name: "Jane", email: "user@gmail.com", password: "1234", isAdmin: false },
        ],
    }),
});
