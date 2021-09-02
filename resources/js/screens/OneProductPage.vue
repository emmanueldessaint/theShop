<template>
  <div class="contenu">   
    <v-row class="product-border d-flex justify-center" >
        <v-col class="top-left-product d-flex justify-center" cols="6">
            <img class="image-produit" src ="data:image/jpeg;base64,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">
        </v-col>

        <v-col class="top-right-product" cols="6">
            <div class="ml-3">
                <div class="mb-3 mt-3"><h1>{{ product.name }}</h1></div>
                <div class="d-flex justify-space-around mt-5 mb-3">
                    <h3>{{ product.price }} €</h3>
                    <!-- <span><img src="../../public/assets/products/etoiles.png"></span> -->
                    <span><img class="stars" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdEAAABsCAMAAAACPni2AAAAilBMVEX/////0gP/0AD/zgD/7bP/997/+en/773/66z/++z/33D/55r//vj/3WH/6qf///3/21b/+eX/8sr//PL/2D//4n//9dX/8ML/1i//3Fn/6aL/9tv/7rf/4Xr/3mf/2k7/5pL/1Bz/5In/2Uf/1zX+4n3+44Xp6el4eHj/5Y7+5pX+8sj09PTDw8PC0mWaAAAMG0lEQVR4nO1daVfjyA51lROaQCALZGsgJE133gPe/P+/N95di2xLinTmnHnWx5nmnkvFubqlxSTJGP+m+M9//2kGY4wxxhhjjDHGGGOMMcYYY4wxxv9fTDXBVwtNdFXqquCztR724qyHnSQXRebJ07MieHL3ogh+e6eHvUtneuCJ2SiCT9K5Iro9KYK/Wz3so/2pB/5ijR54diwTPfC1VRSvubV64mXNbzXs5KTJfG7Nuxp48sdYPdmdWPOmhb2zxq60wJOz0WOeH4t9UkM3xvxSA18aoya7dxn2vRb41GbnogVeHMutFvhak3qmLsZ+62AvcuJ7HexcdPWYF8diPpTAk00GbrdK4JOcupLb3eXYarKbia4a8/JY1GQ3Z64mu8scXEl2jwX2SQe8EF21hPFegCsZ9UJ0tWR3Xp7LTgW8JK7k00+azMtjMUpFhk0BriS7k5L6UQN7V2Ir+fRCdJWY18dib1TQS+bmjwr4sgS3GhXSu4r5pwJ2JbpKzJtjUZHdSnR1ZHden8sPBfCauArzkybzeVoxVzHqmwpcpT4yqU/9QR57V2OrJIxz/bhoyG5zLCpGvWauUh9Z1uBWvix9bJhfxLEb0dWR3fZYFOoj65a6PPi8BX8VB2+wNWT3pMm8PRYN2d004Ar1kUlL/SCNvWuxFWS3EV0F5u6xWPnWdMtcoT5yaMHFZffOYS7ex5xaReat6GbgX9LgW5e6NPjcBZcuSzvY8rJ7cplL9zHdY5Gvj2wccPH6yMSlLtwN3LnY4j797D4uS2Fw71jE6yMuc3GjfnDBhcvSdx5zYZ8+9QQgFS6oL71jEa6PrD3qwkZ97oPLyq6HLS27J03m/rFIy+7GAxeuj0x86qLdwJ2PLezTz0aPeXgswkbdZy5c2Tn44KLidRcwF/Xp00AAZBNGcCyy9ZFtSF1Sduch+KMgeIAt69NPmszDY5HNGJsAW7Q+8hpSF+wG7qJPVNKnn8Mzl+xjTiLqkrIbMhetj4TqYqzctHQouqI+PRTdLGEIznkvI+qC9ZFQdEXrI7G6CHYDI2xJ2Q1FV5R5fCySshuKrmh9JFIXIzctHYmuqE/fx2cuN+cd5SLR+kjMXLCyE4luJl5S3cBYdAVlNxZdyT4mcCxy9ZFYdAWNOqQuYt1AAFsuYXxpMoeORU52Y9EVrI8A6iJWHwFEV1B2z9CZS/UxwWMRk12IuVh9BFIXnHitZkXcODF14mX78gAyf57cVjFx4vVHG5ObZHYTga9c9O32B/gtsvcQ+MQBf90li2Hq7yD199tB6k8I6oB1yan/BNFd6t/JTfX7PTpx78TX5yfI3OwPyzIOD04c75o4XpLbNLX9AWObgZ+yaeZYb/ZD4B3og+DPWb66V6OeOdap0aL+/pTrHo/5UKR5NW+25/54X9hzKRBQmrw+0jLRrs4q1H+X9+GLCvWqIjZ/V6Fe5cJLOvxvqdCNoXwRx86i6XK+yZ9L2mywrMWxM2/TZMKf4tTt85MadbdKuDgKU7fuzQm0bVeF45vmS2nqbotjepYFT93eryx151kpArYQbHS/LPP0IUr93b+VyX6RwgvCnSh6ULAWpJ6ekiBu5FK13UfLK19ySSON6o+CqTp80LOAnT4LfBkVCKZi1KHmhlSqTqF9oa0MtrEGGv6UStUpNBDz9CyDDpfCRTTAHuCm71qEeUcXb/EgQr2jsimUqjvqGp8Cz7o9d8whC2hAd7dawK7bj86iqUCq7u5WC3yRAFGs43qFsd0jJddSt+e+KtXPK5/GtG98+tpUDeRnJ65N1XF+dmJxuJJ67+BE3KykQA+MH12ZqgeGD64qCNiBPvhVX6ROUazj9grqdT1EgzqieM9P1fZhcCjrilv18HDjFal66EHPYsVWmHR4Eo5LHfDmQHBTNapJxb1Vh5dQOLipGjdN9oep66g+EksDUuTbX1ipuj8/O8FK1SmyG8tK1YOiWMc3gznuUWRSx0/YncinbvFTB5xUjV+Fod+qLX48mH4ZoAwGbGjUe7w5ENRUTWuuE1M1Ij87QU7VpOb6PfEjJW1lkahTZ/dIqRqXn50gpWrqEAkpVaNFsY6pwaN31UO6qaM1YNCbA4FP1WDtrD/wqdru6SNq+AI4Nj+7gVYYzhgp0mUgvDkQ6FTNmoBHpmpCfnYCnapZq6rgZFTMvLce0kMdg83d9NggqNsDc+IQlarZqx6YLxJZFOuYPSOoc/cCVsPMr9giAYfd/OBvkUCjtCF1/lAw4tD523v3w+Ds+VREyuAvNCww8sIFT07D2Pw9MngK2A/+fOoZQZ07n4r5/rP3yDA9Kr4CII6FrwCY6hH7PTvQjkEUTNWdYfwFe/EYWr2Igru+izoW9loAIl/w1wJww5M87EfUsXDXd3GGkQmOuqtzZRcjunzZBRa7AOo88frAYHOXsXAzDVzZRR0LdxsLd8Fg7pEh3GgerHeoP+GwmctYbyhw5st8V8j7KO+tCcdhZMP2jNgCBgcb2T1i7sDieDOXsZDHwtvGQpl0w12CxbhRw3zTVrzvDgfrHWHYQTKeZfyNpM66NGIHyVhvTZhhwU90bFz+N0zLCK1eguCcVzNij4X37gGUSTdMz4hyo3kwxAuX/w3TMiKxeZYRfSysN22hK/WcTVKcGzUs8YK3RqFgvGgLUaSrmTMsI/pYOLL7jadO94xIN2o44gXnf/g/0i3jJxqdcVOHjwU+KzI41qQb1gI/2GWEl0nJ4gX3jXdQ65FhGc8AdnoBLSrdMkLHYs87qH/HKJBCx5KewEoP/aoO7aTbxwXUZieLF3DpKgY4oKF+8k0dfD/KN9x6TMmdQMCkF01caNSG/Gd3QJO+hft3ZM8IuNFyngBwBuT7LgBRighAnWwZgZdSVQMcceuRzBw6ltK8QaM2VOrAS6nKTR9gTZZ8VY9LAHVTHpgQIIpX/CbAZoAjnhIit47PIbt2gCO+7VG7O/GbAJtJpXhKiFxmDNk52TL+PKjdnciNOicbKQzxvhteulK3fxNRJ1rGsEjnTSpFG77UtwSGx+JNKkXyRezuRK9fdSeVZr/D/0uT3dCN+ptbocIQ77vhL+47iJA6UXaDzkg4qXTvf+BE5pFJ97+F0T4Cjfov/4fToFEZuAyiZwzcaDh5Ng82nkj33eD16/E4bvAictpN3e+MxL92YJBoN3X/WIBxXH/AiSi7/gcaj+MGLoN2VQ/caFy69V086b77x/tJyJv41ElDdTcuL3gc1zNItJu6dyygN/Hli9TdefF4QeO4vkGiiZf3k+AFwlMY0n3Xhe4ax/WoU4i7186u0seOy9w9lq4ZSM8gkQqk7vhSlwl3y6ck2fV+567SqruoQbjvOvm/ZxzXoU66qbsNo07Ncw0SpbvjHEvPIp4jX6QC6Xn4QfddBsUztm60b/3JURiC8bq0P9R3MZm1FSTCKFPbGbHHvvph659SgmV0THrfU9bKF6VA6vwJxt6Pqp0Ap8huC96bCdqVcMJ9t4HufvFBGS11NHb7/Rgi1BgkSnenoT60XLVh/JnZ5iEbUtPGZRA8Y+tGh8xac4Lo+26d/3tffFDGtqqAEyxjVbvELFbWL57BW8b6WBBXnlq+CAXSPfJBT1qXgfeMVQsAsyxXV5DQPZLyTaAWt7hRUUePMlWdEdwG8Y7IvDoW3AZxdb/Dd3eqqS7Eg540LgMvu9UHirOBpUFCi9e5+NfY+ntJHW0Zq4IT0kqVK3J4y1ieCvaLUcoXukBamXSkHJUuA+0ZC3XBL8utKeJV5H9C7iq2+9CjTHlnhLKhVBwj9ukqTDqhzFzIF7q782yG3JwfhcvAdndyNxqWoPqiMEhI8fqy+LcHlHGy6FGmvDNCq+vlK3JY7brgkpz7Exbd3cl3DGjtlMIgIf8tQbiqyBQGKV579GsymsgMElJ2Xy36NRlNvFns146xhrs2FtndebTEBz3JXQbSM24teSM8VxjUfXeVctZwjynupv6QMtZwd8ikvk0Za7jzA7K780F+0LN4RSrpr97XknXFJcX8q9OSNWo+Qf2685S1hjt/RnF64/21yEfU93qWslY2ZjgF2PN22b4x913u5jNKM164fxINha5KfcvdwsM8jHPxv0c/xhhjjDHGGGOMMcYYY4wxxhhjjDHGGFX876+/Ac9enInkKXG+AAAAAElFTkSuQmCC"></span>
                    <h5>Lire les avis</h5>
                </div>
                <div class="mt-7"><p>Il n'en reste plus que x en stock</p></div>
                <div class="mt-5 mb-4"><p class="paragraphe-description">{{ product.description }}</p></div>
                <div class="d-flex justify-space-around mt-7">
                    <div class="d-flex flex-row">
                        <div class="nombre-dans-panier">{{ quantity }}</div>
                        <v-btn outlined color="white" class="ajouter-retirer" @click="() => ChangeQuantity(1)">+</v-btn>
                        <v-btn outlined color="white" class="ajouter-retirer ml-2" @click="() => ChangeQuantity()">-</v-btn>
                    </div>
                    <div>
                        <v-btn class="bouton-ajouter-panier" 
                        color="white"
                        outlined
                        @click="() => addItemToCart(product)">
                            <h4>Ajouter au panier</h4>
                        </v-btn>
                    </div>
                </div>
                <div class="mt-7"><p>Livraison offerte dès 50€ d'achat</p></div>
            </div>
        </v-col>
    </v-row> 
    <v-row>
        <div></div>
    </v-row>
    <CaracteristicsProductComponent v-bind:product="product"/>
    <ProductReviews v-bind:product="product"/>
    <BestSellers v-bind:product="product"/>
  </div>
</template>

<script>
import AppNavigator from '../components/AppNavigator.vue'
import ProductReviews from '../components/ProductReviews.vue'
import BestSellers from '../components/BestSellers.vue'
import CaracteristicsProductComponent from '../components/CaracteristicsProductComponent.vue'

export default {
  components: { AppNavigator, ProductReviews, BestSellers, CaracteristicsProductComponent },
    props: ['product'],
    data() {
        return {
            quantity: 1,
            
        }
    },
    methods: {
        addItemToCart(product) {
                                    
            
            const exist = this.$store.getters.getCartItems.filter(element => element.id === product.id) 
            console.log(exist)
            if (exist.length === 0) {
                this.product.quantity = this.quantity 
                this.$store.dispatch('addItemToCart', product)
               
            }
            else {
                exist[0].quantity += this.quantity
            }
            const exist2 = this.$store.getters.getCartItems.filter(element => element.id === product.id)
            console.log(exist2)                                                                  
        },       
        ChangeQuantity(payload) {
            if (payload) {
                this.quantity ++
            }
            else if (this.quantity > 1) {
                this.quantity --
            }
        },                
    }
}
</script>

<style scoped>
.contenu{
    margin-top:100px;
}
.product-border{
    margin-top:100px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    
    /* background-color:rgb(219, 219, 219); */
}
.top-right-product{
    /* background-color:rgb(240, 240, 240); */
}
.image-produit{
    height:500px;
    width:500px;
    object-fit: cover;
}
.stars{
    width:80px;
    height:20px;
}
.paragraphe-description{
    text-align:justify;
}
.nombre-dans-panier{
    display:flex;
    justify-content:center;
    align-items:center;
    width:40px;
    height:35px;
    border-radius:2px;
    margin-right:10px;
    border: solid 1px rgb(194, 194, 194);
}
.ajouter-retirer{
    display:flex;
    justify-content:center;
    align-items:center;
    width:40px;
    height:40px;
    background:rgb(85, 26, 26);
    font-size:200%;
    font-weight:bold;
    color:white;
}
.bouton-ajouter-panier{
    display:flex;
    justify-content:center;
    align-items:center;
    width: 350px;
    height:40px;
    background:rgb(85, 26, 26);
    color:white;

}
</style>