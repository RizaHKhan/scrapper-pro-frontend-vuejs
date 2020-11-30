// import _ from "lodash";

const snackbar = {
  namespaced: true,
  state: () => ({
    // messages: ["Error 1", "Error 2"]
    messages: []
  }),
  mutations: {
    addMessage(state, newMessage) {
      state.messages.push(newMessage);
    },
    removeShownMessage(state) {
      state.messages.shift();
    },
    removeAllMessages(state) {
      state.messages = [];
    }
  },
  getters: {
    getFirstMessage: state =>
      state.messages.length ? state.messages[0] : false
  }
};

export default snackbar;
