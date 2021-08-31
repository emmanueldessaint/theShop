<template> 
   <div>
       <carousel-front-page />
       <home-component />
       <best-sellers />
   </div>
</template>

<script>
import AppNavigator from '../components/AppNavigator.vue'
import Products from '../components/Products.vue'
import CarouselFrontPage from '../components/CarouselFrontPage.vue'
import HomeComponent from '../components/HomeComponent.vue'
import BestSellers from '../components/BestSellers.vue'

 export default {
  components: { Products, AppNavigator, CarouselFrontPage, HomeComponent, BestSellers },
    
  }
</script>

<style>

</style>