import axios from "axios";

const datauser = {
  namespaced: true,
  state: {
    dataUser: [],
  },
  getters: {
    getDataUser: (state) => state.dataUser,
  },
  actions: {
    async fetchDataUser({ commit }) {
      try {
        const data = await axios.get("http://localhost:8080/api/v1/user/");
        commit("SET_USERDATA", data.data['data']);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async postUserData({ commit }, userData) {
      try {
        const response = await axios.post("http://localhost:8080/api/v1/user/", userData);
        commit("ADD_USER", response.data); // Memanggil mutation ADD_USER dengan data baru yang diterima dari server
        return response.data; // Mengembalikan data respons dari server jika diperlukan
      } catch (error) {
        alert(error);
        console.error(error);
        throw error; // Melemparkan error untuk menangani di luar action jika diperlukan
      }
    },
    async deleteUserData({ commit }, userId) {
      try {
        await axios.delete(`http://localhost:8080/api/v1/user/${userId}`);
        commit("DELETE_USER", userId); // Memanggil mutation DELETE_USER dengan id user yang dihapus
      } catch (error) {
        alert(error);
        console.error(error);
        throw error; // Melemparkan error untuk menangani di luar action jika diperlukan
      }
    },
    // actions lainnya ...
  },
  mutations: {
    SET_USERDATA(state, datauser) {
      state.dataUser = datauser;
    },
    ADD_USER(state, newUser) {
      state.dataUser.push(newUser); // Menambahkan user baru ke array dataUser di state
    },
    DELETE_USER(state, userId) {
      state.dataUser = state.dataUser.filter(user => user.id !== userId); // Menghapus user dari array dataUser di state berdasarkan id
    },
    // mutations lainnya ...
  },
};

export default datauser;
