<template>
<section>
  <transition mode="out-in">
    <div v-if="heroi" class="heroi" key="heroi">
      <div class="heroi-img" :style="{backgroundImage: bgImage}">
      </div>
        <div class="heroi-sobre">
          <h2 class="heroi-nome">{{heroi.name}}</h2>
          <p v-if="heroi.description" class="heroi-descricao">{{heroi.description}}</p>
          <p v-else class="heroi-descricao">Descricão não encontrada</p>
      </div>
      <heroi-quadrinhos :heroiId="heroiId"/>
      <heroi-eventos :heroiId="heroiId" />
      <heroi-series :heroiId="heroiId" />
    </div>
    <loader v-else key="loader"/>
  </transition>
</section>
</template>

<script>
import {apiUrl} from "@/api.js"
import HeroiQuadrinhos from '@/components/Heroi/HeroiQuadrinhos.vue'
import HeroiEventos from '@/components/Heroi/HeroiEventos.vue'
import HeroiSeries from '@/components/Heroi/HeroiSeries.vue'
export default {
  components: {HeroiQuadrinhos,HeroiEventos, HeroiSeries},
  props: ["name"],
  data(){
    return{
      heroi: 0,
      heroiId: 0,
      bgImage: "",
    }
  },
  methods: {
    fetchHeroi() {
      fetch(`${apiUrl}&name=${this.name}`)
      .then(response => response.json())
      .then(response => {
        this.heroi = response.data.results[0]
        this.bgImage = `url('${response.data.results[0].thumbnail.path.replace('http', 'https')}.${response.data.results[0].thumbnail.extension}')`
        this.heroiId = response.data.results[0].id
      })
    }
  },
  created() {
    this.fetchHeroi()
  }
}
</script>

<style scoped lang="scss">
@import "../styles/gerais.scss";

.heroi{
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  @include responsivo(m) {
    display: block;
  }
}
.heroi-img{
  width: 100%;
  height: 400px;
  background-position: center;
  background-size: cover;
  border: 5px solid #ED1D24;
  border-radius: 4px;
}

.heroi-nome{
  font-size: 2.3rem;
  &::after{
    content: '';
    display: block;
    width: 100px;
    height: 5px;
    margin: 10px 0 20px 0;
    background: #ED1D24;
  }
}

.heroi-descricao{
  font-size: 1.2rem;
  line-height: 1.5rem;
  @include responsivo(m) {
    margin-bottom: 40px;
  }
}
</style>