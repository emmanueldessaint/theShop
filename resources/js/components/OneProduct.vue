<template>
  <div>
      {{ product.name }}
  </div>
</template>

<script>
export default {
    props: ['product'],
    methods: {
        // getThisProduct() {
        //     axios.get('http://localhost:8000/api/categories').then(response => {
        //         if(response.status >= 200 && response.status < 300 ){
        //             this.product = response.data.product
        //             console.log(response.data.product)
        //         }
        //     })
        // },
    }
}
</script>

<style>

</style>