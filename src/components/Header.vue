<template>
    <div id="header_container">
        <div id="header">
            <input type="text" name="searchString" v-model="query" placeholder="search news">
            <button type="submit" v-on:click="emitQueryToParent()">search</button>
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

    #header{
        width: 100%;
        max-width: 900px;
        height: 100%;
        max-height: 75px;
        position: fixed;
        background-color: rgb(182, 182, 182);
    }
</style>