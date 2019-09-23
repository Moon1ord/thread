<template>
    <div id="header_container">
        <div id="header">
            <input id="search" type="text" name="searchString" v-model="query" placeholder="search news">
            <button id="search_button" type="submit" v-on:click="emitQueryToParent()">search</button>
        </div>
    </div>
</template>

<script>
export default {
    name : 'header_block',

    data() {
        return {
            query : ''     
        }
    },

    methods: {
        emitQueryToParent(event){
            this.$emit('passQueryToParent', this.query);
        }
    },
}
</script>

<style scoped>
    #header_container{
        margin-bottom: 100px;
        margin-left: 40px;
    }

    #search, #search_button{
        float: right;
        margin-top: 60px;
        margin-right: 10px;
    }

    #header{
        z-index: 1;
        width: 100%;
        max-width: 900px;
        height: 100%;
        max-height: 100px;
        position: fixed;
        background-color: rgb(182, 182, 182);
    }
</style>