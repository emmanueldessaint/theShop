import HomePage from './screens/HomePage'
import OneProduct from './components/OneProduct'
import ProductsPage from './screens/ProductsPage'
import CartPage from './screens/CartPage.vue'

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
            component: OneProduct, 
            props: true,
            name: 'OneProduct'
        },   

        {
            path:'/cart',
            component: CartPage
        },  
    ]
}