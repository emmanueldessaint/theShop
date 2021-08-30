<template> 
   <div>
       <app-navigator />
       <products />
   </div>
</template>

<script>
import AppNavigator from '../components/AppNavigator.vue'
import Products from '../components/Products.vue'

 export default {
  components: { Products, AppNavigator },
    
  }
</script>

<style>

</style>