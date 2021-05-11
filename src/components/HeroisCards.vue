<template>
  <form class="heroi-buscar">
    <input type="text" placeholder="Buscar heroi. (ex: iron man, hulk, vision)" v-model="heroi" >
    <button @click.prevent="buscarHeroi(heroi)">Buscar</button>
  </form>
    <div class="heroi-container" v-if="herois">
      <div 
        v-for="heroi in herois"
        :key="heroi.id" 
        class="heroi-card"
      >
      <router-link :to="{name: 'heroi', params: {name: heroi.name}}">
        <div class="heroi-img" >
          <img  :src="heroi.thumbnail.path + '.' + heroi.thumbnail.extension">
        </div>
        
          <h2 class="heroi-name">{{heroi.name}}</h2>
        </router-link>
      </div>
    <herois-paginacao :heroisTotal="heroisTotal" :heroisPorPagina="heroisPorPagina"/>
    </div>
  <loader v-else/>
</template>

<script>
import HeroisPaginacao from "@/components/HeroisPaginacao.vue"
import {mapState, mapActions} from 'vuex'

export default {
  name: 'HeroisCards',
  data() {
    return {
      heroi: "",
      heroisPorPagina: 12,
    }
  },
  components:{
    HeroisPaginacao
  },
  methods: {
    ...mapActions(['getHerois', 'salvarLocalStorage', "buscarHeroi"]),
  },
  computed: {
    ...mapState(['herois', 'heroiBuscado', 'heroisTotal']),

  },
  created() {
    this.getHerois()
  }
}
</script>

<style lang="scss" scoped>
.heroi-container{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
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
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .heroi-img{
    width: 100%;
    height: 300px;
    img{
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      height: 100%;
      object-fit: cover;
    }
    @media screen and(max-width:700px) {
      height: 200px;
    }
  }
  .heroi-name{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    text-align: center;
    background: #ED1D24;
    color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

}
</style>