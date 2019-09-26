<template>
    <div id="articles_thread">
        <Header v-on:passQueryToParent="onSearchClick"/>
        <ul class="list-group">
            <li class="article list-group-item" v-for="(item, index) in articles" :key="index">
                <h2>{{item.title}}</h2>
                <img class="article_img" v-bind:src="item.urlToImage">
                <p>{{item.description}}</p>
                <p>Source : {{item.source.name}}
                    <br>
                    URL : <a class="source_link" v-bind:href="item.url" target="_blank">{{item.url}}</a>
                    <br>
                    Author : {{item.author}}
                </p>
                <p>Data : {{item.publishedAt}}</p>
            </li>
        </ul>
    </div>
</template>

<script>

import axios from 'axios';
import Header from './Header.vue';
import Store from '../store';

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
            locale : Store.state.locale,
            category : Store.state.category
        }
    },

    watch: {
        query : function(){
            window.scrollTo(0, 0);
            this.getArticles(this.query);
        },

        locale : function(){
            window.scroll(0,0);
            this.getHeadlines(this.locale, this.category);
        },

        category : function(){
            window.scroll(0,0);
            this.getHeadlines(this.locale, this.category);
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

        getHeadlines(locale, category){
            try {
                let request = new URL(this.api_urls[1]);
                let params = new URLSearchParams(request.search.slice(1));

                request.searchParams.append('country', locale);
                if(category!= ''){
                    request.searchParams.append('category', category)    
                }

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

    mounted(){
        this.getHeadlines(this.locale, this.category);

        Store.subscribe((mutation, state) => {
            switch(mutation.type){
                case 'change_location' : 
                const loc = state.locale;
                    if(loc != this.locale){
                        this.locale = loc;
                    }
                case 'set_category' : 
                const cat = state.category;
                    if(cat != this.category){
                        this.category = cat;
                    }
            }
        })  
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

    .source_link{
        word-wrap: break-word;
    }
</style>