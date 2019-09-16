<template>
<div id="menu_container">
    <div id="navigation">
        <div id="logo">
            <h1>Logo</h1>
        </div>
        <h1>Menu</h1>
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
    #logo{
        max-width: 250px;
        width : 100%;
        background-color: aquamarine;
    }

    #navigation{
        top : 0;
        position: sticky;
    }
    #menu_container{
        max-width: 250px;
        width: 100%;
    }
</style>