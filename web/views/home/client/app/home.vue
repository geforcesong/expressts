<template>
    <div>
        <h1 v-on:click="click">
            home vue template updated 111 {{title}}
        </h1>
        <div class="box">
            <h2 class="h2">{{revertTitle}}</h2>
        </div>
        <span v-if="seen" v-bind:title="message">aaa</span>
        <ol>
            <li class="test" v-for="todo in todos">
                {{todo.text}}
            </li>
        </ol>
    </div>
</template>
<script>

    export default {
        methods: {
            click() {
                alert(this.title);
                this.title = "hello world";
            }
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
        },
        computed: {
            revertTitle: function () {
                return this.title.split('').reverse().join('')
            }
        }
    }
</script>

<style lang="less" scoped>
    @base: #f938ab;
    
    h1 {
        color: red;
    }
    h2 {
        color: pink;
    }    

    .box-shadow(@style, @c) when (iscolor(@c)) {
        -webkit-box-shadow: @style @c;
        box-shadow:         @style @c;
        }
        .box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {
        .box-shadow(@style, rgba(0, 0, 0, @alpha));
    }
    .box {
        color: saturate(@base, 5%);
        border-color: lighten(@base, 30%);
        border:solid;
        div { .box-shadow(0 0 5px, 30%) }
    }

    .test{
        background-color: @base;
    }
</style>