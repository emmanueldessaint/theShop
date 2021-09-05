<template>
  <div class="contenu">
      <v-container>
        <v-row>
            <v-col xs="10" sm="8" md="6" class="">
                <div class="mr-5 ml-5">
                    <h3 class="ml-2">Already Customer ?</h3>
                    
                    <v-text-field
                        label="Your email address"
                        outlined
                        dense
                        class="mt-5 "
                    ></v-text-field>
                    <v-text-field
                        label="Your password"
                        outlined
                        dense
                        type="password"
                        class="mt-3 "
                    ></v-text-field>                                  
                    <v-btn  block text color="white" class="d-flex justify-center connect ">CONNECT</v-btn>
                    <div class="ligne-grise mt-4"></div>
                    <h5 class="mt-3">Forgot <router-link to="/forgot-password"  class="router-link-password">your password ?</router-link></h5>
                </div>
            </v-col>

            <v-col xs="10" sm="8" md="6" class="d-flex align-center">
                <div class="div-create-account ">
                    <div class="mt-5 ml-5 mr-5">
                        <h3 class="d-flex justify-center mt-5">New customer ?</h3>
                        <router-link class="router-link router-menu ml-5" to="/signup"><v-btn block  outlined color="black" class="d-flex justify-center  mt-5">Create my account</v-btn></router-link>
                        
                        <p class="paragraph-create mt-5 ml-3 mr-3 d-flex">Thanks to your PowerBike account, access our private sales, take advantage of our good deals and easily follow your orders</p>
                    </div>
               </div>
            </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>

export default {
    data: {
        return: {
            name: "george"
        }
    }
}
</script>

<style scoped>
.contenu{
    margin-top:100px;
}
.ligne-grise{
    width:100%;
    height:1px;
    background-color: rgb(190, 190, 190);
}
.connect{
   
    background-color: rgb(85, 26, 26);
}
.text-connect{
    text-align:center;
}
.div-create-account{
    border:solid 1px rgb(236, 236, 236);
    width:100%;
    height:80%;
}
.paragraph-create{
    font-weight:300;
    font-size:80%;
    text-align: center;
}
.router-link-password{
    text-decoration: underline;
    color:inherit;
}
</style>