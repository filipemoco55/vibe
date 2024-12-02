<template>
    <header class="header">
        <div class="logo">
            <img src="@/assets/Logo.png" alt="Logo" class="logo-img" />
        </div>
        <nav class="nav">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/Poster">Poster</RouterLink>
            <RouterLink to="/store">Store</RouterLink>
            <RouterLink to="/music">Music</RouterLink>
            <RouterLink to="/more">More</RouterLink>
        </nav>
        
        <RouterLink to="/login" class="account-button">
            My Account
        </RouterLink>

    </header>
</template>

<script>
export default {
    name: "Navbar",
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
</style>
