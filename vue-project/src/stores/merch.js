import { defineStore } from 'pinia'

export const useMerchStore = defineStore('merch', {
    state: () => {
        return {
            merch: [
                {
                    id: 1,
                    name: 'Vibe White T-Shirt',
                    price: 40,
                    image:'src/assets/T-shirt.png',
                },
                {
                    id: 2,
                    name: 'Vibe Black T-Shirt',
                    price: 40,
                    image: 'src/assets/T-shirtpreta.png',
                },
                {
                    id: 3,
                    name: 'Vibe White Hoodie',
                    price: 90,
                    image:'src/assets/Hoodie.png',
                },
                {
                    id: 4,
                    name: 'Vibe Black Hoodie',
                    price: 90,
                    image: 'src/assets/Hoodiepreta.png',
                },
                {
                    id: 5,
                    name: 'Vibe White Sweatpants',
                    price: 60,
                    image: 'link_para_imagem_1'
                },
                {
                    id: 6,
                    name: 'Vibe Black Sweatpants',
                    price: 60,
                    image: 'link_para_imagem_2'
                },
                {
                    id: 7,
                    name: 'Vibe White Socks',
                    price: 8,
                    image: 'link_para_imagem_3'
                },
                {
                    id: 8,
                    name: 'Vibe Black Socks',
                    price: 8,
                    image: 'link_para_imagem_4'
                },
            ]
        }
    },
    getters: {
        total: (state) => state.merch.length,
    },
    actions: {
        addItem(id, name, price, size, image) {
            const newMerch = {
                id: id,
                name: name,
                price: price,
                size: size,
                image: image,
            };
            this.merch.push(newMerch);
        },
        removeItem(id) {
            this.merch = this.merch.filter((merch) => merch.id != id);
        },
    },
});
