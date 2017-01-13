<template>
    <h1 v-on:click="click">
        home vue template updated 111 {{title}}
        <homesub></homesub>
    </h1>

    <span v-if="seen" v-bind:title="message">aaa</span>
    <ol>
        <li v-for="todo in todos">
            {{todo.text}}
        </li>
    </ol>
</template>
<script>
    import homeSub from './homeSubtitle.vue';

    export default {
        methods: {
            click() {
                alert(this.title);
            }
        },
        components: {
            'homesub': homeSub
        },
        data: function () {
            return {
                title: "dynamic title",
                message: `You loaded this page on ${new Date()}`,
                seen: false,
                todos: [
                    { text: 'Learn JavaScript' },
                    { text: 'Learn Vue' },
                    { text: 'Build something awesome' }
                ]
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: red;
    }
</style>