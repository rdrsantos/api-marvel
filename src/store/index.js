import { createStore } from 'vuex'
import {apiUrl} from  '@/api.js'
export default createStore({
  state: {
    herois: false,
    heroiBuscado: false,

    //DADOS PAPA PAGINAÇÃO
    heroisTotal: 0
  },
  mutations: {
    GET_HEROIS(state, payload){
      state.herois = payload
    },
    GET_HEROI_BUSCADO(state, payload){
      state.heroiBuscado = payload
    },
    GET_HEROIS_TOTAL(state, payload){
      state.heroisTotal = payload
    }
  },
  actions: {
    getHerois(context){
      if(localStorage.getItem("herois")){
        const heroisArray = JSON.parse(localStorage.getItem('herois'))
        const heroisTotal= JSON.parse(localStorage.getItem('heroisTotal'))
        context.commit("GET_HEROIS", heroisArray)
        context.commit("GET_HEROIS_TOTAL", heroisTotal)
      } else {
        fetch(apiUrl)
        .then(response => response.json() )
        .then(response => {
          console.log(response)
          context.commit("GET_HEROIS", response.data.results)
          context.commit("GET_HEROIS_TOTAL", response.data.total)
          context.dispatch("salvarLocalStorage")
          console.log(context.state.heroisTotal)
        })
      }
    },
    salvarLocalStorage(context){
      const heroisJson = JSON.stringify(context.state.herois)
      const totalHerois = JSON.stringify(context.state.heroisTotal)
      localStorage.setItem("herois", heroisJson)
      localStorage.setItem("heroisTotal", totalHerois)
    },
    buscarHeroi(context, payload){
      fetch(`${apiUrl}&name=${payload}`).
      then(response => response.json())
      .then(response => {
        context.commit("GET_HEROI_BUSCADO", response.data.results)
      })
    },
    atualizarLocalStorage(context) {
      localStorage.removeItem("herois")
      const heroisPagina = JSON.stringify(context.state.herois)
      localStorage.setItem("herois", heroisPagina)
    }
  },
})
