<template>
  
    <div class="d-flex justify-center pt-4 pb-5 menu-entier">
      <div class="d-flex flex-column mr-5">
        <h2>PowerBike</h2>
        <h6>Les spécialistes du e-Bike</h6>
      </div>
      
      <div class="main-div">
        <div class="barre-recherche">Barre de recherche</div>
        <div class="d-flex justify-space-around mt-4">
          <h4>Nos produits</h4>
          <h4>Nos offres</h4>
          <h4>Le blog</h4>
          <h4>Notre histoire</h4>
        </div>
      </div>
      <div class="d-flex flex-row ml-5">
        <span>Se connecter</span>
        <span>Panier</span>
      </div>
  </div>
</template>

<script>
export default {
   
  }
</script>

<style scoped>
.barre-recherche{
  border-radius:20px;
  border: solid 1px grey;
  height:50px;
  width:100%;
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