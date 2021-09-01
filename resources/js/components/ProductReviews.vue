<template>
    <div>
        {{ product.name }}
    </div>
</template>

<script>
export default {
    name: 'ProductReviews',
    props: ['product'],
    data() {
        return {

        }
    },
    methods: {
        getProductReviews() {
            axios.get('http://localhost:8000/api/product/' + product.id)
            .then((res) => {
                console.log(res)
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

</style>