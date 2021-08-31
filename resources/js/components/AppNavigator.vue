<template>
  
    <div class="d-flex justify-center pt-4 pb-5 menu-entier">
      <div class="d-flex flex-column mr-5">
        <router-link class="router-link" to="/">
          <h2 class="titre">PowerBike</h2>
          <h6 class="sous-titre">Les spécialistes du e-Bike</h6>
        </router-link>
      </div>
      
      <div class="main-div">
        <div class="barre-recherche"><p class="ml-3">Barre de recherche</p></div>
        <div class="d-flex justify-space-around mt-4">
          <h4><router-link class="router-link router-menu" to="/products">Nos produits</router-link></h4>
          <h4><router-link class="router-link router-menu" to="/products">Nos offres</router-link></h4>
          <h4><router-link class="router-link router-menu" to="/products">Le blog</router-link></h4>
          <h4><router-link class="router-link router-menu" to="/products">Notre histoire</router-link></h4>
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
  border: solid 1px rgb(214, 214, 214);
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
.router-link{
  text-decoration: none;
  color:inherit;
}
.router-menu:hover{
 color:rgb(228, 182, 57);
}
.titre{
  font-family: "Arial Black", Times, serif;
  font-size:160%;
}
.sous-titre{
  color:rgb(121, 121, 121);
}
</style>