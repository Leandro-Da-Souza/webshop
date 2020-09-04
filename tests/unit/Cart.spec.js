import { shallowMount } from "@vue/test-utils";
import Cart from "@/components/Cart.vue"

describe('Cart.vue', () => {
    test('cart.vue should recieve prop',() => {
        let prop = 'Product'
        const wrapper = shallowMount(Cart, {
            propsData: {product: prop}
        })

        expect(wrapper.props().product).toBe(prop)
    })
})