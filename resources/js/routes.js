import HomePage from './screens/HomePage'
import Products from './components/Products'
import OneProduct from './components/OneProduct'
import AppNavigator from './components/AppNavigator'

import ProductsPage from './screens/ProductsPage'



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
    ]
}