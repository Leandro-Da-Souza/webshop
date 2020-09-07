import { shallowMount } from "@vue/test-utils";
import SingleProduct from "@/components/SingleProduct";

describe("SingleProduct.vue", () => {
  test("component should recieve props", () => {
    const wrapper = shallowMount(SingleProduct, {
      propsData: { single: "Hello" },
    });
    expect(wrapper.props().single).toBe("Hello");
  });

  test("test router", () => {
    const $route = {
      path: "/",
    };

    const wrapper = shallowMount(SingleProduct, {
      mocks: {
        $route,
      },
      propsData: {
        single: "",
      },
    });
    expect(wrapper.vm.$route.path).toBe("/");
  });
});
