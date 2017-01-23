import Vue from 'vue'
import home from './app/home.vue'

window.app = new Vue(home).$mount('#divBody');