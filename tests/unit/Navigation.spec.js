import { shallowMount } from "@vue/test-utils";
import Navigation from "@/components/Navigation";

describe("Navigation.vue", () => {
  test("that component has router-link available", () => {
    const wrapper = shallowMount(Navigation, {
      stubs: ["router-link", "router-view"],
    });

    console.log(wrapper.find("router-link").selector);
    expect(wrapper.find("router-link").selector).toBeTruthy();
  });
});
