import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        locale : (window.navigator.languages[0]).slice(0, 2).toLowerCase(),
        category: ''
    },
    
    getters: {

    },

    mutations: {
        change_location(state, loc){
            this.state.locale = loc;
        },

        set_category(state, cat){
            this.state.category = cat;
        }

    },

    actions: {

    }

});
