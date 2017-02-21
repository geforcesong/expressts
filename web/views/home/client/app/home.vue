<template>
    <div>
        <h1 v-on:click="click">
            home vue template updated 111 {{title}}
        </h1>
        <h2>
            <sub-title></sub-title>
        </h2>
        <div class="box">
            <h2 class="h2">{{revertTitle}}</h2>
        </div>
        <span v-if="seen" v-bind:title="message">aaa</span>
        <ol>
            <li class="test" v-for="todo in todos">
                {{todo.text}}
            </li>
        </ol>

        <div v-if="type === 'A'">
            A
        </div>
        <div v-else-if="type === 'B'">
            B
        </div>
        <div v-else-if="type === 'C'">
            C
        </div>
        <div v-else>
            Not A/B/C
        </div>

        <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="true">
                Dropdown
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
            </ul>
        </div>

        <div class="row">
        <div class="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>
        <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
        </div>

        <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
        <div class="row">
        <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
        <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
        <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
        </div>

        <!-- Columns are always 50% wide, on mobile and desktop -->
        <div class="row">
        <div class="col-xs-6">.col-xs-6</div>
        <div class="col-xs-6">.col-xs-6</div>
        </div>

        <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
    </div>
</template>
<script>
    import SubTitle from './homeSubtitle.vue'
    export default {
        components: {
            'sub-title': SubTitle
        },
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
                ],
                type: 'B'
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
   @import "../../../../../node_modules/bootstrap/less/mixins/border-radius.less";
    @base: #f938ab;
    
    h1 {
        color: red;
        .border-top-radius(5px);
        .border-bottom-radius(5px);
        border: solid 1px red;
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