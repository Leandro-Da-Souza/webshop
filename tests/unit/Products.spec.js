import { shallowMount } from '@vue/test-utils';
import Products from '@/components/Products';
import App from '@/App';

describe('Products.vue', () => {
    it('should render passed in prop to product component', () => {
        const msg = 'Hello';
        const wrapper = shallowMount(Products, {
            propsData: { msg },
        });
        const text = wrapper.find('p').text();

        expect(text).toMatch(msg);
    });
    it('should have "Coffee" as name property in test data model', () => {
        
        const expected = "Coffee"; 
        const wrapper = shallowMount(Products); 
        const actual = wrapper.vm.testData[0].name;
       
        expect(actual).toBe(expected)

    })
    it('should be 3 properties in testData', () => {
        const wrapper = shallowMount(Products);
        const expected = 3;
        const actual = wrapper.vm.testData.length;
        expect(actual).toBe(expected)
    })
});

// testar data i App.vue 

describe('App.vue' , () => {
    it('should confirm data exists', () => {
        const wrapper = shallowMount(App);
        const data = wrapper.vm.data;
        

        expect(data).toBeDefined()
    });
})