<template>
   <div style="padding:18px;">
      img:<input @change="pic($event)" type="file" accept="image/*" capture="camera"><br>
      <img src="" alt="">
      <p></p>
   </div>
</template>

<script type="text/babel">

   export default {
      data(){
         return{

         }
      },
      mounted (){

      },
      methods: {
         get:_.debounce(
           function(){
             console.log(111)
           },
            500
         ),
         pic(e){
           console.log(e)
           console.log(e.target.files[0])
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);

            reader.onload = function(e){
               console.log(e)
               console.log(this)
               document.querySelector('img').src = this.result;
               document.querySelector('p').innerText = 'waitting';
            }

            Tesseract.recognize(e.target.files[0],{
               lang: 'chi_sim'
            })
               .progress(message => console.log(message))
               .catch(err => console.error(err))
               .then(result =>{
                 console.log(result)
                  document.querySelector('p').innerText = result.text;
               })
               .finally(resultOrError => console.log(resultOrError))
         }
      }
   }
</script>
