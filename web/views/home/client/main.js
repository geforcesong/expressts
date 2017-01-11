import Vue from 'vue'
import home from './app/home.vue'

new Vue({
    el: '#homeVue',
    components: {
        'my-component': home
    }
});