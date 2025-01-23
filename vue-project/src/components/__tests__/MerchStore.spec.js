import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import StoreView from '@/views/StoreView.vue'; // Update this to match your actual file path
import ShopViewC from '@/components/ShopViewC.vue'; // Update this if necessary

describe('StoreView.vue', () => {
    it('renders the Navbar, ShopViewC, and Footer components', () => {
        const wrapper = mount(StoreView, {
            global: {
                plugins: [createPinia()],
            },
        });

        // Ensure the Navbar, ShopViewC, and Footer are rendered
        expect(wrapper.findComponent({ name: 'Navbar' }).exists()).toBe(true);
        expect(wrapper.findComponent(ShopViewC).exists()).toBe(true);
        expect(wrapper.findComponent({ name: 'Footer' }).exists()).toBe(true);
    });
});

describe('ShopViewC.vue', () => {

    it('renders a list of merch items if available', () => {
        const mockMerch = [
            {
                id: 1,
                name: 'Vibe White T-Shirt',
                price: 40,
                size: ['S', 'M', 'L'],
                image: new URL('@/assets/T-shirt.png', import.meta.url).href,
            },
            {
                id: 2,
                name: 'Vibe Black T-Shirt',
                price: 40,
                size: ['S', 'M', 'L'],
                image: new URL('@/assets/T-shirtpreta.png', import.meta.url).href,
            },
            {
                id: 3,
                name: 'Vibe White Hoodie',
                price: 90,
                size: ['M', 'L', 'XL'],
                image: new URL('@/assets/Hoodie.png', import.meta.url).href,
            },
            {
                id: 4,
                name: 'Vibe Black Hoodie',
                price: 90,
                size: ['M', 'L', 'XL'],
                image: new URL('@/assets/Hoodiepreta.png', import.meta.url).href,
            },
            {
                id: 5,
                name: 'Vibe White Sweatpants',
                price: 60,
                size: ['M', 'L'],
                image: new URL('@/assets/sweatpants-white.png', import.meta.url).href,
            },
            {
                id: 6,
                name: 'Vibe Black Sweatpants',
                price: 60,
                size: ['M', 'L'],
                image: new URL('@/assets/sweatpants-black.png', import.meta.url).href,
            },
            {
                id: 7,
                name: 'Vibe White Socks',
                price: 8,
                size: ['One Size'],
                image: new URL('@/assets/socks-white.png', import.meta.url).href,
            },
            {
                id: 8,
                name: 'Vibe Black Socks',
                price: 8,
                size: ['One Size'],
                image: new URL('@/assets/socks-black.png', import.meta.url).href,
            },
        ];

        const wrapper = mount(ShopViewC, {
            global: {
                plugins: [
                    createPinia({
                        initialState: {
                            merch: { merch: mockMerch }, // Mocking merch items
                        },
                    }),
                ],
            },
        });

        // Ensure the correct number of merch items are rendered
        const merchCards = wrapper.findAll('.merch-card');
        expect(merchCards.length).toBe(mockMerch.length);

        // Check the rendered content for each merch item
        mockMerch.forEach((item, index) => {
            expect(merchCards[index].html()).toContain(item.name);
            expect(merchCards[index].html()).toContain(`${item.price}€`);
            expect(merchCards[index].html()).toContain(item.image);
        });
    });
});
