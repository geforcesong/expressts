<template>
    <li class="txt">{{todo.text}}</li>
</template>

<script>
    export default {
        props: ['todo']
    }
</script>
<style scoped>
    .txt {
        color: blue;
    }
</style>