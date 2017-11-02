<template>
   <div class="threeD">
      <div class='father' :style="`transform:perspective(${perspective}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg);`">
         <div class="cube1 cube"></div>
         <div class="cube2 cube"></div>
         <div class="cube3 cube"></div>
         <div class="cube4 cube"></div>
         <div class="cube5 cube"></div>
         <div class="cube6 cube"></div>

         <div class="cube7 cubeS"></div>
         <div class="cube8 cubeS"></div>
         <div class="cube9 cubeS"></div>
         <div class="cube10 cubeS"></div>
         <div class="cube11 cubeS"></div>
         <div class="cube12 cubeS"></div>

         <!--<div class="san san1"></div>-->
         <!--<div class="san san2"></div>-->
         <!--<div class="san san3"></div>-->
      </div>

      <div class="setting">
         <label for="">
            rotateX: <span>{{rotateX}}deg</span>; <br>
            <input type="range" min="-180" max="180"
                   v-model="rotateX"/>
         </label>
         <br>
         <label for="">
            rotateY: <span>{{rotateY}}deg</span>; <br>
            <input type="range" min="-180" max="180"
                   v-model="rotateY"/>
         </label><br>
         <label for="">
            perspective: <span>{{perspective}}deg</span>; <br>
            <input type="range" min="0" max="1000"
                   v-model="perspective"/>
         </label><br>
         <label for="">
            translateZ: <span>{{translateZ}}deg</span>; <br>
            <input type="range" min="-100" max="1500"
                   v-model="translateZ"/>
         </label>
      </div>
   </div>
</template>
<script type="text/babel">
   export default {
      name: 'app',
      data(){
         return{
//            rotateX: -20.5,
            rotateX: 0,
            rotateY: 0,
//            rotateY: 69,
            perspective:0,
            translateZ:0
         }
      },
      beforeCreate(){
      },
      mounted (){

      },
      methods: {

      }
   }
</script>
<style lang="scss">
   @import '../../../common/scss/index.scss';

   .father{
      height: 200px;
      width: 200px;
      float:left;
      transform-style:preserve-3d;
      position: fixed;
      top:50%;
      left:50%;
      margin-top:-100px;
      margin-left:-100px;


      .cube{
         position: absolute;
         height: 200px;
         width: 200px;
         /*opacity: 0.4;*/
         /*background:radial-gradient(transparent 30%,rgba(0,0,0,.5) 100%);*/
         background:black;
         top:0;
         left:0;
      }
      .cube1{
         transform: rotateY(90deg) translateZ(100px);
      }
      .cube2{
         transform: rotateY(90deg) translateZ(-100px);
      }
      .cube3{
         transform: rotateX(90deg) translateZ(100px);
      }
      .cube4{
         transform: rotateX(90deg) translateZ(-100px);
      }
      .cube5{
         transform: rotateZ(90deg) translateZ(100px);
      }
      .cube6{
         transform: rotateZ(90deg) translateZ(-100px);
      }

      .cubeS{
         position: absolute;
         height: 25px;
         width: 25px;
         opacity: 0.4;
         /*background: radial-gradient(transparent 30%, rgba(0, 0, 0, .5) 100%);*/
         background:red;
         top: 90px;
         left: 90px;
         &.cube7{
            transform: rotateY(90deg) translateZ(12.5px);
         }
         &.cube8{
            transform: rotateY(90deg) translateZ(-12.5px);
         }
         &.cube9{
            transform: rotateX(90deg) translateZ(12.5px);
         }
         &.cube10{
            transform: rotateX(90deg) translateZ(-12.5px);
         }
         &.cube11{
            transform: rotateZ(90deg) translateZ(12.5px);
         }
         &.cube12{
            transform: rotateZ(90deg) translateZ(-12.5px);
         }
      }


      /*.san{*/
         /*position: absolute;*/
         /*width: 0;*/
         /*height: 0;*/
         /*border-left: 50px solid transparent;*/
         /*border-right: 50px solid transparent;*/
         /*border-bottom: 100px solid rgba(0,0,0,0.1);*/
         /*opacity: 0.4;*/
         /*background:radial-gradient(transparent 30%,rgba(0,0,0,.5) 100%);*/
         /*!*background:black;*!*/
         /*top:0;*/
         /*left:0;*/
      /*}*/
   }
   .setting{
      position: fixed;
      left:100px;
      top:100px;
   }

</style>
