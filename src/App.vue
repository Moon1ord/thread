<template>
  <div id="app">
    <navigation/>
    <articles/>
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue';
import Articles from './components/Articles.vue';

export default {
  name: 'app',
  components: {
    Articles,
    Navigation,
    }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}
</style>

<style scoped>
  #app{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
