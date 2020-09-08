import { mount } from "@vue/test-utils";
import Header from "@/components/Header";

describe("Header.vue", () => {
  it("navigates to home when clicked", async () => {
    const $route = {
      path: "/",
    };

    const wrapper = mount(Header, {
      mocks: {
        $route,
      },
    });
    let element = wrapper.find("h1");
    await element.trigger("click");
    await expect(wrapper.vm.$route.path).toBe("/");
  });
});
