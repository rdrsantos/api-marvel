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
.heroi-quadrinhos{
  grid-column: 1/-1;
  margin-bottom: 50px;
}

.quadrinhos{
  grid-column: 1/-1;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width:700px) {
    grid-template-columns: 1fr 1fr;
  }
  .quadrinhos-titulo{
    grid-column: 1/-1;
    background: #ED1D24;
    color: #fff;
    padding: 10px 0;
  }
}

.quadrinho-img{
  height: 340px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
   object-position: top;
  }

}

.quadrinho-titulo{
  color: #ED1D24;
  padding-top: 10px;
}
</style>