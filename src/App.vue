<template>
  <div class="app">
    <div class="navBar">
      <ul class="">
        <li class="sel">1</li>
        <li>{{userCount}}</li>
        <li>3</li>
      </ul>
    </div>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        userCount: '33',

      }
    },
    name: 'app'
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
    background-color: rgba(0,0,0,0.8);
    ul {
      li {
        display: block;
        height: 100%;
        width: 120px;
        float: left;
        background-color: gray;
      }
    }
  }
}
</style>
