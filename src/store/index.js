import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import Vue, { useAttrs } from 'vue';
import Vuex from 'vuex';
import data from "../datas/movies.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    getState(state) {
      return state.todos
    },
    getStates(state) {
      return state.todos.filter(x => x.done)
    }
  }, 
  mutations: {
    loadStore(state) {
			if(localStorage.getItem('store')) {
          this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store'))));
        }
       
			},
      nameScs(state){
          state.todos = data
      },
      cnhIndx(state, payload){
        const indx = state.hel.find(idx => idx.id == payload)
        indx.done = !indx.done
      }
  },
  actions: {
    CNH_INDX(context, payload){
      context.commit('cnhIndx',payload)
    }
  }, 
  modules: {
  },
});
