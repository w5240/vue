<template>
   <div class="production">
      <div :class="change?'spread sidebar':'sidebar'">
         <ul>
            <li ><i @click="change=!change" class="icon-font icon-category" style="color:#999;font-size:24px"></i></li>
            <router-link :to="{name:'css3D'}" tag="li"><div class="bgc"><i class="icon-font icon-jifen"></i><p v-if="change">css 3D</p></div></router-link>
            <router-link :to="{name:'lee'}" tag="li"><div class="bgc"><i class="icon-font icon-comments"></i><p v-if="change">小傻狗</p></div></router-link>

         </ul>

      </div>
      <div class="proContent">
         <router-view></router-view>
      </div>
   </div>
</template>
<script type="text/babel">
   export default {
      data(){
         return{
            change:false,
         }
      },
      mounted (){},
      methods: {

      }
   }
</script>

<style lang="scss">
   @import '../../common/scss/index.scss';
   .production {
      height:calc(100% - 60px);
      .sidebar {
         height:100%;
         float: left;
         ul {
            height: 100%;
            width: 50px;
            background-color: $bgc;
            transition: all 0.5s;
            li {
               height: 50px;
               width: 100%;
               text-align: center;
               line-height: 45px;
               padding-top: 5px;
               border-bottom: 1px solid $selBgc;
               cursor:pointer;

               .bgc{
                  height:40px;
                  width:90%;
                  margin-left:5%;
                  border-radius:5px;
                  i{
                     color: #999;
                     font-size: 22px;

                  }
                  p{
                     color:#999;
                     white-space:nowrap;
                     overflow: hidden;
                  }
               }
               &.router-link-exact-active {
                  .bgc{
                     background-color: $green;
                     i{
                        color:white;
                     }
                     p{
                        color:white;
                     }
                  }
               }
            }
         }
         &.spread{
            ul{
               width:120px;
               .bgc{
                  i{
                     float: left;
                     margin-left:10px;
                  }

               }
            }
         }
      }
      .proContent{
         float: left;
         height:100%;
      }
   }

</style>
