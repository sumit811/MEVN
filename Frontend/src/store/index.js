import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://localhost:7001';

export default new Vuex.Store({
  state: {
    users: [],
    msg: '',
    editUserID: '',
  },
  getters: {
    getUser: (state) => (id) => {
      return state.users.find(e => e.id == id)
    }
  },
  mutations: {
    SET_EDIT_USER(state,payload){
      state.editUserID = payload;
    },
    SET_MSG(state, payload) {
      state.msg = payload
    },
    UPDATE_USER(state, payload) {
      let findIndex = state.users.findIndex(e => e.id == payload.id)
      Vue.set(state.users, findIndex, payload);
    },
    REMOVE_USER(state, payload) {
      let findIndex = state.users.findIndex(e => e.id == payload)
      state.users.splice(findIndex, 1)
    },
    SET_USERS(state, payload) {
      state.users = payload
    },
    ADD_USER(state, payload) {
      state.users.unshift(payload)
    }
  },
  actions: {
    updateUser({ commit }, detail) {
      return new Promise((resolve, reject) => {
        axios.patch('/', detail)
          .then(response => {
            commit('UPDATE_USER', response.data[0]);
            resolve({'done':true});
            commit('SET_MSG','Successfuly Updated');
            commit('SET_EDIT_USER','');
          })
          .catch(error => {
            console.log(error);
            reject(error)
          })
      })
    },
    deleteUser({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios.delete(`/${id}`)
          .then((response) => {
            commit('REMOVE_USER', id)
            commit('SET_MSG','Successfuly Deleted');
            resolve(response);
          })
          .catch((error) => {
            console.info('deleteUser', error)
            reject(error)
          })
      })
    },
    fetchUsers({ commit }) {
      axios.get('/')
        .then(response => {
          commit('SET_USERS', response.data)
        })
        .catch(error => {
          console.log('fetchUsers', error);
        });
    },
    addUser(context, user) {
      axios.post('/', user)
        .then(response => {
          context.commit('ADD_USER', response.data[0])
          context.commit('SET_MSG','Successfuly Added');
        }).catch(error => {
          console.warn('adduser', error)
        })
    }
  },
  modules: {
  }
})
