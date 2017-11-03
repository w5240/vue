<template>
   <div>
      <button @click="get">dsasa</button>
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
         get:_.debounce(
           function(){
             console.log(111)
           },
            500
         )
      }
   }
</script>
