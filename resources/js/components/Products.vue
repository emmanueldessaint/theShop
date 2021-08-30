<template> 
<div>
    
    <div v-for="product in products" :key="product.id" class="d-flex flex-row">
        <v-card
    :loading="loading"
    class="mx-auto my-3"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>{{ product.name }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        
      </v-row>

      

      <div>{{ product.description }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>{{ product.price }}</v-card-title>

    

    
  </v-card>
       
    </div>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            products: [],
        }
    },
    methods: {
        getProducts() {
            
            axios.get('http://localhost:8000/api/products').then(response => {
                if(response.status >= 200 && response.status < 300 ){
                    // console.log(response)
                    this.products = response.data.products
                }
            })
        },
       
    },

    mounted() {
        this.getProducts()
    }
}
</script>

<style scoped>
.oneProduct{
    width:200px;
    height:300px;
    background-color: rgb(104, 104, 104);
}
.d-flex{
    display:flex;
    flex-direction: row;
}
</style>