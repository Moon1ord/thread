<template>
    <div id="articles_thread">
        <h1>Articles</h1>
        <ul>
            <li v-for="(item, index) in articles" :key="index">
                {{item.title}}
                {{item.description}}
            </li>
        </ul>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'articles_block',

    data(){
        return {
            articles : [],
            api_url: 'https://newsapi.org/v2/everything?q=russia&from=2019-09-12&to=2019-09-12&sortBy=popularity&apiKey=b06a304e06444c428de357a3edcadab8'
        }
    },

    methods : {
        getArticles(){
            axios.get(this.api_url).then(response => {this.articles = response.data.articles});

        }
    },

    mounted() {
      this.getArticles();  
    },

    
}

</script>

<style scoped>
    #articles_thread{
    }
</style>