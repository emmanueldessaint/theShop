<template> 
   <div>
       <carousel-front-page />
       <home-component />
       
   </div>
</template>

<script>
import CarouselFrontPage from '../components/CarouselFrontPage.vue'
import HomeComponent from '../components/HomeComponent.vue'

 export default {
  components: { CarouselFrontPage, HomeComponent, },
    
  }
</script>

<style>

</style>