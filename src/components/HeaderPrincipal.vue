<template>
  <header class="header">
      <h1 @click="getQuery"  class="header-logo">MARVEL HÉROIS</h1>
  </header>
</template>

<script>
export default {
  name: "HeaderPrincipal",
  methods: {
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
    color: $cor-fonte;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
  }
}

</style>