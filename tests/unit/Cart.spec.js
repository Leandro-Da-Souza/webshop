import { shallowMount, mount } from '@vue/test-utils';
import Cart from '@/components/Cart.vue';

describe('Cart.vue', () => {
    test('cart.vue should recieve prop', () => {
        let prop = 'Product';
        const wrapper = shallowMount(Cart, {
            propsData: { cartItem: prop },
        });
        console.log(wrapper.props());

        expect(wrapper.props().cartItem).toBe(prop);
    });
    test('cart.vue should emit event', () => {
        const wrapper = mount(Cart);
        wrapper.vm.$emit('deleteIds');
        wrapper.$nextTick();
        expect(wrapper.emitted().deleteId).toBeTruthy();
    });
});
