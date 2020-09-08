import { shallowMount, mount } from "@vue/test-utils";
//import Products from "@/components/Products";
//import ProductItem from "@/components/ProductItem";
import App from "@/App";

describe("Products.vue", () => {
  // it("should render passed in prop to product component", () => {
  //   const msg = "Hello";
  //   const wrapper = shallowMount(Products, {
  //     propsData: { msg },
  //   });
  //   const text = wrapper.find("p").text();
  //   expect(text).toMatch(msg);
  // });
  // it('should have "Coffee" as name property in test data model', () => {

  //     const expected = "Coffee";
  //     const wrapper = shallowMount(Products);
  //     const actual = wrapper.vm.testData[0].name;

  //     expect(actual).toBe(expected)

  // })
  // it('should be 3 properties in testData', () => {
  //     const wrapper = shallowMount(Products);
  //     const expected = 3;
  //     const actual = wrapper.vm.testData.length;
  //     expect(actual).toBe(expected)
  // })

  // testing the Products
  it("should be 3 properties in data", () => {
    const wrapper = mount(App);
    const expected = 3;
    const actual = wrapper.vm.data.length;
    expect(actual).toBe(expected);
  });
});

// test that it contains ID, name, price and img

it("should contain ID, name, price and img", () => {
  const wrapper = mount(App);
  const data = wrapper.vm.data;

  let Obj = data[0];
  // console.log(Obj.id);

  expect(Obj).toHaveProperty("id");
  expect(Obj).toHaveProperty("name");
  expect(Obj).toHaveProperty("price");
  expect(Obj).toHaveProperty("img");
});

// testar data i App.vue
describe("App.vue", () => {
  it("should confirm data exists", () => {
    const wrapper = shallowMount(App);
    const data = wrapper.vm.data;

    expect(data).toBeDefined();
  });
});

// it("should have the text coffee as the 1st list item", () => {
//   const expected = "coffee";
//   const wrapper = mount(Products, {
//     propsData: { products: expected },
//   });

//   const wrapper2 = shallowMount(ProductItem);
//   const text2 = wrapper2.find("h3").text();

//   console.log(wrapper.props().products);
//   //const text = wrapper.props().products;
//   expect(text2).toBe(expected);
//   //expect(wrapper.props().products).toBe("coffee");
// });
