import Vue from 'vue'
import home from './app/home.vue'
import todoItem from './app/todo-item.vue'

window.app = new Vue({
    el: 'body',
    components: {
        'my-component': home,
        'todo-item': todoItem
    },
    methods: {
        reverseMessage: function (el) {
            alert('abc' + el);
        }
    },
    data: function () {
        return {
            message: "gagagaagag",
            url: "http://www.baidu.com/",
            seen: true,
            hello: `<h2 style="color:red">This is me</h2>`,
            hell1: undefined,
            groceryList: [
                { text: 'Vegetables' },
                { text: 'Cheese' },
                { text: 'Whatever else humans are supposed to eat' }
            ]
        }
    }
});