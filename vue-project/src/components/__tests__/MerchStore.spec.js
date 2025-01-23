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
        name: 'T-Shirt',
        price: 20,
        image: 'tshirt.jpg',
      },
      {
        id: 2,
        name: 'Hoodie',
        price: 40,
        image: 'hoodie.jpg',
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
