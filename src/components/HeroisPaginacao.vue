<template>
  <div class="paginacao" v-if="paginasTotal > 1">     
    <p class="pagina-atual">Pagina {{paginaAtual}}</p>
    <ul ref="pagina">
      <li v-for="pagina in paginas" :key="pagina">
        <router-link @click="fetchPagina((pagina-1) * 12)"  :to="{name: 'Home', query: {page: pagina}}">{{pagina}}</router-link>
      </li>
      <router-link class="controles" @click="fetchPagina(0)" :to="{query: {page: 1}}" >Primeira</router-link> --
      <router-link class="controles" @click="fetchPagina((paginasTotal-1)*12)" :to="{query: {page: paginasTotal}}">Última</router-link>
    </ul>
  </div>
</template>

<script>
import {apiUrl} from "../api.js";
import {mapActions, mapState} from "vuex"
export default {
  computed: {
    ...mapState(['heroisTotal']),
    paginas(){
      const paginaAtual = this.paginaAtual
      const range = 9
      const total = this.paginasTotal
      const pagesArray = []

      for(let i = 1; i <= total; i++){
        pagesArray.push(i)
      }

      pagesArray.splice(0, paginaAtual - Math.ceil(range / 2))
      pagesArray.splice(range, total)

      return pagesArray
    },
    paginasTotal() {
      const total = this.heroisTotal / 12
      return (total !== Infinity) ? Math.ceil(total) : 0
    },
    paginaAtual() {
      return (JSON.parse(localStorage.getItem("query"))) ? JSON.parse(localStorage.getItem("query")).page : 1
    }
  },
  methods: {
    ...mapActions(['atualizarLocalStorage']),
    fetchPagina(pagina) {
      this.$store.state.herois = false
      fetch(`${apiUrl}&offset=${pagina}`)
      .then(response => response.json())
      .then(r => {
        this.$store.commit("GET_HEROIS", r.data.results)
        this.atualizarLocalStorage()

        const query = JSON.stringify(this.$route.query)
        localStorage.setItem("query", query)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/gerais.scss";

.pagina-atual{
  color: $cor-principal;
  font-weight: bold;
}

.paginacao{
  grid-column: 1 / -1;
}

li{
  display: inline-block;
}

li a {
  display: block;
  padding: 10px;
  border-radius: 2px;
  margin: 5px;
  border: none;
  cursor: pointer;
  background: #fff;
  box-shadow: 2px 2px 5px #0005;
  &:hover{
    background: $cor-principal;
    color: #fff;
  }
}
.controles{
  display: inline-block;
  padding: 10px;
  border-radius: 2px;
  margin: 10px 5px;
  border: none;
  cursor: pointer;
  background: $cor-principal;
  color: $cor-fonte;
  box-shadow: 2px 2px 5px #0005;
}
</style>