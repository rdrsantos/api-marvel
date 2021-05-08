<template>
<div>
  <header-principal/>
  <div class="container">
    <heroi-buscar/>
    <router-view/>
  </div>
</div>
</template>

<script>
import HeaderPrincipal from "@/components/HeaderPrincipal.vue";
import HeroiBuscar from "@/components/HeroiBuscar.vue";

export default {
  name: "App",
  components: {
    HeaderPrincipal,
    HeroiBuscar
  }
}
</script>


<style lang="scss">
$fonte-principal: Arial, "Helvetica Neue", Helvetica, sans-serif;

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: $fonte-principal;
}

a{
  text-decoration: none;
  color: #000;
}



.container{
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 20px;
}

</style>
