import { defineStore } from 'pinia';

export const useMerchStore = defineStore('merch', {
    state: () => ({
        merch: [
            {
                id: 1,
                name: 'Vibe White T-Shirt',
                price: 40,
                size: ['S', 'M', 'L'], 
                image: 'src/assets/T-shirt.png',
            },
            {
                id: 2,
                name: 'Vibe Black T-Shirt',
                price: 40,
                size: ['S', 'M', 'L'],
                image: 'src/assets/T-shirtpreta.png',
            },
            {
                id: 3,
                name: 'Vibe White Hoodie',
                price: 90,
                size: ['M', 'L', 'XL'],
                image: 'src/assets/Hoodie.png',
            },
            {
                id: 4,
                name: 'Vibe Black Hoodie',
                price: 90,
                size: ['M', 'L', 'XL'],
                image: 'src/assets/Hoodiepreta.png',
            },
            {
                id: 5,
                name: 'Vibe White Sweatpants',
                price: 60,
                size: ['M', 'L'],
                image: 'link_para_imagem_1',
            },
            {
                id: 6,
                name: 'Vibe Black Sweatpants',
                price: 60,
                size: ['M', 'L'],
                image: 'link_para_imagem_2',
            },
            {
                id: 7,
                name: 'Vibe White Socks',
                price: 8,
                size: ['One Size'],
                image: 'link_para_imagem_3',
            },
            {
                id: 8,
                name: 'Vibe Black Socks',
                price: 8,
                size: ['One Size'],
                image: 'link_para_imagem_4',
            },
        ],
    }),
    getters: {
        total: (state) => state.merch.length, // Quantidade total de itens
    },
    actions: {
        addItem(id, name, price, size, image) {
          this.merch.push({ id, name, price, size, image });
        },
        updateItem(id, updatedItem) {
          const index = this.merch.findIndex((item) => item.id === id);
          if (index !== -1) {
            this.merch[index] = { id, ...updatedItem };
          }
        },
        removeItem(id) {
          this.merch = this.merch.filter((item) => item.id !== id);
        },
      },
      persist: true,
    });
