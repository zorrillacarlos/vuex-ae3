import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mensaje:'Pasando mensaje por Vuex',
    dia: 'Juernes',
    cuadro:'Hola Mundo',
    rectangulo:'estoy bien',
    amigos:[],
    amigo: null
  },
  getters: {
    message (state){
      return `${state.cuadro} ${state.rectangulo}`
    }
  },
  mutations: {
    addAmigo(state, params){
      state.amigos = [...state.amigos, params]
    }
  },
  actions: {
    addAmigoAction ({commit}, params){
      commit ('addAmigo', params)
    }
  },
  modules: {
  }
})
