<template>
<div class="heroi-info">
    <div class="heroi-img" :style="{backgroundImage: bgImage}">
    </div>
      <div class="heroi-sobre">
        <h2 class="heroi-nome">{{heroi.name}}</h2>
        <p v-if="heroi.description" class="heroi-descricao">{{heroi.description}}</p>
        <p v-else class="heroi-descricao">Descricão não encontrada</p>
    </div>
</div>
</template>

<script>
export default {
  name: "HeroiInfo",
  props: ['heroiId']
}
</script>

<style>

</style>