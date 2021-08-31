<template>
    <v-app>
        <app-navigator />       
        <router-view></router-view>
        <footer-component />
        
    </v-app>
    
</template>

<script>
import AppNavigator from './components/AppNavigator.vue'
import HomePage from './screens/HomePage.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
    components: { HomePage, AppNavigator, FooterComponent},
   
}
</script>

<style>

</style>