import { createStore } from 'vuex'
import {apiUrl} from  '@/api.js'
export default createStore({
  state: {
    herois: false,
    //DADOS PAPA PAGINAÇÃO
    heroisTotal: 0
  },
  mutations: {
    GET_HEROIS(state, payload){
      state.herois = payload
    },
    GET_HEROIS_TOTAL(state, payload){
      state.heroisTotal = payload
    }
  },
  actions: {
    getHerois(context){
      const heroiLocal = JSON.parse(localStorage.getItem('herois'))
      if(heroiLocal.length === 12){
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
    atualizarLocalStorage(context) {
      localStorage.removeItem("herois")
      const heroisPagina = JSON.stringify(context.state.herois)
      localStorage.setItem("herois", heroisPagina)
    }
  },
})
