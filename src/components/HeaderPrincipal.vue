<template>
  <header class="header">
      <router-link @click="getQuery" :to="{name: 'Home',query: {page: query}}" class="header-logo">MARVEL HEROIS</router-link>
  </header>
</template>

<script>
export default {
  name: "HeaderPrincipal",
  data() {
    return {
      query: 1
    }
  },
  methods: {
    getQuery(){
      let query = (localStorage.getItem("query")) ? JSON.parse(localStorage.getItem("query")) : 1
      this.query = query.page
    }
  }
}
</script>

<style scoped lang="scss">
.header{
  width: 100%;
  padding: 10px 0;
  background: #ED1D24;
  margin-bottom: 50px;
  text-align: center;
  a{
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
  }
}

</style>