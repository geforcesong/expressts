<template>
    <h1 v-on:click="click">
        home vue template
        <homesub></homesub>
    </h1>
</template>
<script>
    import homeSub from './homeSubtitle.vue';

    export default {
        methods: {
            click() {
                alert("haha");
            }
        },
        components: {
            'homesub': homeSub
        }
    }
</script>

<style scoped>
    h1 {
        color: red;
    }
</style>