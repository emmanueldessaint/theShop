<template>
    <div class="filters">
        <h4>Filtres</h4>
        <div>
            <p class="filters-title mb-10">Par prix</p>
            <div class="filter-price">
                <v-range-slider
                    @change="filterProductPrice()"
                    v-model="range"
                    max="50"
                    min="10"
                    step="5"
                    thumb-label="always"
                ></v-range-slider>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductFilter',
    data() {
        return  {
            
            min: 10,
            max: 50,
            range: [10, 50],
            filteredProducts: [],
        }
    },
    methods: {
        filterProductPrice() {
            this.$emit('filterProductPrice', this.range)
        }
    }
}
</script>

<style lang="scss" scoped>


.filtres {
}

h4 {
    margin-bottom: 1.5rem;    
}

.filters {
    background-color: rgb(226, 226, 255);
    border-radius: 3px;
    height: 70vh;
    width: 15rem;
    padding: 1rem;
    margin-right: 1rem;

}



</style>