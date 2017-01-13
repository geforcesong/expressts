import Vue from 'vue'
import home from './app/home.vue'

var app = new Vue({
    el: '#homeVue',
    components: {
        'my-component': home
    }
});