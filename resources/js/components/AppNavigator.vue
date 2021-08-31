<template>
  
    <div class="d-flex justify-center pt-4 pb-5 menu-entier">
      <div class="d-flex flex-column mr-5">
        <h2>PowerBike</h2>
        <h6>Les spécialistes du e-Bike</h6>
      </div>
      
      <div class="main-div">
        <div class="barre-recherche"><p class="ml-3">Barre de recherche</p></div>
        <div class="d-flex justify-space-around mt-4">
          <h4><router-link
  to="/products"
 
>Nos produits</router-link></h4>
          <h4>Nos offres</h4>
          <h4>Le blog</h4>
          <h4>Notre histoire</h4>
        </div>
      </div>
      <div class="d-flex flex-row ml-5">
        <span class="ml-5">Se connecter</span>
        <span class="ml-5">Panier</span>
      </div>
  </div>
</template>

<script>
export default {
   
  }
</script>

<style scoped>
.barre-recherche{
  border-radius:30px;
  border: solid 1px grey;
  height:50px;
  width:100%;
  display:flex;
  align-items:center;
}
.main-div{
  width:60vw;
}
.menu-entier{
  position:fixed;
  background:white;
  z-index:1;
  width:100%;
  border-bottom:1px solid rgb(199, 199, 199);
 
}
</style>