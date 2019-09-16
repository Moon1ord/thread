<template>
    <div id="header_container">
        <div id="header">
        </div>
    </div>
</template>

<script>
export default {
    name : 'header_block'
}
</script>

<style scoped>
    #header_container{
        margin-bottom: 100px;
    }

    #header{
        width: 100%;
        max-width: 780px;
        height: 100%;
        max-height: 75px;
        position: fixed;
        background-color: cornflowerblue;
    }
</style>