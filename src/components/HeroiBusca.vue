<template>
  <div class="erro" v-if="avisoErro">
    {{avisoErro}}
  </div>
  <form class="heroi-buscar">
    <input type="text" placeholder="Buscar heroi. (ex: iron man, hulk, vision)" v-model="heroi" >
    <button @click.prevent="buscarHeroi(heroi)">Buscar</button>
  </form>
</template>

<script>
import {mapMutations, mapActions} from "vuex"
import {apiUrl} from "@/api.js"
export default {
  name: "HeroiBuscar",
  data(){
    return {
      heroi: '',
      avisoErro: false
    }
  },
  methods: {
    ...mapMutations(['GET_HEROIS', 'GET_HEROIS_TOTAL']),
    ...mapActions(['getHerois']),
    buscarHeroi(heroi){
      if(this.heroi.length > 0){
        fetch(`${apiUrl}&name=${heroi}`)
        .then(response => response.json())
        .then(response => {
          if(response.data.total > 0) {
            this.GET_HEROIS(response.data.results)
            this.GET_HEROIS_TOTAL(response.data.total)
            this.avisoErro = false
          } else {
            this.getHerois()
            this.avisoErro = "Verifique se você digitou corretamente. Obs: O nome precisa ser escrito em inglês"
          }
        })
      }else {
        this.getHerois()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
    font-size: 1rem;
    padding: 15px 5px;
    border: 4px solid #ED1D24;
    outline: none;
    border-radius: 4px;
  }
  button{
    height: 100%;
    padding: 0 20px;
    background: #ED1D24;
    border: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    font-size: 1rem;
    color: #fff;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    font-weight: bold;
  }
}


.erro{
  text-align: center;
  margin-bottom: 10px;
  color: #ED1D24;
  font-weight: bold;
}
</style>>


