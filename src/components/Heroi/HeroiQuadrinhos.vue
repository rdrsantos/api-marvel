<template>
  <div class="heroi-quadrinhos">
    <div class="quadrinhos" v-if="quadrinhos">
      <h2 class="quadrinhos-titulo">HQ'S Relevantes</h2>
      <div v-for="quadrinho in quadrinhos" :key="quadrinho.id" class="quadrinho">
        <div class="quadrinho-img">
            <img :src="quadrinho.thumbnail.path.replace('http', 'https') +'.'+ quadrinho.thumbnail.extension" :alt="quadrinho.title">
        </div>
        <h3 class="quadrinho-titulo">{{quadrinho.title}}</h3>   
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
      quadrinhos: false
    }
  },
  methods: {
    fetchQuadrinhos() {
      fetch(`https://gateway.marvel.com/v1/public/characters/${this.heroiId}/comics?${chave}&limit=8`)
      .then(response => response.json())
      .then(response => {
        this.quadrinhos = response.data.results
      })
    }
  },
  created() {
    this.fetchQuadrinhos()
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/gerais.scss";

.heroi-quadrinhos{
  grid-column: 1/-1;
  margin-bottom: 50px;
}

.quadrinhos{
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
  .quadrinhos-titulo{
    grid-column: 1/-1;
    background: $cor-principal;
    color: $cor-fonte;
    padding: 10px 0;
  }
}

.quadrinho-img{
  width: 100%;
  height: 340px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

}

.quadrinho-titulo{
  color: $cor-principal;
  padding-top: 10px;
}
</style>