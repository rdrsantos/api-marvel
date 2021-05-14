<template>
<section>
<transition mode="out-in">
  <div class="heroi-container" v-if="herois" key="heroi-container">
    <div 
      v-for="heroi in herois"
      :key="heroi.id" 
      class="heroi-card"
    >
      <router-link :to="{name: 'heroi', params: {name: heroi.name}}">
        <div class="heroi-img" >
          <img  :src="heroi.thumbnail.path.replace('http', 'https') + '.' + heroi.thumbnail.extension">
        </div>
        <h2 class="heroi-name">{{heroi.name}}</h2>
      </router-link>
    </div>
    <herois-paginacao />
  </div>
  <loader v-else key="loader"/>
</transition>
</section>
</template>

<script>
import HeroisPaginacao from "@/components/HeroisPaginacao.vue"
import {mapState, mapActions} from 'vuex'

export default {
  name: 'HeroisCards',
  components:{
    HeroisPaginacao
  },
  methods: {
    ...mapActions(['getHerois', 'salvarLocalStorage', "buscarHeroi"]),
  },
  computed: {
    ...mapState(['herois', 'heroisTotal']),
  },
  created() {
    this.getHerois()
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/gerais.scss";
.heroi-container{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  @include responsivo(t){
    grid-template-columns: repeat(3, 1fr);
  }
  @include responsivo(m) {
    grid-template-columns: 1fr 1fr;
  }
}

.heroi-card{
  border-radius: 4px;
  .heroi-img{
    height: 300px;
    @include responsivo(m) {
      height: 200px;
    }
    img{
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      height: 100%;
      object-fit: cover;
      @include responsivo(m) {
        width: 100%;
      }
    }
  }
  .heroi-name{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    text-align: center;
    background: $cor-principal;
    color: $cor-fonte;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    font-size: 1.1rem;
    padding: 5px;
  }

}
</style>