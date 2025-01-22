<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { useMerchStore } from '@/stores/merch';
import { useCartStore } from '@/stores/cart';
import { useAuthStore } from '@/stores/authStore';

const route = useRoute();
const router = useRouter();
const merchStore = useMerchStore();
const cartStore = useCartStore();
const authStore = useAuthStore();

// Extract product ID from the route params
const productId = Number(route.params.id);

// Find the product in the store
const product = merchStore.merch.find((p) => p.id === productId);

// Handle redirect if the product is not found
if (!product) {
    router.replace({ name: 'ShopView' });
}

// State for the selected size (default to the first available size)
const selectedSize = ref(product?.size[0] || null);

const addToCart = () => {
    if (!authStore.isAuthenticated) {
        alert('Please log in to add items to the cart.');
        return;
    }

    if (!selectedSize.value) {
        alert('Please select a size.');
        return;
    }

    cartStore.addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        size: selectedSize.value,
        image: product.image,
    });

    alert('Item added to cart!');
};
</script>

<template>
    <div class="buy-page" v-if="product">
        <h1>{{ product.name }}</h1>
        <img :src="product.image" :alt="product.name" class="product-image" />
        <p class="product-price">{{ product.price }}€</p>

        <div v-if="product.size.length > 0">
            <label for="size">Choose a size:</label>
            <select id="size" v-model="selectedSize" class="size-select">
                <option v-for="size in product.size" :key="size" :value="size">
                    {{ size }}
                </option>
            </select>
        </div>
        <div v-else>
            <p class="no-sizes">No sizes available for this product.</p>
        </div>

        <button @click="addToCart" class="buy-button" :disabled="!selectedSize">
            Add to Cart
        </button>
    </div>
    <div v-else class="not-found">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist or may have been removed.</p>
        <router-link to="/shop" class="back-button">Return to Shop</router-link>
    </div>
</template>

<style scoped>

.buy-page {
  font-family: 'Poppins', sans-serif;
  color: white;
  padding: 20px;
  max-width: 900px;
  margin: 40px auto;
  background-color: #002933;
  border-radius: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  text-align: center;

}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
}

.product-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.product-price {
  font-size: 1.8rem;
  font-weight: bold;
  color: #2e7d32;
  margin: 20px 0;
}

label {
  font-size: 1.2rem;
  color: #94a3b8;
  margin-bottom: 10px;
  display: block;
}

.size-select {
  width: 100%;
  max-width: 300px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #001f26;
  color: #94a3b8;
  margin: 10px auto;
}

.size-select:focus {
  outline: none;
  border-color: #0077a1;
  box-shadow: 0 0 5px rgba(0, 119, 161, 0.5);
}

.buy-button {
  margin-top: 20px;
  padding: 12px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #0077a1;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.buy-button:hover {
  background-color: #005f7a;
  transform: scale(1.05);
}

.buy-button:disabled {
  background-color: #4a5568;
  cursor: not-allowed;
}

.not-found {
  margin: 40px auto;
  padding: 20px;
  background-color: #001f26;
  border-radius: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
}

.not-found h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #d32f2f;
}

.not-found p {
  font-size: 1.2rem;
  color: #94a3b8;
}

.back-button {
  display: inline-block;
  background-color: #0077a1;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 20px;
}

.back-button:hover {
  background-color: #005f7a;
  transform: scale(1.05);
}

/* Responsividade */
@media (max-width: 768px) {
  .buy-page {
    padding: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  .product-image {
    max-width: 300px;
  }

  .product-price {
    font-size: 1.5rem;
  }

  .buy-button {
    font-size: 1rem;
  }

  .back-button {
    font-size: 0.9rem;
  }
}
</style>
