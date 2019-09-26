<template>
    <div id="accordion">
        <div class="card">
            <div class="card-header" id="headingOne">
                <h4 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#countries_content" aria-expanded="false" aria-controls="collapseOne">
                        Headlines
                    </button>
                </h4>
            </div>

            <div id="countries_content" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">

                    <select id="countries_list"  @change="setLocale" class="browser-default custom-select" v-model="selected_country">
                        <option v-for="(item, index) in countries" :key=index :value="item">{{item}}</option>
                    </select>
                    <select id="categories_list" class="browser-default custom-select" @change="setCategory" v-model="selected_category">
                        <option v-for="(category, index) in categories" :key="index" :value="category">{{category}}</option>
                    </select>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import Store from '../store';

export default {
    name: 'categories',
    data() {
        return {
            countries : ['ae', 'ar', 'at', 'au', 'be',
                'bg', 'br', 'ca', 'ch', 'cn',
                'co', 'cu', 'cz', 'de', 'eg',
                'fr', 'gb', 'gr', 'hk', 'hu',
                'id', 'ie', 'il', 'in', 'it',
                'jp', 'kr', 'lt', 'lv', 'ma', 
                'mx', 'my', 'ng', 'nl', 'no', 
                'nz', 'ph', 'pl', 'pt', 'ro', 
                'rs', 'ru', 'sa', 'se', 'sg',
                'si', 'sk', 'th', 'tr', 'tw',
                'ua', 'us', 've', 'za'],

            categories : ['entertaiment', 
            'general', 
            'business', 
            'health', 
            'science', 
            'sport', 
            'technology'],

            query : '',

            selected_country: Store.state.locale,
            selected_category: Store.state.category
        }
    },

    methods: {
        setLocale(elem){
           Store.commit('change_location', elem.target.value);
           console.log(Store.state.locale);
        },

        setCategory(elem){
            Store.commit('set_category', elem.target.value);
            console.log(Store.state.category);
        }
    },
}
</script>

<style scoped>
    .menu_button{
        width:100%;
        border : solid 1px;
    }

    #categories_block{
        height: 10%;
    }
    #countries_list{
        overflow-y: scroll;
        max-height: 100px;
        border: solid 1px;
        
    }
    .country{
        widows: 100%
    }  
</style>