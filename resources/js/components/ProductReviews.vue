<template>

  

    <div>
        HELLO
        <v-row class="reviews">
            <v-col :cols="12" v-for="review in reviews" :key="review">
                <span>{{ review.note }}</span>
                <router-link :to="`/user/${review.id_user}`"> <!-- Lien vers le profil de l'utilisateur -->
                    <h5>{{ review.title }}</h5>
                </router-link>
                <p v-if="review.description.length > 0">{{ review.description }}</p>
            </v-col>
        </v-row>
    </div>

</template>

<script>
export default {
  name: 'TopReviews',
  props: ['product'],
    data() {
        return {
            reviews: []
        }
    },
    methods: {
        getProductReviews() {
            axios.get('http://localhost:8000/api/product/' + this.product.id)
            .then((res) => {
                this.reviews = res.data
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.getProductReviews()
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


</style>