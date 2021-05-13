<template>
  <div class="heroi-series" v-if="series.length">
    <div class="series" v-if="series">
      <h2 class="series-titulo">Séries Relevantes</h2>
        <div v-for="serie in series" :key="serie.id" class="serie">
          <div class="serie-img">
          <img :src="serie.thumbnail.path.replace('http', 'https') +'.'+ serie.thumbnail.extension" :alt="serie.title">
        </div>
        <h3 class="serie-titulo">{{serie.title}}</h3>   
      </div>
    </div>
    <loader v-else />
  </div>
</template>

<script>
import {chave} from "@/api.js"

export default {
  name: "HeroiQuadrinhos",
  props: ["heroiId"],
  data() {
    return {
      series: false
    }
  },
  methods: {
    fetchSeries() {
      fetch(`https://gateway.marvel.com/v1/public/characters/${this.heroiId}/series?${chave}&limit=8`)
      .then(response => response.json())
      .then(response => {
        this.series = response.data.results
      })
    }
  },
  created() {
    this.fetchSeries()
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/gerais.scss";
.heroi-series{
  grid-column: 1/-1;
  margin-bottom: 50px;
}

.series{
  grid-column: 1/-1;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  @include responsivo(t) {
    grid-template-columns: repeat(3, 1fr); 
  }
  @include responsivo(m) {
    grid-template-columns: 1fr 1fr; 
  }
  .series-titulo{
    grid-column: 1/-1;
    background: $cor-principal;
    color: $cor-fonte;
    padding: 10px 0;
  }
}

.serie-img{
  width: 100%;
  height: 240px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.serie-titulo{
  color: $cor-principal;
  padding-top: 10px;
}
</style>