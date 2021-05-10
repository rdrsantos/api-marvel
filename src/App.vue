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
    HeaderPrincipal
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

img{
  max-width: 100%;
  display: block;
}


.container{
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 20px;
}

</style>
