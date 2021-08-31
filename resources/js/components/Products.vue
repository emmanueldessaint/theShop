<template> 
<div>
    
  <v-container class="contenu">
    <v-row class="d-flex">
      <v-col v-for="product in products" :key="product" class="oneProduct" >
        <v-card v-on:click="()=> $router.push({name : 'OneProduct', params: {product}})">
          <h3>{{ product.name }}</h3>
          
        </v-card>
        <v-card v-on:click="()=> $router.push({name : 'OneProduct', params: {product}})">
          <div v-if="product.description.length < 150"> {{ product.description }}</div>
          <div v-else>{{ product.description.substring(0,150) + "..." }}</div>
          
        </v-card>
        <v-card >
          <span>{{ product.price }} €</span>
          
        </v-card>
        
      </v-col>
    </v-row>
  </v-container>
  
</div>

</template>

<script>
export default {
    data: function() {
        return {
            products: [],
            oneProduct: '',
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
.contenu{
  margin-top:200px;
}
.oneProduct{
    min-width:300px;
    height:200px;
    /* height:300px; */
    /* background-color: rgb(233, 234, 235); */
    margin:20px;
    border-radius:7px;
}
.d-flex{
    display:flex;
    flex-wrap: wrap;
}
</style>