import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    default: null,
    loaded: false
  },
  getters: {
  },
  mutations: {
    setDefault (state, payload) {
      state.default = payload;
    },
    setLoaded (state, payload) {
      state.loaded = payload;
    }
  },
  actions: {
    getDefault (context) {
      axios.get('http://localhost:3000/default')
        .then((data) => {
          context.commit("setDefault", data.data);
          context.commit("setLoaded", true);
        })
        .catch((error) => {
          console.log(error);
        })
    },
    getParse (context) {
      axios.get('http://localhost:3000/parse')
        .then(function (data) {
          context.commit("setDefault", data.data);
          context.commit("setLoaded", true);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    sendPacket (context, pack_with_ip) {
      axios.post('http://localhost:3000/send', pack_with_ip)
        .then(function (data) {
          context.commit("setDefault", data.data);
          context.commit("setLoaded", true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  modules: {
  }
})
