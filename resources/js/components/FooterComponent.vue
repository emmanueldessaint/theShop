<template>
  <div class="background">
    <v-row class="d-flex justify-center mt-5">
      <v-col class="col-5">
        <p class="paragraphe-footer ">Historiquement implanté à Bouzeron, les vins Chanzy c'est 80 hectares 
          répartis sur les trois Côtes de la Bourgogne avec pour objectif de vous 
          offrir une histoire bâtie sur la passion.
        </p>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col class="d-flex justify-center">
        <div>
          <div class="d-flex flex-column mr-5">
            <router-link class="router-link" to="/">
              <h2 class="titre">PowerBike</h2>
              <h6 class="sous-titre">Les spécialistes du e-Bike</h6>
            </router-link>
          </div>
        </div>
      </v-col>
      <v-col class="d-flex justify-center">
        <div>
          <h3>PowerBike</h3>
          <div class="mt-3">
            <h5>6, rue de la Fontaine</h5>
            <h5>71150 Bouzeron - France</h5>
          </div>
          <div class="mt-3">
            <h5>+33(0)3 85 37 23 69</h5>
          </div>
          <div class="mt-3">
            <h5>reception@powerbike.com</h5>
          </div>
        </div>
      </v-col>
      <v-col class="d-flex justify-center">
        <div >
          <h3>A propos</h3>
          <div class="d-flex mt-3">    
            <div>
              <h5 class="mr-2 mt-2">Nos partenaires</h5>
              <h5 class="mr-2 mt-2">L'équipe PowerBike</h5>
              <h5 class="mr-2 mt-2">Offrir un cadeau</h5>
              <h5 class="mr-2 mt-2">Notre histoire</h5>
            </div>
            <div>
              <h5 class="ml-2 mt-2">Le magazine</h5>
              <h5 class="ml-2 mt-2">Mentions-légales</h5>
              <h5 class="ml-2 mt-2">Contact</h5>
              <h5 class="ml-2 mt-2">Je suis un professionnel</h5>
            </div>
          </div>
        </div>
      </v-col>
      <v-col>
        <div>
          <h3>Vente privée et newsletter</h3>
          <p class="mt-3 paragraphe-mail">Accédez aux ventes privées et restez informé des informations PowerBike</p>
          <input type="mail" id="email" required class="text-field-email rounded" placeholder="Your email ..." >
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  
  }
</script>

<style scoped>
.background{
  margin-top:200px;
  padding-bottom:80px;
 background: rgb(0,0,0);
background: linear-gradient(257deg, rgba(0,0,0,1) 0%, rgba(34,34,34,1) 47%, rgba(89,89,89,1) 100%);
  color:white;
}
.paragraphe-footer{
  margin-top:100px;
  margin-bottom:100px;
  font-family: "Lucida Console", "Courier New", monospace;
  text-align: center;
  font-size:130%;
}
.router-link{
    text-decoration: none;
    color:inherit;
}
.text-field-email{
  background-color:white;
  height:30px;
}
.paragraphe-mail{
  font-size:90%;
}
</style>