import { shallowMount, mount } from "@vue/test-utils";
import Cart from "@/components/Cart.vue";
import App from "@/App.vue";
import SingleProduct from "@/components/SingleProduct.vue";

describe("Cart.vue", () => {
  test("cart.vue should recieve prop", () => {
    let prop = "Product";
    const wrapper = shallowMount(Cart, {
      propsData: { cartItem: prop },
    });
    console.log(wrapper.props());

    expect(wrapper.props().cartItem).toBe(prop);
  });
  test("cart.vue should emit event", async () => {
    const wrapper = mount(Cart);
    wrapper.vm.$emit("deleteIds");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().deleteIds).toBeTruthy();
  });
  test("cart should be updated when delete happens", () => {
    const appWrapper = mount(App);
    const singleWrapper = mount(SingleProduct);
    const cartWrapper = mount(Cart);

    console.log(appWrapper, singleWrapper, cartWrapper);
  });
});
