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

export default user;
