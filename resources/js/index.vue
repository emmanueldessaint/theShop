<template>
    <v-app>
        <header-component />
        <sticky-navigator />       
        <router-view></router-view>
        <footer-component />
        
    </v-app>
    
</template>

<script>
import HeaderComponent from './components/navigation/HeaderComponent.vue'
import StickyNavigator from './components/navigation/StickyNavigator.vue'
import HomePage from './screens/HomePage.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
    components: { HomePage, StickyNavigator, FooterComponent, HeaderComponent},
   
}
</script>

<style>

</style>