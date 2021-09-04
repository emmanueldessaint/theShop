<template>
  <div class="contenu">
      <v-container>
        <v-row>
            <v-col>
                <h3>Already Customer ?</h3>
                   
                <v-text-field
            label="Your email address"
            outlined
            dense
            class="mt-5"
          ></v-text-field>
          <v-text-field
            label="Your password"
            outlined
            dense
            type="password"
            class="mt-3"
          ></v-text-field>
                  
                <input>
                <v-btn class="d-flex justify-center connect">Connect</v-btn>
                <div class="ligne-grise mt-4"></div>
                <h5 class="mt-3">You forget your password ?</h5>
        
            </v-col>

            <v-col>
                <h3>New customer ?</h3>
                <h3>Create my account</h3>
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

<style>
.contenu{
    margin-top:200px;
}
.ligne-grise{
    width:100%;
    height:1px;
    background-color: rgb(190, 190, 190);
}
.connect{
    background-color: rgb(85, 26, 26);
    color:white;
}
</style>