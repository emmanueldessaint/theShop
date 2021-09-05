<template>
    <v-app>
        <header-component />
        <app-navigator />       
        <router-view></router-view>
        <footer-component />
        
    </v-app>
    
</template>

<script>
import HeaderComponent from './components/navigation/HeaderComponent.vue'
import AppNavigator from './components/AppNavigator.vue'
import HomePage from './screens/HomePage.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
    components: { HomePage, AppNavigator, FooterComponent, HeaderComponent},
   
}
</script>

<style>

</style>