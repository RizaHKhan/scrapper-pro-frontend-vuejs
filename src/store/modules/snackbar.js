const snackbar = {
  namespaced: true,
  state: () => ({
    msg: ["Error 1", "Error 2"]
  }),
  mutations: {
    addMsg(state, msg) {
      state.msg.push(msg);
    },
    removeShownMsg(state) {
      state.msg.shift();
    }
  },
  getters: {
    getFirstMsg: state => (state.msg[0] ? state.msg[0] : false)
  }
};

export default snackbar;
