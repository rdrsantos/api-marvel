<template>
  <div>
    <form class="heroi-buscar">
      <input type="text" placeholder="Buscar heroi..." v-model="buscarHeroi">
      <button>Buscar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "HeroiBuscar",
  data() {
    return {
      heroiBuscar: ""
    }
  }
}
</script>

<style scoped lang="scss">
.heroi-buscar{
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  position: relative;
  input{
    width: 100%;
    padding: 10px 5px;
    border: 2px solid #ED1D24;
    outline: none;
  }
  button{
    padding: 10px 20px;
    background: #ED1D24;
    border: none;
    font-size: 1rem;
    color: #fff;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    font-weight: bold;
  }
}

</style>