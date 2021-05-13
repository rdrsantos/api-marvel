<template>
  <div>
    <heroi-busca/>
    <herois-cards/>
  </div>
</template>

<script>
import HeroisCards from "@/components/HeroisCards.vue";
import HeroiBusca from '../components/HeroiBusca.vue';

export default {
  name: "home",
  components:{
    HeroisCards,
    HeroiBusca,
  }
}
</script>