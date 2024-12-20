import { defineStore } from 'pinia'

export const useMerchStore = defineStore('merch', {
    state: () => {
        return {
            merch: [
                {
                    id: 1,
                    name: 'Vibe White Tshirt',
                    size: 'L',
                    price: 40,
                    image: ''
                },
                {
                    id: 2,
                    name: 'Vibe Black Tshirt',
                    size: 'M',
                    price: 40,
                    image: ''
                },
                {
                    id: 3,
                    name: 'Vibe Black Tshirt',
                    size: 'S',
                    price: 40,
                    image: ''
                },
                {
                    id: 4,
                    name: 'Vibe White Tshirt',
                    size: 'XL',
                    price: 40,
                    image: ''
                }
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
                image: image

            }
            this.merch.push(newMerch)
        },
        removeItem(id) {
            this.merch = this.merch.filter(merch => merch.id != id)
        }
    },
})
