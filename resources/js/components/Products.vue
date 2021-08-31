<template> 
<div>
    
  <v-container>
    <v-row class="d-flex">
      <v-col v-for="product in products" :key="product" class="oneProduct" >
        <v-card v-on:click="getOneProduct(product.id)">
          {{ product.name }}
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

        getOneProduct(id) {
          axios.store('http://localhost:8000/api/products/'+id).then(response => {
                if(response.status >= 200 && response.status < 300 ){
                    this.$router.push('oneproduct')
                }
            })
        }
       
    },

    mounted() {
        this.getProducts()
    }
}
</script>

<style scoped>
.oneProduct{
    min-width:300px;
    height:200px;
    /* height:300px; */
    background-color: rgb(233, 234, 235);
    margin:20px;
    border-radius:7px;
}
.d-flex{
    display:flex;
    flex-wrap: wrap;
}
</style>