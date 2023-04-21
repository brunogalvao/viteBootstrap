<script setup lang="ts"></script>

<template>
  <div class="container mx-auto">
    <div class="content">
      <div class="conteudo">1</div>
      <div class="conteudo">2</div>
      <div class="conteudo">3</div>
      <div class="conteudo">4</div>
      <div class="conteudo">5</div>
      <div class="conteudo">6</div>
      <div class="conteudo">7</div>
      <div class="conteudo">8</div>
      <div class="conteudo">9</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  @apply grid
  grid-flow-col
  grid-cols-3
  grid-rows-3
  gap-4
  mt-8;
}
.conteudo {
  @apply bg-purple-500
  text-center
  h-40
  flex
  items-center
  justify-center
  rounded-lg;
}
h1 {
  @apply text-3xl font-bold m-10;
}
</style>
