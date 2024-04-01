import { createStore } from 'vuex';
// import order from './modules/order';
import auth from './modules/auth'; 
import datauser from './modules/datauser';

const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    auth,
    datauser
  },
});

export default store;