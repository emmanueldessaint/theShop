import HomePage from './screens/HomePage'
import Products from './components/Products'
import OneProduct from './components/OneProduct'



export default {
    mode:'history',
    routes: [
        {
            path:'/',
            component: HomePage
        },    
        
        {
            path:'/products',
            component: Products
        },    

        {
            path:'/oneproduct',
            component: OneProduct,
            props: true,
            name: 'OneProduct'
        },   
    ]
}