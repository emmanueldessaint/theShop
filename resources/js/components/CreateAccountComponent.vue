<template>
  <div class="contenu">
      <div class="marge">
        <div class="ml-3 mr-3">
              <h2>Create my account</h2>
                <v-row class="d-flex ">
                    <v-col xs="12" sm="6" md="6" lg="6" xl="6" class="">
                        <v-text-field
                      
                            label="Your Firstname"
                            required
                            outlined
                            dense
                            class="mt-5 name"
                        ></v-text-field> 
                    </v-col>
                    <v-col xs="12" sm="6" md="6" lg="6" xl="6">
                        <v-text-field
                            label="Your Last name"
                            required
                            outlined
                            dense
                            class="mt-5 name"
                        ></v-text-field> 
                    </v-col>
                </v-row>
                <v-row class="d-flex mail-date">
                    <v-col class="mail-date">
                        <v-text-field
                        
                            label="Your email address"
                            :rules="[rules.required, rules.email]"
                            outlined
                            dense
                            class=" "
                        ></v-text-field> 
                    </v-col>
                    <v-col class="d-flex flex-row mail-date">
                        <v-select
                        class="mr-5"
                            :items="months"
                            label="Month"
                            dense
                            outlined
                        ></v-select>
                        <v-select
                        class="mr-5"
                            :items="days"
                            label="day"
                            dense
                            outlined
                        ></v-select>
                        <v-select
                        class=""
                            :items="years"
                            label="year"
                            dense
                            outlined
                        ></v-select>                                        
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                            label="Your Last name"
                            outlined
                            dense
                            
                        ></v-text-field> 
                        <div class="radio-buttons">
                            <div>                    
                                <input type="checkbox" id="newletters" value="newletters" v-model="checkedNewletters">
                                <label for="newletters">J'accepte de recevoir les newsletters et les promotions Chanzy</label>
                            </div>
                            <div class="mt-3 ">
                                <input type="checkbox" id="conditions" value="conditions" v-model="checkedConditions">
                                <label for="conditions">J'accepte les conditions générales</label>
                            </div>
                        </div>
                        <router-link class="router-link router-menu ml-5" to="/signup"><v-btn block text color="white" class="d-flex justify-center create-account mt-5">Create my account</v-btn></router-link>
                        <div class="grey-line mt-4 mb-4"></div>
                        <div class="d-flex justify-center">
                            <h5>You already have an account ? <router-link to="/login">Connect</router-link></h5>
                        </div>
                    </v-col>
                </v-row>
        </div>
            
      </div>
  </div>
</template>



<script>

export default {
data () {
      return {
        ex4: ['red'],
        days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
        months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        years: [2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984,1983,1982,1981,1980,1979,1978,1977,1976,1975,1974,1973,1972],
        title: 'Preliminary report',
        email: '',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 30 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
      }
    },
}
</script>

<style scoped>
.contenu{
    margin-top:200px;
}
.marge{
    margin-left:auto;
    margin-right:auto;
    max-width:650px;
}

.mail-date{
    margin-top:-20px;
    margin-bottom:-20px;
}
.create-account{
    background-color: rgb(85, 26, 26);
}
.radio-buttons{
    margin-bottom:-20px;
}
.grey-line{
    height:1px;
    width:98%;
    margin-left:auto;
    margin-right:auto;
    background-color: rgb(202, 202, 202);
}
</style>