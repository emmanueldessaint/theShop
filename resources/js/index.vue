<template>
    <v-app>
        <app-navigator />
        <router-view></router-view>
        
    </v-app>
    
</template>

<script>
import AppNavigator from './components/AppNavigator.vue'
import HomePage from './screens/HomePage.vue'

export default {
    components: { HomePage, AppNavigator, },
   
}
</script>

<style>

</style>