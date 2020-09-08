
import { shallowMount, mount } from "@vue/test-utils";
import Cart from "@/components/Cart.vue";
// import App from "@/App.vue";
// import SingleProduct from "@/components/SingleProduct.vue";

describe("Cart.vue", () => {
  test("is a Vue instance", () => {
    let prop = "Product";
    const wrapper = mount(Cart, {
      propsData: { cartItem: prop },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("cart.vue should recieve prop", () => {
    let prop = "Product";
    const wrapper = shallowMount(Cart, {
      propsData: { cartItem: prop },
    });
    console.log(wrapper.props());

    expect(wrapper.props().cartItem).toBe(prop);
  });
  test("cart.vue should emit event", async () => {
    let prop = "product";
    const wrapper = mount(Cart, {
      propsData: { cartItem: prop },
    });
    wrapper.vm.$emit("deleteItem");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().deleteItem).toBeTruthy();
  });
  // test("cart should be updated when delete happens", () => {
  //   const appWrapper = mount(App);
  //   const singleWrapper = mount(SingleProduct);
  //   const cartWrapper = mount(Cart);

  //   console.log(appWrapper, singleWrapper, cartWrapper);
  // });

  //testing the delete in cart
  test("calls deletItem when 'x' is clicked", () => {
    let prop = "Product";
    const wrapper = mount(Cart, {
      propsData: { cartItem: prop },
    });

    const deleteItem = jest.fn();

    wrapper.setMethods({
      deleteItem: deleteItem,
    });

    wrapper.find("button").trigger("click");

    expect(deleteItem).toHaveBeenCalled();
  });
});
