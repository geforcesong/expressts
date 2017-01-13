<template>
    <h1 v-on:click="click">
        home vue template updated 111 {{title}}
        <homesub></homesub>
    </h1>
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
                title: "dynamic title"
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: red;
    }
</style>