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
/* Estilo principal */
.cart-page {
  font-family: 'Poppins', sans-serif;
  color: white;
  padding: 20px;
  max-width: 1000px;
  margin: 40px auto;
  background-color: #002933;
  border-radius: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  text-align: center;
}

/* Seção do carrinho */
.cart-section {
  background-color: #001f26;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #ffffff;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background: #003641;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, background 0.3s ease;
}

.cart-item:hover {
  transform: translateY(-5px);
  background: #004851;
}

.cart-image {
  width: 90px;
  height: 90px;
  margin-right: 20px;
  border-radius: 8px;
  object-fit: cover;
}

.item-details {
  flex-grow: 1;
  text-align: left;
}

h2 {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 5px;
}

.item-size,
.item-price {
  font-size: 1rem;
  color: #94a3b8;
}

.remove-button {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.remove-button:hover {
  background: #c0392b;
}

.cart-summary {
  text-align: right;
  margin-top: 30px;
  color: #ffffff;
}

.total-price {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.clear-button,
.finalize-button {
  background: #0077a1;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 15px;
}

.clear-button:hover {
  background: #005f7a;
  transform: scale(1.05);
}

.finalize-button {
  background: #2ae604;
}

.finalize-button:hover {
  background: #109636;
  transform: scale(1.05);
}

.empty-cart-message {
  font-size: 1.2rem;
  color: #94a3b8;
  margin-top: 20px;
}

/* Responsividade */
@media (max-width: 768px) {
  .cart-page {
    padding: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  .cart-item {
    flex-direction: column;
    text-align: center;
  }

  .cart-image {
    margin-bottom: 15px;
  }

  .clear-button,
  .finalize-button {
    font-size: 1rem;
  }
}
</style>
