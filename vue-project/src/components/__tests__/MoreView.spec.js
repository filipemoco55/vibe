import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MoreView from '@/views/MoreView.vue';

describe('MoreView.vue', () => {
    it('renders the component well', () => {
        const wrapper = mount(MoreView);
        expect(wrapper.html()).toContain('More');
    });
});