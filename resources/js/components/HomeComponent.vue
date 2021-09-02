<template>
<div >
  
      <v-row class="mt-15 ">
          <v-col class="d-flex flex-column">
              <h3 class="d-flex justify-center">Respect du terroir</h3>
              <h5 class="d-flex justify-center">de l'environnement et des traditions</h5>
          </v-col>
          <v-col class="d-flex flex-column">
              <h3 class="d-flex justify-center">Livraison rapide</h3>
              <h5 class="d-flex justify-center">Dans toute la France</h5>
          </v-col>
          <v-col class="d-flex flex-column">
              <h3 class="d-flex justify-center">Excellence de la qualité</h3>
              <h5 class="d-flex justify-center">Le savoir faire Français</h5>
          </v-col>
      </v-row>
      
      <v-row class="mt-10">
          <best-sellers />
      </v-row>
      <v-row class="mt-15">
          <product-reviews />
      </v-row>
      
      

  
  </div>
</template>

<script>
import BestSellers from '../components/BestSellers.vue'
import ProductReviews from './ProductReviews.vue'

export default {
components: {  BestSellers, ProductReviews },
    
  }

</script>

<style scoped>
.background-test{
    background-color:red;
}

</style>