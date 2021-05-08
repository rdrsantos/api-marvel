<template>
  <header class="header">
      <router-link to="/" class="header-logo">MARVEL HEROIS</router-link>
  </header>
</template>

<script>
export default {
  name: "HeaderPrincipal"
}
</script>

<style scoped lang="scss">
.header{
  width: 100%;
  padding: 10px 0;
  background: #ED1D24;
  margin-bottom: 50px;
  text-align: center;
  .router-link-active, .router-link-exact-active{
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
  }
}

</style>