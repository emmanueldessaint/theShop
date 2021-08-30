import HomePage from './screens/HomePage'
import Products from './components/Products'



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
    ]
}