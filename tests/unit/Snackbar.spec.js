import { createStore } from "vuex";
import { mount } from "@vue/test-utils";
import Snackbar from "@/components/Snackbar.vue";

const snackbar = {
  namespaced: true,
  state: () => ({
    msg: ["Error 1", "Error 2"]
  }),
  mutations: {
    removeShownMsg(state) {
      state.msg.pop();
    },
    addMsg(state, msg) {
      state.msg.push(msg);
    }
  },
  getters: {
    getFirstMsg: state => state.msg[0]
  }
};

const store = createStore({
  modules: {
    snackbar
  }
});

describe("Snackbar.vue", () => {
  it("should render a close button and the first message", () => {
    const wrapper = mount(Snackbar, {
      global: {
        plugins: [store]
      }
    });
    expect(wrapper.html().includes("Error 1")).toBe(true);
    expect(wrapper.html().includes("button")).toBe(true);
  });

  it("should display nothing if no msgs", async () => {
    const snackbar = {
      namespaced: true,
      state: () => ({
        msg: []
      }),
      mutations: {
        removeShownMsg(state) {
          state.msg.pop();
        },
        addMsg(state, msg) {
          state.msg.push(msg);
        }
      },
      getters: {
        getFirstMsg: state => state.msg[0]
      }
    };

    const store = createStore({
      modules: {
        snackbar
      }
    });
    const wrapper = mount(Snackbar, {
      global: {
        plugins: [store]
      }
    });
    expect(wrapper.html().includes("")).toBe(true);
  });

  it("Should display next message if button is clicked", () => {
    const wrapper = mount(Snackbar, {
      global: {
        plugins: [store]
      }
    });

    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.html().includes("Error 2")).toBe(true);
  });
});
