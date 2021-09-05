<template>  
    <div>                       
        <v-container v-if="product">
            <v-row v-if="reviews.length > 3" class="reviews">               
                    <v-col :cols="12" md="3" v-for="review in filteredReviews" :key="review">  
                        <router-link :to="`/user/${review.id_user}`" class="router-link-comment">   
                            <div v-if="review.note === '1'"><star-rating star-size="20" v-model="rating"></star-rating></div>
                            <div v-else-if="review.note === '2'"><star-rating star-size="20" v-model="rating"></star-rating></div>
                            <div v-else-if="review.note === '3'"><star-rating star-size="20" v-model="rating"></star-rating></div>
                            <div v-else-if="review.note === '4'"><star-rating star-size="20" v-model="rating"></star-rating></div>
                            <div v-else-if="review.note === '5'"><star-rating star-size="20" v-model="rating"></star-rating></div>                            
                            <h5 class="mt-5">{{ review.title }}</h5>                            
                            <p class="mt-5" v-if="review.description.length >0>100">{{ review.description }}</p>
                            <p class="mt-5" v-else>{{ review.description.substring(0,100) + "..." }}</p>
                        </router-link>
                    </v-col>               
            </v-row>
            <v-row v-else>

                Il n'y a pas assez d'avis
            </v-row>
            
        </v-container>
        <v-container v-else>
            HELLO
            
            <span v-for="allreview in allreviews" :key="allreview">HELLO</span>
        </v-container>
    </div>
</template>


<script>
import StarRating from 'vue-star-rating'
export default {
    components: {
        StarRating
    },
    name: 'TopReviews',
    props: ['product'],
    data() {
        return {
            reviews: [],
            allreviews: [],
            rating: "",            
        }
    },
    methods: {
        getProductReviews() {
            axios.get('http://localhost:8000/api/product/' + this.product.id)
            .then((res) => {
                this.reviews = res.data
                console.log(this.reviews)
            })
            .catch((err) => {
                console.log(err)
            })
        },
        getAllReviews() {
            axios.get('http://localhost:8000/api/reviews')
            .then((res) => {
                this.allreviews = res.data
                console.log(this.allreviews)
            })
            .catch((err) => {
                console.log(err)
            })
        },
        ratingNumber(review) {
            let rating = review.note
        }
    },
    
    
    mounted() {
        this.getProductReviews()
        this.getAllReviews()
    },
    
    computed: {
    filteredReviews: function () {
     return this.reviews.slice(0, 4)
     }
  }

  

}
</script>

<style lang=scss scoped>
.background{
background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, 
rgb(243, 245, 255) 33%, rgb(243, 245, 255) 67%, rgba(255,255,255,1) 100%);
}
.stars{
    width:100px;
    height:20px;
}
.paragraphe-commentaire{
  font-family:  "Courier New", monospace;


}

.reviews {
    margin: 2rem;
    & h5 {
        font-weight: bold;
    }
}
.router-link-comment{
    text-decoration: none;
    color:inherit;
}

</style>