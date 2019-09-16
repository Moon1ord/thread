<template>
  <div id="app">
    <navigation />
    <articles />
    <categories />
  </div>
</template>

<script>
import Categories from './components/Categories.vue';
import Navigation from './components/Navigation.vue';
import Articles from './components/Articles.vue';

export default {
  name: 'app',
  components: {
    Categories,
    Articles,
    Navigation
  }
}
</script>

<style>
html, body {
  height: 99%;
}
</style>

<style scoped>
  #app{
    display: flex;
    flex-direction: row;
  }
</style>
