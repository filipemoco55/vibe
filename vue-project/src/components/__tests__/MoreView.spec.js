import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MoreView from '@/views/MoreView.vue';
import { createPinia } from 'pinia';

describe('MoreView.vue', () => {
    
    it('renders the component well', () => {
        const pinia = createPinia(); // Create a new Pinia instance
        const wrapper = mount(MoreView, {
            global: {
                plugins: [pinia], // Register Pinia
            },
        });
        expect(wrapper.html()).toContain('More');
    });

    it('contains an iframe with a map location', () => {
        const pinia = createPinia();
        const wrapper = mount(MoreView, {
            global: {
                plugins: [pinia],
            },
        });
        const iframe = wrapper.find('iframe');
        expect(iframe.exists()).toBe(true);
        expect(iframe.attributes('src')).toContain(
            'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1262.7130741599756!2d-8.685146732682757!3d41.17261064376814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246f7f4002cf19%3A0x6b6e3092d43e6880!2sQueim%C3%B3dromo%20do%20Porto!5e0!3m2!1spt-PT!2spt!4v1737557367101!5m2!1spt-PT!2spt'
        );
    });
});