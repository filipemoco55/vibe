<script setup>
import { onMounted, watch } from 'vue';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import { useCartStore } from '@/stores/cart';
import { useAuthStore } from '@/stores/authStore';
import { useUserStore } from '@/stores/user';


const cartStore = useCartStore();
const authStore = useAuthStore();
const userStore = useUserStore();


const removeItem = (id) => {
  cartStore.removeFromCart(id);
};

const clearCart = () => {
  cartStore.clearCart();
};

// Carregar os itens do carrinho do componente, se o usuário estiver logado
const loadCartFromStorage = () => {
  if (authStore.isAuthenticated && authStore.loggedInUser) {
    const savedCart = localStorage.getItem(`cart_${authStore.loggedInUser.id}`);
    if (savedCart) {
      cartStore.cart = JSON.parse(savedCart);
    }
  }
};


watch(
  () => authStore.isAuthenticated,
  (newValue) => {
    if (!newValue) {
      cartStore.clearCart();
      localStorage.removeItem(`cart_${authStore.loggedInUser?.id}`);
    } else {
      loadCartFromStorage();
    }
  },
  { immediate: true }
);

// Carregar o carrinho ao montar o componente
onMounted(() => {
  if (authStore.isAuthenticated) {
    loadCartFromStorage();
  }
});


const finalizePurchase = () => {
  if (!authStore.isAuthenticated) {
    alert('Você precisa estar logado para finalizar a compra.');
    return;
  }

  const userId = authStore.loggedInUser.id;
  const user = userStore.users.find((u) => u.id === userId);

  if (user) {
    // Adicionar os itens do carrinho ao histórico de compras do usuário
    user.merch.push(...cartStore.cart);

    // Atualizar o estado do usuário na store
    userStore.updateUser(userId, { merch: user.merch });

    // Persistir o histórico no localStorage
    localStorage.setItem(`user_${userId}_merch`, JSON.stringify(user.merch));

  
    cartStore.clearCart();
    localStorage.removeItem(`cart_${userId}`);

    alert('Compra finalizada com sucesso! O histórico foi atualizado.');
  } else {
    alert('Usuário não encontrado.');
  }
};
</script>


<template>
  <NavBar />
  <div class="cart-page">
    <section class="cart-section">
      <h1>Your Cart</h1>
      <div v-if="cartStore.cart.length > 0">
        <div class="cart-item" v-for="item in cartStore.cart" :key="item.id">
          <img :src="item.image" :alt="item.name" class="cart-image" />
          <div class="item-details">
            <h2>{{ item.name }}</h2>
            <p class="item-size">Size: {{ item.size }}</p>
            <p class="item-price">Price: €{{ item.price }}</p>
          </div>
          <button @click="removeItem(item.id)" class="remove-button">Remove</button>
        </div>
        <div class="cart-summary">
          <p class="total-price">Total: €{{ cartStore.totalPrice }}</p>
          <button @click="finalizePurchase" class="finalize-button">Purchase</button>
          <button @click="clearCart" class="clear-button">Clear Cart</button>
        </div>
      </div>
      <p v-else class="empty-cart-message">Your cart is empty.</p>
    </section>
  </div>
  <Footer />
</template>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #f3f4f6;
  margin: 0;
  padding: 0;
}

h1 {
  color: #2c3e50;
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
  margin-top: 50px;
}

.cart-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.cart-section {
  background-color: #ffffff;
  padding: 40px;
  margin: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background: #fafafa;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.cart-item:hover {
  transform: translateY(-5px);
}

.cart-image {
  width: 90px;
  height: 90px;
  margin-right: 20px;
  border-radius: 8px;
}

.item-details {
  flex-grow: 1;
}

h2 {
  font-size: 20px;
  color: #333;
  margin-bottom: 5px;
}

.item-size,
.item-price {
  font-size: 14px;
  color: #666;
}

.remove-button {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.remove-button:hover {
  background: #c0392b;
}

.cart-summary {
  text-align: right;
  margin-top: 30px;
}

.total-price {
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
}

.clear-button {
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 15px;
}

.clear-button:hover {
  background: #2980b9;
}

.empty-cart-message {
  text-align: center;
  color: #999;
  font-size: 16px;
}
.finalize-button {
  background: #2ae604;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 15px;
}
.finalize-button:hover {
  background: #109636;
}
</style>
