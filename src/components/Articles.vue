<template>
    <div id="articles_thread">
        <Header v-on:passQueryToParent="onSearchClick"/>
        <ul class="list-group">
            <li class="article list-group-item" v-for="(item, index) in articles" :key="index">
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
            api_urls: ['https://newsapi.org/v2/everything',
                'https://newsapi.org/v2/top-headlines'],
            query : '',
            locale : ''
        }
    },

    watch: {
        query : function(){
            window.scrollTo(0, 0);
            this.getArticles(this.query);
        }
    },

    props: {
        apiKey : String,
    },

    methods : {
        getArticles(query){
            try {
                let request = new URL(this.api_urls[0]);
                let params = new URLSearchParams(request.search.slice(1));
                request.searchParams.append('q', query);
                request.searchParams.append('apiKey', this.apiKey);
                axios.get(request).then(response => {this.articles = response.data.articles;});
            } catch (error) {
                console.log('ERR while getting EVERYTHING articles!')
            }
        },

        getHeadlines(locale){
            try {
                let request = new URL(this.api_urls[1]);
                let params = new URLSearchParams(request.search.slice(1));
                request.searchParams.append('country', locale);
                request.searchParams.append('apiKey', this.apiKey);
                axios.get(request).then(response => {this.articles = response.data.articles;});
            } catch (error) {
                console.log('ERR while getting HEADLINES articles!')
            }
        },

        onSearchClick(value){
            this.$set(this, 'query', value);
        }
    },

    mounted() {
        this.locale = (window.navigator.languages[0]).slice(0, 2).toLowerCase()
        this.getHeadlines(this.locale);  
    },
}

</script>

<style scoped>
    .article{
        max-width: 900px;
        width:100%;
        margin-bottom: 20px;
        margin-left: 40px;
    }

    .article_img{
        max-width: 900px;
        width: 100%;
        margin-bottom: 20px;
        margin-top: 20px
    }
</style>