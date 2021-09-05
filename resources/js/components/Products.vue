<template > 
<div class="background">
   <v-container class="contenu">
       <div>
            <ProductFilter @filterProductPrice="filterProductPrice"/>
       </div>
       <div class="test">
            <div v-for="product in products" :key="product" class="one-product" v-on:click="()=> $router.push({name: 'OneProduct', params: {product}})">
                <img class="img-product" src="assets/products/selle.png" alt="img-product">
                <div class="bg-y d-flex justify-space-between">
                    <h4 class="ml-3 mt-3">{{ product.name }}</h4>
                    <h4 class="mr-3 mt-3">{{ product.price }} €</h4>
                </div>
            </div>
       </div>
  </v-container>
  
</div>

</template>

<script>
import ProductFilter from './ProductFilter.vue'


export default {
    components: { ProductFilter },
    name: 'Products',

    data: function() {
        return {
            products: [],
            allProducts: [],
            oneProduct: '',
        }
    },
    methods: {
        getProducts() {   
            axios.get('http://localhost:8000/api/products').then(response => {
                if(response.status >= 200 && response.status < 300 ){
                    this.products = response.data.products
                    this.allProducts = response.data.products
                }
            })
        }, 
        filterProductPrice(range) {
            this.products = this.allProducts
            const filteredProduct = this.products.filter(product => product.price >= range[0] && product.price <= range[1])
            this.products = filteredProduct
        }           
    },
    mounted() {
        this.getProducts()
    }
}
</script>

<style scoped>

.background{
  background:rgb(253, 248, 248);
  padding-top:100px;
}
.contenu{ 
  display: flex; 
  flex-direction: column;
}
.test{   
    display:flex;
    flex-wrap:  wrap;
     justify-content: center;
    /* flex-direction: column; */
}
.one-product{   
    width:300px;
    height:350px;
    margin:10px;
}
.img-product{
    width:300px;
    height:300px;
}
.bg-y{
    border-top: solid 1px rgb(185, 185, 185);
    background-color: white;
    height:50px;
    margin-top:-7px;
}
</style>