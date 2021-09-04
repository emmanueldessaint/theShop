<template>
<div>
    
        <div class="filters">
            
        
                
                <div class="filter-price">
                    <v-range-slider
                        @change="filterProductPrice()"
                        v-model="range"
                        max="50"
                        min="10"
                        step="5"
                        thumb-label="always"
                        dense
                    ></v-range-slider>
                    <h5 class="d-flex justify-center">Filter price</h5>
                </div>
            
        </div>
        <div>
            
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
    // background-color: rgb(226, 226, 255);
    margin-bottom:-17px;
    
    width: 15rem;
}
h5{
    position:relative;
    bottom:20px;
}


</style>