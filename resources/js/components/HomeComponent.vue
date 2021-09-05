<template>
<div >
  
      <v-row class="mt-15 quality-product">
          <v-col class="d-flex flex-column">
              <span class="d-flex justify-center"><font-awesome-icon class="icone" icon="globe-africa" /></span>
              <h4 class="d-flex justify-center mt-3">RESPECT DU TERROIR</h4>
              <h5 class="d-flex justify-center ">de l'environnement et des traditions</h5>
          </v-col>
          <v-col class="d-flex flex-column bord-center">             
              <span class="d-flex justify-center"><font-awesome-icon class="icone" icon="truck-moving" /></span>
              <h4 class="d-flex justify-center mt-3">LIVRAISON RAPIDE</h4>
              <h5 class="d-flex justify-center ">Dans toute la France</h5>
          </v-col>
          <v-col class="d-flex flex-column">
              <span class="d-flex justify-center"><font-awesome-icon class="icone" icon="award" /></span>
              <h4 class="d-flex justify-center mt-3">EXCELLENCE DE LA QUALITE</h4>
              <h5 class="d-flex justify-center ">Le savoir faire Français</h5>
          </v-col>
      </v-row>
      
      <v-row class="mt-5">
          <best-sellers />
      </v-row>
      <v-row class="mt-15">
          <all-reviews />
      </v-row>
      
      

  
  </div>
</template>

<script>
import BestSellers from '../components/BestSellers.vue'
import AllReviews from '../components/reviews/AllReviews.vue'

export default {
components: {  BestSellers, AllReviews },
    
  }

</script>

<style scoped>

.icone{
    font-size:130%;
    color:rgb(42, 42, 42);
}
.quality-product{
    margin-left:auto;
    margin-right:auto;
    width:80%;
}
h4{
    font-family: "Lucida Console", "Courier New", monospace;
    color: rgb(54, 54, 54);
}
h5{
    font-family:  "Courier New", monospace;
    color: rgb(54, 54, 54);
}
.bord-center{
    border-right:1px rgb(214, 214, 214) solid;
    border-left:1px rgb(214, 214, 214) solid;
}
</style>