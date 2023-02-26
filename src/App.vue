<template>
  <div class="contenedor">
    <MiCabecera titulo="VisualTech" />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import MiCabecera from './components/MiCabecera.vue'
</script>

<style scoped>
.contenedor {
  width: 100%;
  height: 100%;
  background-color: #495369;
  margin: 0 auto;
}
</style>
