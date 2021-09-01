<template>
    <div class="margin-top">
        <cart-component />
    </div>
</template>

<script>
import CartComponent from '../components/CartComponent.vue'

export default {
components: {  CartComponent }
    
  
}
</script>

<style>
.margin-top{
    margin-top:200px;
}
</style>