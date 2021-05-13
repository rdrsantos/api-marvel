<template>
  <div class="loader">
  </div>
</template>

<script>
export default {
  name: "Loader",
}
</script>

<style lang="scss" scoped>
@import "../styles/gerais.scss";

.loader{
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border: 10px solid $cor-principal;
  border-top-color: transparent;
  border-right-color: transparent;
  border-radius: 50%;
  animation: loader 1s infinite ease-in;
}

@keyframes loader {
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
</style>