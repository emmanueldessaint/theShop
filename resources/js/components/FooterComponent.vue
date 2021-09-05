<template>
  <div>
    <div>
      <v-row class="margin-contact d-flex justify-center">
        <v-col class="col-2 ">
            <div class="d-flex justify-center"><img class="logo-paiement" src="data:image/png;base64,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"></div>
            <h4 class="d-flex justify-center">Paiement sécurisé</h4>
            <h5 class="d-flex justify-center">Par Visa, Mastercard, Paypal</h5>
        </v-col>
          <v-col class="col-2 bord-center">
            <div class="d-flex justify-center"><font-awesome-icon class="icone" icon="truck" /></div>
            <h4 class="d-flex justify-center mt-5">Free delivery</h4>
            <h5 class="d-flex justify-center">starting from 50 € purchase.</h5>
        </v-col>
        <v-col class="col-2">
            <div class="d-flex justify-center"><font-awesome-icon class="icone" icon="headset" /></div>
            <h4 class="d-flex justify-center mt-5">SAV réactif</h4>
            <h5 class="d-flex justify-center">Du lundi au samedi</h5>
        </v-col>        
      </v-row>
    </div>
    <div class="background">
      <v-row class="d-flex justify-center">
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
  </div>
</template>

<script>
export default {
  
  }
</script>

<style scoped>
.background{
  
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
.logo-paiement{
    width:50px;
    height:50px;
}
.bord-center{
    border-right:1px rgb(214, 214, 214) solid;
    border-left:1px rgb(214, 214, 214) solid;
}
.icone{
  font-size:150%;
  color:rgb(92, 92, 92);
}
.margin-contact{
  margin-top:200px;
  padding-top:20px;
  background-color: #f0f0f0;
  padding-bottom:40px;
}
</style>