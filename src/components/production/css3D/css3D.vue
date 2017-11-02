<template>
   <div class="css3d">
      <div class="show">
         <div class="settings">
            <div class="settings-container">
               <label for="">
                  perspective: <span>{{perspective}}px</span>;<br>
                  <input type="range" min="0" max="999"
                         v-model="perspective"/>
               </label>
               <br>
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
               </label>
               <br>
               <label for="">
                  rotateZ: <span>{{rotateZ}}deg</span>; <br>
                  <input type="range" min="-180" max="180"
                         v-model="rotateZ"/>
               </label>
               <br>
               <label for="">
                  translateZ: <span style="color:#0cc2a9">{{translateZ}}deg</span>; <br>
                  <input type="range" min="-200" max="200"
                         v-model="translateZ"/>
               </label>
            </div>
         </div>
         <div class="output">
            <div class="box-container">
               <div class="box" :style="{
                  transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateZ(${translateZ}px)`,
                  transformOrigin: `${transformOriginX} ${transformOriginY}`
               }">EDDY</div>
            </div>
         </div>
         <div class="origin">
            <label for="">
               transform-origin:<span>{{transformOriginX }} {{transformOriginY}}</span>; <br>
               <div class="transform-origin-radio-buttons">
                  <div class="transform-origin-x">
                     <label for="t-left">
                        <input type="radio" name="transform-left"
                               value="left"
                               v-model="transformOriginX" id="t-left"/> left
                        </label>
                     <br>
                     <label for="t-right">
                        <input type="radio" name="transform-left"
                               value="right"
                               v-model="transformOriginX" id="t-right"/> right
                        </label>
                     <br>
                     <label for="t-center">
                        <input type="radio" name="transform-left"
                               value="center"
                               v-model="transformOriginX" id="t-center"/> center
                        </label>
                  </div>

                  <div class="transform-origin-y">
                     <label for="t-top">
                        <input type="radio" name="transform-right"
                               value="top"
                               v-model="transformOriginY" id="t-top"/> top
                        </label>
                     <br>
                     <label for="t-bottom">
                        <input type="radio" name="transform-right"
                               value="bottom"
                               v-model="transformOriginY" id="t-bottom"/> bottom
                        </label>
                     <br>
                     <label for="t-center2">
                        <input type="radio" name="transform-right"
                               value="center"
                               v-model="transformOriginY" id="t-center2"/> center
                        </label>
                  </div>
               </div>

            </label>

         </div>
      </div>
   </div>
</template>
<script type="text/babel">
   export default {
      name: 'app',
      data(){
         return{
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            transformOriginX: "center",
            transformOriginY: "center",
            translateZ:0,
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
   .show {
      margin:50px 0 0 100px;
      white-space: nowrap;
      .settings{
         width:300px;
         float: left;

         label {

            input[type="range"]{
               display: inline-block;
               margin-top: 5px;
            }
            &:not(:last-child) {
               display: inline-block;
               margin-bottom: 10px;
            }
            span{
               color:$green;
            }
         }


      }
      .output{
         float: left;
         margin-right:100px;

         .box-container {
            padding: 50px;
            border: 1px solid $selBgc;
            .box {
               width: 150px;
               height: 150px;
               background: $bgc;
               color:white;
               text-align:center;
               line-height: 150px;
            }
         }

      }
      .origin{
         float: left;

         input[type="radio"] {
            display: inline-block;
            margin-top: 5px;
         }

         .transform-origin-radio-buttons {
            display: flex;
            align-items: center;
            margin-top: 10px;
            .transform-origin-x {
               margin-right: 10%;
            }
         }

         span{
            color:$green;
         }
      }
   }

</style>
