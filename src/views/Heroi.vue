<template>
<section>

  <div v-if="heroi" class="heroi">
    <div class="heroi-header">
      <div class="heroi-img" :style="{backgroundImage: bgImage}">
      </div>
      <div class="heroi-sobre">
        <h2 class="heroi-nome">{{heroi.name}}</h2>
        <p v-if="heroi.description" class="heroi-descricao">{{heroi.description}}</p>
        <p v-else class="heroi-descricao">Descricão não encontrada</p>
      </div>
    </div>
  </div>
  <loader v-else />
</section>
</template>

<script>
import {api, apiUrl} from "@/api.js"
export default {
  props: ["name"],
  data(){
    return{
      heroi: 0,
      img: '',
      bgImage: ""
    }
  },
  methods: {
    fetchHeroi() {
      api.get(`${apiUrl}&name=${this.name}`)
      .then(r => {
        this.heroi = r.data.data.results[0]
        this.bgImage = `url('${r.data.data.results[0].thumbnail.path}.${r.data.data.results[0].thumbnail.extension}')`
      })
    }
  },
  created() {
    this.fetchHeroi()
  }
}
</script>

<style scoped lang="scss">
.heroi-header{
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
}
.heroi-img{
  height: 400px;
  background-position: center;
  background-size: cover;
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
}

.heroi-infos__titulo{
  font-size: 2.3rem;
  margin-top: 20px;
  &::after{
    content: '';
    display: block;
    width: 100px;
    height: 5px;
    margin: 10px 0 20px 0;
    background: #ED1D24;
  }
}
</style>