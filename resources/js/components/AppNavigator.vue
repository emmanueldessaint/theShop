<template>
  
    <div class="d-flex justify-center pt-6 pb-5 menu-entier">
      <div class="d-flex flex-column mr-5 div-titre">
        <router-link class="router-link" to="/">
          <h2 class="titre">PowerBike</h2>
          <h6 class="sous-titre">Les spécialistes du e-Bike</h6>
        </router-link>
      </div>
      
      <div class="main-div ">
        <div class="barre-recherche">
          <v-text-field class="text-field-input" 
          placeholder="Manteau noir"
          label="Search"
          :rules="rules">
          </v-text-field>
          </div>
        <div class="d-flex justify-space-around mt-4">
          <h4><router-link class="router-link router-menu" to="/products">Nos produits</router-link></h4>
          <h4><router-link class="router-link router-menu" to="/products">Nos offres</router-link></h4>
          <h4><router-link class="router-link router-menu" to="/products">Le blog</router-link></h4>
          <h4><router-link class="router-link router-menu" to="/products">Notre histoire</router-link></h4>
        </div>
      </div>
      <div class="d-flex flex-row ml-5">
        <span class="ml-5"><font-awesome-icon icon="user" /></span>
        <h5><router-link class="router-link router-menu ml-5" to="/cart"><font-awesome-icon icon="shopping-cart" /></router-link></h5>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        removeItemFromCart(item) {
            this.$store.dispatch('removeItemFromCart', item)
        }
    }
}
</script>

<style scoped>
.barre-recherche{
  border-radius:30px;
  border: solid 1px rgb(214, 214, 214);
  height:50px;
  width:80%;
  display:flex;
  align-items:center;
  margin-left:auto;
  margin-right:auto;
}
.main-div{
  width:60vw;
}
.div-titre{
  width:200px;
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
.text-field-input{
  position:relative;
  top:10px;
  
}
</style>