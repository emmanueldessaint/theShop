<template>
    <div>
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
    name: 'ProductReviews',
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

<style lang="scss" scoped>

.reviews {
    margin: 2rem;
    & h5 {
        font-weight: bold;
    }
}

</style>