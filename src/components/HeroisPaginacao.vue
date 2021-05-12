<template>
  <div class="paginacao" v-if="paginasTotal > 1">
    <p class="pagina-atual">Pagina {{this.$route.query.page}}</p>
    <ul>
      <router-link class="controles" @click="fetchPagina(0)" :to="{query: {page: 1}}">Primeira</router-link>
      <li v-for="pagina in paginas" :key="pagina">
        <router-link @click="fetchPagina((pagina-1) * 12)" :to="{name: 'Home', query: {page: pagina}}">{{pagina}}</router-link>
      </li>
      <router-link class="controles" @click="fetchPagina((paginasTotal-1)*12)" :to="{query: {page: paginasTotal}}">Ultima</router-link>
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
      const paginaAtual = Number(this.$route.query.page)
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

<style lang="scss">

.pagina-atual{
  color: #ED1D24;
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
    background: #ED1D24;
    color: #fff;
  }
}
.controles{
  padding: 10px;
  border-radius: 2px;
  margin: 5px;
  border: none;
  cursor: pointer;
  background: #ED1D24;
  color: #fff;
  box-shadow: 2px 2px 5px #0005;
}
</style>