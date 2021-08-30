<template> 
<div>
    <span>Hello</span>
    <div v-for="product in products" :key="product.id">
        <td>
            Hello
        </td>
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
            console.log('ca marche');
            axios.get('http://localhost:8000/products').then(response => {
                if(response.status >= 200 && response.status < 300 ){
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

<style>

</style>