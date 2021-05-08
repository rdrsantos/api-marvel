<template>
  <div class="heroi-container">
    <div v-for="heroi in herois" :key="heroi.id" class="heroi-card">
      <h2 class="heroi-titulo">{{heroi.name}}</h2>
      <p class="heroi-descricao">{{heroi.description}}</p>
      <div class="heroi-btn">
        <router-link to="/">Ver mais</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from "md5"
import {api} from "../api.js"
export default {
  name: 'HeroisCards',
  data() {
    return {
      herois: []
    }
  },
  methods: {
    fetchApi(){
      const ts = Number(new Date())
      const apikey = "0e2120123bf95e58fd169151bf7f7445"
      const pk = "b1079906fb9f3f28cda605af587fa644c67078ec"
      const hash = md5(ts+pk+apikey)// gera chave para acessar a api 

    api.get(`/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=12`)
      .then(r => {
        console.log(r)
        this.herois = r.data.data.results
        })
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
.heroi-card{
  padding: 10px;
  background-color: #ddd;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  .heroi-titulo{
    margin-bottom: 10px;
  }
  .heroi-btn {
    width: 100%;
    text-align: center;
    padding: 10px 20px;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translate3d(-100%, 0,0);
    transition: all .3s forwards;
    background: #ED1D24;
    color: #fff;
    a{
      color: #fff;
      font-weight: bold;
    }
  }
  &:hover .heroi-btn {
        transform: translate3d(0, 0,0);

  }
}
</style>