<template>
  <div class="paginacao" v-if="paginasTotal.length > 1">
    <ul>
      <li v-for="(pagina, key) in paginas" :key="key+pagina">
        <router-link @click="fetchPagina(pagina)" :to="{query: {page: key+1}}">{{key+1}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {apiUrl} from "../api.js";
import {mapActions} from "vuex"
export default {
  props: {
    heroisPorPagina: {
      type: Number,
      default: 1
    },
    heroisTotal: {
      type: Number,
      default: 1
    }
  },
  computed: {
    paginas(){
      const paginaAtual = Number(this.$route.query.page)
      const range = 9
      const total = this.paginasTotal.length
      const pagesArray = []

      for(let i = 0; i <= total; i+=12){
        pagesArray.push(i)
      }

      pagesArray.splice(0, paginaAtual - Math.ceil(range / 2))
      pagesArray.splice(range, total)

      return pagesArray
    },
    paginasTotal() {
      let totalArray = []
      for(let i = 0; i <= this.heroisTotal; i+=12){
        totalArray.push(i)
      }
      return (totalArray.length !== Infinity) ? totalArray : 0
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
      })
    }
  }
}
</script>

<style lang="scss">
.paginacao{
  grid-column: 1 / -1;

}

li{
  display: inline-block;
}

li a {
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
  border: none;
  cursor: pointer;
  background: #fff;
  box-shadow: 2px 2px 5px #0005;
  &:hover{
    background: #ED1D24;
    color: #fff;
  }
}
</style>