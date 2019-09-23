<template>
  <div id="app">
    <navigation/>
    <articles :apiKey="api_key"/>
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
    },

    data() {
      return {
        api_key: 'b06a304e06444c428de357a3edcadab8'
      }
    },
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
