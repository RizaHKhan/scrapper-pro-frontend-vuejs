import { mount } from "@vue/test-utils";
import Navigation from "@/components/Navigation.vue";

describe("Navigation.vue", () => {
  it("renders Scrapper-Pro logo verbiage on mount", () => {
    const wrapper = mount(Navigation);
    expect(wrapper.html().includes("Scrapper-Pro")).toBe(true);
  });

  it("", () => {
    
  });
});
