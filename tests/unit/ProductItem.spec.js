import { shallowMount, mount } from '@vue/test-utils';
import ProductItem from '@/components/ProductItem';

describe('ProductItem.vue', () => {
    test('assert event has been emitted', async () => {
        const wrapper = mount(ProductItem, {
            propsData: { product: 'booze' },
        });

        // console.log(wrapper);
        wrapper.vm.$emit('passing');
        // const button = wrapper.find('img');
        // await button.trigger('click');
        await wrapper.vm.$nextTick();
        // console.log(wrapper.vm);
        // console.log(wrapper.emitted().passing);
        expect(wrapper.emitted().passing).toBeTruthy();
        expect(wrapper.emitted().passing.length).toBe(1);
    });
});
