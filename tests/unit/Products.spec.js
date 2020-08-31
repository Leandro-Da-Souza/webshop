import { shallowMount } from '@vue/test-utils';
import Products from '@/components/Products';

describe('Products.vue', () => {
    it('should render passed in prop to product component', () => {
        const msg = 'Hello';
        const wrapper = shallowMount(Products, {
            propsData: { msg },
        });
        const text = wrapper.find('p').text();

        expect(text).toMatch(msg);
    });
});
