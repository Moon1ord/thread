<template>
    <div id="articles_thread">
        <Header/>
        <ul>
            <li class="article" v-for="(item, index) in articles" :key="index">
                {{item.title}}
                <img class="article_img" v-bind:src="item.urlToImage">
                {{item.description}}
                <a v-bind:href="item.url" target="_blank">Link</a>
            </li>
        </ul>
    </div>
</template>

<script>

import axios from 'axios';
import Header from './Header.vue';

export default {
    name: 'articles_block',

    components : {
        Header
    },

    data(){
        return {
            articles : [],
            api_url: 'https://newsapi.org/v2/everything?q=russia&from=2019-09-12&to=2019-09-12&sortBy=popularity&apiKey=b06a304e06444c428de357a3edcadab8'
        }
    },

    methods : {
        getArticles(){
            axios.get(this.api_url).then(response => {this.articles = response.data.articles;});
        }
    },

    mounted() {
      this.getArticles();  
    },

    
}

</script>

<style scoped>
    .article{
        max-width: 700px;
        width:100%;
        margin-bottom: 20px;
    }

    .article_img{
        max-width: 700px;
        width: 100%;
        margin-bottom: 20px;
        margin-top: 20px
    }
</style>