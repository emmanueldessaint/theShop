import HomePage from './screens/HomePage'
import OneProductPage from './screens/OneProductPage'
import ProductsPage from './screens/ProductsPage'
import CartPage from './screens/CartPage.vue'
import ConnectionPage from './screens/ConnectionPage.vue'
import CreateAccountPage from './screens/CreateAccountPage'

export default {
    mode:'history',
    routes: [
        {
            path:'/',
            component: HomePage
        },    
        
        {
            path:'/products',
            component: ProductsPage
        },    

        {
            path:'/oneproduct',
            component: OneProductPage, 
            props: true,
            name: 'OneProduct'
        },   

        {
            path:'/cart',
            component: CartPage
        }, 
        
        {
            path:'/login',
            component: ConnectionPage
        },  

        {
            path:'/signup',
            component: CreateAccountPage
        },  
    ]
}