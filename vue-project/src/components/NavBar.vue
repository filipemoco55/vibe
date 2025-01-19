<template>
    <header class="header">
        <div class="logo">
            <img src="@/assets/Logo.png" alt="Logo" class="logo-img" />
        </div>

        <nav class="nav">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/poster">Poster</RouterLink>
            <RouterLink to="/store">Store</RouterLink>
            <RouterLink to="/music">Music</RouterLink>
            <RouterLink to="/tickets">Tickets</RouterLink>
            <RouterLink to="/more">More</RouterLink>
        </nav>

        <div class="user-actions">
            <!-- Profile Icon visible only when logged in -->
            <RouterLink
                v-if="isAuthenticated"
                to="/profile"
                class="profile-icon-button"
                title="Profile"
            >
                <img src="@/assets/user.png" alt="User Icon" class="profile-icon" />
            </RouterLink>

            <RouterLink
                v-if="isAuthenticated"
                to="/cart"
                class="profile-icon-button"
                title="cart"
            >
                <img src="@/assets/cart.png" alt="User Icon" class="profile-icon" />
            </RouterLink>

            <!-- Admin Button -->
            <RouterLink v-if="isAdmin" to="/admin" class="profile-button">
                <img src="@/assets/logo.png" alt="User Icon" class="user-icon" />
                Admin
            </RouterLink>

            <RouterLink v-else-if="isAuthenticated" to="/profile" class="profile-button">
                <img src="@/assets/logo.png" alt="User Icon" class="user-icon" />
                Profile
            </RouterLink>

            <!-- Logout Button -->
            <button v-if="isAuthenticated" @click="logout" class="logout-button">
                Logout
            </button>

            <!-- Login Button -->
            <RouterLink v-else to="/login" class="account-button">
                My Account
            </RouterLink>
        </div>
    </header>
</template>


<script>
import { useAuthStore } from "@/stores/authStore";
import { computed } from "vue";
// import { useCartStore } from '@/stores/cart';

// const cartStore = useCartStore();

export default {
    name: "Navbar",
    setup() {
        const authStore = useAuthStore();

        const isAuthenticated = computed(() => authStore.isAuthenticated);
        const isAdmin = computed(() => authStore.userRole === "admin");

        const logout = () => {
            authStore.logout();
        };

        return {
            isAuthenticated,
            isAdmin,
            logout,
        };
    },
};
</script>


<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to bottom, #0077a1, #003b57);
    padding: 1rem;
}

.logo-img {
    height: 40px;
    border-radius: 50%;
}

.nav {
    display: flex;
    align-items: center;
}

.nav a,
.nav RouterLink {
    margin: 0 1rem;
    color: white;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    transition: color 0.3s ease;
}

.nav a:hover,
.nav RouterLink:hover {
    color: #ddeeff;
}

.account-button {
    padding: 0.5rem 1rem;
    background-color: white;
    color: #004f6f;
    border: none;
    font-weight: bold;
    border-radius: 4px;
    font-size: 0.9rem;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: background 0.3s ease;
}

.account-button:hover {
    background-color: #ddeeff;
}

.user-actions {
    display: flex;
    align-items: center;
}

.profile-button {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: #004f6f;
    color: white;
    border: none;
    font-weight: bold;
    border-radius: 4px;
    font-size: 0.9rem;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    cursor: pointer;
    transition: background 0.3s ease;
}

.profile-button:hover {
    background-color: #0077a1;
}

.user-icon {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 0.5rem;
}

.logout-button {
    margin-left: 1rem;
    padding: 0.5rem 1rem;
    background-color: #ff4c4c;
    color: white;
    border: none;
    font-weight: bold;
    border-radius: 4px;
    font-size: 0.9rem;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: background 0.3s ease;
}

.logout-button:hover {
    background-color: #ff6666;
}

.profile-icon-button {
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-decoration: none;
}

.profile-icon {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-icon-button:hover .profile-icon {
    transform: scale(1.1);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
</style>