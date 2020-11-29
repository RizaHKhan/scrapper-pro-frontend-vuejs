import { createStore } from "vuex";
import user from "./modules/user.js";
import snackbar from "./modules/snackbar.js";

export default createStore({
  modules: { user, snackbar }
});
