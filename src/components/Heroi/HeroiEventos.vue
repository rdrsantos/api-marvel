<template>
  <div class="heroi-eventos">
    <div class="eventos" v-if="eventos">
      <h2 class="eventos-titulo">Eventos Relevantes</h2>
        <div v-for="evento in eventos" :key="evento.id" class="evento">
          <div class="evento-img">
          <img :src="evento.thumbnail.path.replace('http', 'https') +'.'+ evento.thumbnail.extension" :alt="evento.title">
        </div>
        <h3 class="evento-titulo">{{evento.title}}</h3>   
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
      eventos: false
    }
  },
  methods: {
    fetchEventos() {
      fetch(`https://gateway.marvel.com/v1/public/characters/${this.heroiId}/events?${chave}&limit=8`)
      .then(response => response.json())
      .then(response => {
        console.log(response.data)
        this.eventos = response.data.results
      })
    }
  },
  created() {
    this.fetchEventos()
  }
}
</script>

<style lang="scss" scoped>
.heroi-eventos{
  grid-column: 1/-1;
  margin-bottom: 50px;
}

.eventos{
  grid-column: 1/-1;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width:700px) {
    grid-template-columns: 1fr 1fr;
  }
  .eventos-titulo{
    grid-column: 1/-1;
    background: #ED1D24;
    color: #fff;
    padding: 10px 0;
  }
}

.evento-img{
  width: 240px;
  height: 240px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

}

.evento-titulo{
  color: #ED1D24;
  padding-top: 10px;
}
</style>