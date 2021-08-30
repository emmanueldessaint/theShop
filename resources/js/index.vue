<template>
    <v-app>
        <!-- <home-page />  -->
        <router-view></router-view>
        
    </v-app>
    
</template>

<script>

import HomePage from './screens/HomePage.vue'

export default {
    components: { HomePage},
   
}
</script>

<style>

</style>