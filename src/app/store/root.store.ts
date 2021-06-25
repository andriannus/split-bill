import { createStore } from "vuex";

export default createStore({
  state: {
    isLoading: false,
  },
  mutations: {
    setLoadingStatus(state, status) {
      state.isLoading = status;
    },
  },
});
