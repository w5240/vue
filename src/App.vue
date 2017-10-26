<template>
  <div class="app">
    <div class="navBar">
      <ul class="">
        <li>Eddy wang</li>
        <router-link :to="{name:'curVit'}" tag="li">简介</router-link>
        <router-link :to="{name:'production'}" tag="li">项目</router-link>
        <router-link :to="{name:'other'}" tag="li">other</router-link>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'app',
    data(){
      return{

      }
    },
    mounted (){},
    methods: {

    }
  }
</script>

<style lang="scss">
  @import './common/scss/base/_normalize.scss';
  @import './common/scss/base/_variables.scss';

.app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .navBar{
    width: 100%;
    height:$header-height;
    background-color: $bgc;
    border-bottom:5px solid $green;
    ul {
      height: 100%;
      li {
        display: block;
        box-sizing: border-box;
        border-left:1px solid black;
        border-right:1px solid black;
        line-height:$header-height;
        height: 100%;
        width: 120px;
        float: left;
        color:$gray;
        &.router-link-exact-active{
          color:$green;
          background-color: $selBgc;
        }
        &:first-child{
          color:white;
          background-color: $green;
        }
      }
    }
  }
}
</style>
