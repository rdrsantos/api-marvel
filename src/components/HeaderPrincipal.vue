<template>
  <header class="header">
      <h1 @click="getQuery"  class="header-logo">MARVEL HEROIS</h1>
  </header>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: "HeaderPrincipal",
  methods: {
    ...mapActions(['getHerois']),
    getQuery(){
      let query = (localStorage.getItem("query")) ? JSON.parse(localStorage.getItem("query")) : 1
      this.$router.push(`/?page=${query.page}`)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/gerais.scss";

.header{
  width: 100%;
  padding: 10px 0;
  background: $cor-principal;
  margin-bottom: 50px;
  text-align: center;
  h1{
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
  }
}

</style>