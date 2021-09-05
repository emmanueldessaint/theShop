<template>
  <div class="menu">
      <v-row class="d-flex justify-center">
          <v-col xs="12" sm="9" md="7" lg="5" class="mt-5 ">
              <h3>Enter your email adress</h3>
              <v-text-field
                      
                            label="Your email adress"
                            required
                            outlined
                            dense
                            class="mt-5 "
                        ></v-text-field> 
                        <router-link class="router-link router-menu " to="/signup"><v-btn block text color="white"  class="d-flex justify-center button-password">Get my password</v-btn></router-link>
                        <div class="grey-line mt-4"></div>
            <h5 class="mt-1">We will send you an email to take back your password</h5>
          </v-col>
      </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.menu{
    margin-top:80px;
    margin-left:20px;
    margin-right:20px;
}
.grey-line{
    width:95%;
    height:1px;
    background-color: rgb(219, 219, 219);
    
}
.router-menu{
    margin-top:-20px;
}
.button-password{
    background-color: rgb(85, 26, 26);
}
</style>