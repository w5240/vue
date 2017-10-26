<template>
  <div class="production">
    <div class="sidebar">
      <ul>
        <li>as</li>
        <li>sd</li>
        <li>fsd</li>

      </ul>

    </div>
    <router-view></router-view>
  </div>
</template>
<script type="text/babel">
  export default {
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
  @import '../../common/scss/base/_normalize.scss';
  @import '../../common/scss/base/_variables.scss';
  .sidebar{
    height:calc(100% - 60px);
    position: absolute;
    top:$header-height;
    left:0;
    width:50px;
    background-color: $bgc;
  }

</style>
