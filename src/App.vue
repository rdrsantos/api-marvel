<template>
<div>
  <header-principal/>
  <div class="container">
    <router-view/>
  </div>
</div>
</template>

<script>
import HeaderPrincipal from "@/components/HeaderPrincipal.vue";

export default {
  name: "App",
  components: {
    HeaderPrincipal,
  },
  methods: {
    getDadosLocalStorage() {
      // Pegar todos os dados que foram salvos no local storage e atualizar no site
      if(localStorage.getItem("query")){
        const query = JSON.parse(localStorage.getItem("query"))
        this.$router.push(`/?page=${query.page}`)
      }
    }
  },
  created() {
    this.getDadosLocalStorage()
  }
}
</script>


<style lang="scss">


.container{
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 20px;
  @media screen and (max-width: 700px) {
    max-width: 100%;
    margin: 0 10px;
  }
}

</style>
