<template>
  <header class="header">
      <button @click="getQuery"  class="header-logo">MARVEL HÉROIS</button>
  </header>
</template>

<script>
export default {
  name: "HeaderPrincipal",
  methods: {
    getQuery(){
      let query = (localStorage.getItem("query")) ? JSON.parse(localStorage.getItem("query")).page : 1
      this.$router.push(`/?page=${query}`)
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
  button{
    color: $cor-fonte;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    border: none;
    background: transparent;
  }
}

</style>