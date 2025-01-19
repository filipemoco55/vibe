import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),
  getters: {
    totalPrice: (state) =>
      state.cart.reduce((total, item) => total + item.price, 0),
  },
  actions: {
    addToCart(item) {
      this.cart.push(item);
      this.saveCart(); 
    },

    // Função para remover item do carrinho
    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id);
      this.saveCart(); 
    },

    // Função para limpar o carrinho
    clearCart() {
      this.cart = [];
      this.saveCart(); 
    },

    // Função para carregar o carrinho do localStorage
    loadCart(userId) {
      const cartData = localStorage.getItem(`cart_${userId}`);
      if (cartData) {
        this.cart = JSON.parse(cartData);
      }
    },

    // Função para salvar o carrinho no localStorage
    saveCart() {
      if (this.cart.length > 0 && localStorage.getItem('loggedInUser')) {
        const userId = JSON.parse(localStorage.getItem('loggedInUser')).id;
        localStorage.setItem(`cart_${userId}`, JSON.stringify(this.cart));
      }
    },
  },
});
