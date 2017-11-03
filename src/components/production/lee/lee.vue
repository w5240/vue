<template>
   <div class="threeD">
      <div class='father' :style="`transform:perspective(${perspective}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg);`">
         <div class="cube1 cube" :class="{black:black,picture:picture}"></div>
         <div class="cube2 cube" :class="{black:black,picture:picture}"></div>
         <div class="cube3 cube" :class="{black:black,picture:picture}"></div>
         <div class="cube4 cube" :class="{black:black,picture:picture}"></div>
         <div class="cube5 cube" :class="{black:black,picture:picture}"></div>
         <div class="cube6 cube" :class="{black:black,picture:picture}"></div>

         <div v-if="show" class="cube7 cubeS" :class="{picture1:picture1}"></div>
         <div v-if="show" class="cube8 cubeS" :class="{picture1:picture1}"></div>
         <div v-if="show" class="cube9 cubeS" :class="{picture1:picture1}"></div>
         <div v-if="show" class="cube10 cubeS" :class="{picture1:picture1}"></div>
         <div v-if="show" class="cube11 cubeS" :class="{picture1:picture1}"></div>
         <div v-if="show" class="cube12 cubeS" :class="{picture1:picture1}"></div>

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
         </label><br>
         <label for="t-center1">
            <input type="checkbox" name="transform-right"
                   value="center"
                   v-model="show" id="t-center1"/> show
         </label>
         <label for="t-center2">
            <input type="checkbox" name="transform-right"
                   value="center"
                   v-model="black" id="t-center2"/> black
         </label><br>
         <label for="t-center3">
            <input type="checkbox" name="transform-right"
                   value="center"
                   v-model="picture" id="t-center3"/> picture
         </label>
         <label for="t-center4">
            <input type="checkbox" name="transform-right"
                   value="center"
                   v-model="picture1" id="t-center4"/> picture1
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
            translateZ:0,
            show:false,
            black:true,
            picture:false,
            picture1:false,
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
         opacity: 0.4;
         background:radial-gradient(transparent 30%,rgba(0,0,0,.5) 100%);
         top:0;
         left:0;
         &.black{
            opacity: 1;
            background:black;
         }
      }
      .cube1{
         transform: rotateY(90deg) translateZ(100px);
         &.picture{
            background-image: url("./img/1.jpeg");
            background-size:100% 100%;

         }
      }
      .cube2{
         transform: rotateY(90deg) translateZ(-100px);
         &.picture{
            background-image: url("./img/2.jpg");
            background-size:100% 100%;

         }
      }
      .cube3{
         transform: rotateX(90deg) translateZ(100px);
         &.picture{
            background-image: url("./img/3.jpeg");
            background-size:100% 100%;

         }
      }
      .cube4{
         transform: rotateX(90deg) translateZ(-100px);
         &.picture{
            background-image: url("./img/4.jpeg");
            background-size:100% 100%;

         }
      }
      .cube5{
         transform: rotateZ(90deg) translateZ(100px);
         &.picture{
            background-image: url("./img/5.jpg");
            background-size:100% 100%;

         }
      }
      .cube6{
         transform: rotateZ(90deg) translateZ(-100px);
         &.picture{
            background-image: url("./img/6.jpg");
            background-size:100% 100%;

         }
      }

      .cubeS{
         position: absolute;
         height: 25px;
         width: 25px;
         background: radial-gradient(transparent 30%, rgba(0, 0, 0, .5) 100%);
         top: 90px;
         left: 90px;
         &.cube7{
            transform: rotateY(90deg) translateZ(12.5px);
            &.picture1{
               background-image: url("./img/6.jpg");
               background-size:100% 100%;
            }
         }
         &.cube8{
            transform: rotateY(90deg) translateZ(-12.5px);
            &.picture1{
               background-image: url("./img/7.jpg");
               background-size:100% 100%;
            }
         }
         &.cube9{
            transform: rotateX(90deg) translateZ(12.5px);
            &.picture1{
               background-image: url("./img/2.jpg");
               background-size:100% 100%;
            }
         }
         &.cube10{
            transform: rotateX(90deg) translateZ(-12.5px);
            &.picture1{
               background-image: url("./img/3.jpeg");
               background-size:100% 100%;
            }
         }
         &.cube11{
            transform: rotateZ(90deg) translateZ(12.5px);
            &.picture1{
               background-image: url("./img/8.png");
               background-size:100% 100%;
            }
         }
         &.cube12{
            transform: rotateZ(90deg) translateZ(-12.5px);
            &.picture1{
               background-image: url("./img/9.png");
               background-size:100% 100%;
            }
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

      input[type="checkbox"] {
         display: inline-block;
         margin-top: 5px;
      }
   }

</style>
