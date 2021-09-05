<template>
  <div>
      <v-container>
          <v-row>
              <v-col xs="3" v-for="allreview in allreviews" :key="allreview">
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
            
            allreviews: [],
            rating: "",            
        }
    },
    methods: {
        
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
        this.getAllReviews() 
    },
    
    
    computed: {
    filteredReviews: function () {
     return this.reviews.slice(0, 4)
     }
  }

  

}
</script>

<style>

</style>