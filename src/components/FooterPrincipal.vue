<template>
  <div>
    <p><strong>MARVEL HÉROIS por <a href="https://rdrdev.netlify.app">Rodrigo Silva</a> - 2021.</strong></p>
  </div>
</template>

<script>
export default {
  name: "HeaderPrincipal"
}
</script>

<style lang="scss" scoped>
@import "../styles/gerais.scss";
  div{
    width: 100%;
    background: $cor-principal;
    padding: 10px 0;
  }
  p{
    color: $cor-fonte;
    text-align: center;
    a{
      color: $cor-fonte;
      &:hover{
        text-decoration: underline;
      }
    }
  }
</style>