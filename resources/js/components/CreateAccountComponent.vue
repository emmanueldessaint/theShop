<template>
  <div class="contenu">
      <div class="marge">
          
              <h2>Create my account</h2>
                <v-row>
                    <v-col>
                        <v-text-field
                            label="Your Firstname"
                            required
                            outlined
                            dense
                            class="mt-5 "
                        ></v-text-field> 
                    </v-col>
                    <v-col>
                        <v-text-field
                            label="Your Last name"
                            required
                            outlined
                            dense
                            class="mt-5 "
                        ></v-text-field> 
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                            label="Your email address"
                            :rules="[rules.required, rules.email]"
                            outlined
                            dense
                            class=" "
                        ></v-text-field> 
                    </v-col>
                    <v-col>
                        <v-text-field
                            label="Your Last name"
                            outlined
                            dense
                            class=" "
                        ></v-text-field> 
                    </v-col>
                </v-row>
                <v-text-field
                            label="Your Last name"
                            outlined
                            dense
                            class="mt-5 "
                        ></v-text-field> 
            
      </div>
  </div>
</template>

<script>
export default {
data () {
      return {
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

<style>
.contenu{
    margin-top:200px;
}
.marge{
    margin-left:auto;
    margin-right:auto;
    max-width:600px;
}
</style>