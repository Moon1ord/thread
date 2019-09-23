<template>
<div id="menu_container">
    <div id="navigation">
        <div id="logo">
            <img id="logo" src="../assets/logo.jpg">
        </div>
        <categories />
    </div>
</div>
</template>

<script>
import Categories from './Categories.vue';

export default {
    name: 'navigation',
    components  : {
        Categories
    }
}
</script>

<style scoped>
    #navigation{
        top : 0;
        position: sticky;
    }
    #menu_container{
        max-width: 300px;
        width: 100%;
        background-color: rgb(87, 87, 87)
    }
    #logo{
        max-width: 300px;
        width: 100%;
    }
</style>