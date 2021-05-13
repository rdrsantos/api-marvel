import { createStore } from 'vuex'
import {apiUrl} from  '@/api.js'
export default createStore({
  state: {
    herois: false,

    //Dado nescessario para fazer a paginacao
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
    // fazer o fetch para pegar os herois e salvar no localStorage, se nao tiver nenhum dado salvo
    getHerois(context){
      if(JSON.parse(localStorage.getItem('herois'))){
        const heroisArray = JSON.parse(localStorage.getItem('herois'))
        const heroisTotal= JSON.parse(localStorage.getItem('heroisTotal'))
        context.commit("GET_HEROIS", heroisArray)
        context.commit("GET_HEROIS_TOTAL", heroisTotal)
      } else {
        fetch(apiUrl)
        .then(response => response.json() )
        .then(response => {
          context.commit("GET_HEROIS", response.data.results)
          context.commit("GET_HEROIS_TOTAL", response.data.total)
          context.dispatch("salvarLocalStorage")
        })
      }
    },
    salvarLocalStorage(context){
      const heroisJson = JSON.stringify(context.state.herois)
      const totalHerois = JSON.stringify(context.state.heroisTotal)
      localStorage.setItem("herois", heroisJson)
      localStorage.setItem("heroisTotal", totalHerois)
    },
    // atualizar o array com os dados de herois toda vez que navega nos botoes da paginacao, e salva no localStorage 
    atualizarLocalStorage(context) {
      localStorage.removeItem("herois")
      const heroisPagina = JSON.stringify(context.state.herois)
      localStorage.setItem("herois", heroisPagina)
    }
  },
})
