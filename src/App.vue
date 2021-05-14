<template>
<div id="app">
  <header-principal/>
  <main class="container">
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <footer-principal />
</div>
</template>

<script>
import HeaderPrincipal from "@/components/HeaderPrincipal.vue";
import FooterPrincipal from "@/components/FooterPrincipal.vue";

export default {
  name: "App",
  components: {
    HeaderPrincipal,
    FooterPrincipal
  },
  methods: {
    getQueryLocalStorage() {
      if(!JSON.parse(localStorage.getItem("query"))){
        localStorage.setItem("query", JSON.stringify({page: 1}))
      }
    }
  },
  created() {
    this.getQueryLocalStorage()
  }
}
</script>


<style lang="scss">
@import "./styles/gerais.scss";


#app{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container{
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 20px;
  flex: 1;
  @include responsivo(t){
    max-width: 700px;
  }
  @include responsivo(m) {
    max-width: 100%;
    margin: 0 10px;
  }
}

//animacões
.v-enter-from, .v-leave-to{
  opacity: 0;
}
.v-enter-from{
  transform: translate3d(0, -20px,0);
}
.v-leave-to{
  transform: translate3d(0, 20px,0);
}
.v-enter-active, .v-leave-active{
  transition: all 0.3s;
}
</style>
