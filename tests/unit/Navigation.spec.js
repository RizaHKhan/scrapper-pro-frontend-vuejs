import { createStore } from "vuex";
import { mount } from "@vue/test-utils";
import Navigation from "@/components/Navigation.vue";

const user = {
  namespaced: true,
  state: () => ({
    _id: "",
    username: "khanr",
    token: "",
  }),
  getters: {
    loggedIn: (state) => (state.token ? true : false),
  },
};

const store = createStore({
  modules: {
    user,
  },
});

describe("Navigation.vue", () => {
  it("renders Scrapper-Pro logo verbiage on mount", () => {
    const wrapper = mount(Navigation, {
      global: {
        plugins: [store],
      },
    });
    console.log(wrapper.html());
    expect(wrapper.html().includes("Scrapper-Pro")).toBe(true);
  });

  it("renders login form if not logged in", () => {
    const wrapper = mount(Navigation, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.findComponent("form").exists()).toBe(true);
  });

  it("renders logout button if logged in", () => {
    const wrapper = mount(Navigation, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.html().includes("Logout")).toBe(true);
  });
});
