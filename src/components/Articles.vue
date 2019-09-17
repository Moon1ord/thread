<template>
    <div id="articles_thread">
        <Header v-on:passQueryToParent="onSearchClick"/>
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
            api_url: 'https://newsapi.org/v2/everything',
            query : ''
        }
    },

    props: {
        apiKey : String,
    },

    methods : {
        getArticles(query){
            try {
                let request = new URL(this.api_url);
                let params = new URLSearchParams(request.search.slice(1));
                request.searchParams.append('q', query);
                request.searchParams.append('apiKey', this.apiKey);
                axios.get(request).then(response => {this.articles = response.data.articles;});
            } catch (error) {
                console.log('ERR while getting articles!')
            }
        },

        onSearchClick(value){
            this.$set(this, 'query', value);
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