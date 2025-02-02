import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced:true,
  state: {
    Items: []
  },
  getters: {
    Items(state){
      return state.Items;
    }
  },
  mutations: {
    CargarItems(state,data){
      state.Items = data;
    }
  },
  actions: {
    cargarImagenes: async function ({commit}) {
      try {
        const setting = {
          method: 'GET'
        };
        const url = 'https://picsum.photos/v2/list?page=2&limit=100';
        const data = await fetch(url, setting);
        const json = await data.json();
        commit('CargarItems', json);
      } catch (error) {
        console.log(error);
      }
    }
  }  

}