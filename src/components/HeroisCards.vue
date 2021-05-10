<template>
  <form class="heroi-buscar">
    <input type="text" placeholder="Buscar heroi. (ex: iron man, hulk, vision)" v-model="heroi" >
    <button @click.prevent="buscarHeroi">Buscar</button>
  </form>
        <!-- <herois-paginacao :heroisTotal="heroisTotal" :heroisPorPagina="heroisPorPagina"/> -->
  <div class="heroi-container" v-if="herois">
      <div 
        v-for="heroi in herois" 
        :key="heroi.id" 
        class="heroi-card"
      >
        <div class="heroi-img" >
          <img  :src="heroi.thumbnail.path + '.' + heroi.thumbnail.extension">
        </div>
        <router-link :to="{name: 'heroi', params: {name: heroi.name}}">
          <h2 class="heroi-info">{{heroi.name}}</h2>
        </router-link>
        <!-- <p class="heroi-descricao">{{heroi.description}}</p> -->
    </div>
    <herois-paginacao :heroisTotal="heroisTotal" :heroisPorPagina="heroisPorPagina"/>
  </div>
  <loader v-else/>
</template>

<script>
import {api, apiUrl} from "../api.js";
import HeroisPaginacao from "@/components/HeroisPaginacao.vue"

export default {
  name: 'HeroisCards',
  data() {
    return {
      herois: 0, // defini como 0 para retornar false
      heroi: "",
      heroisPorPagina: 12,
      heroisTotal: 0
    }
  },
  components:{
    HeroisPaginacao
  },
  methods: {
    fetchApi(){
      api.get(`${apiUrl}`)
        .then(r => {
          this.herois = r.data.data.results
          this.heroisTotal = Number(r.data.data.total)
      })
    },
    buscarHeroi(){
      if(this.heroi) {
        this.herois = 0
        api.get(`${apiUrl}&name=${this.heroi}`)
          .then(r => {
            this.herois = r.data.data.results
        })
      }
    }
  },
  created() {
    this.fetchApi()
  }
}
</script>

<style lang="scss" scoped>
.heroi-container{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}


.heroi-buscar{
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  position: relative;
  input{
    width: 100%;
    padding: 10px 5px;
    border: 2px solid #ED1D24;
    outline: none;
  }
  button{
    padding: 10px 20px;
    background: #ED1D24;
    border: none;
    font-size: 1rem;
    color: #fff;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    font-weight: bold;
  }
}

.heroi-card{
  background-color: #ddd;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .heroi-info{
    text-align: center;
    background: #ED1D24;
    color: #fff;
  }

}
</style>