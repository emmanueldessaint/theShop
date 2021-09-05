<template>
    <div style="background-color:white;height:100vh">
        <v-container>
            <p class="display-1 font-weight-light text-center pa-4">SHOPPING CART</p>
            <v-row>
                <v-col :cols="12" md="8" sm="12">
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class=" ml-5 text-left">ITEMS</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in $store.getters.getCartItems" :key="item.id">
                                    <td>
                                        <v-img style="height:80px;width:80px" class="mt-2" :src="'/products/'+item.image"></v-img>
                                    </td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.price }}</td>
                                    <td class="">
                                        <span>{{ item.quantity }}</span>
                                        <span class="">
                                            <v-btn x-small class="ml-3 ajouter-retirer" @click="() => addQuantity(item)">+</v-btn>
                                            <v-btn x-small class="ajouter-retirer" @click="() => substractOneQuantity(item)">-</v-btn>
                                        </span>
                                    </td>
                                    <td>{{ multiplication(item)}}</td>
                                    <td><v-btn small class="white--text" color="black" @click="() => removeItemFromCart(item)">X</v-btn></td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-col>
                <v-col :cols="12" md="4" sm="12" style="background-color:black;border-radius:7px">
                    <p class="headline white--text">Order Summary</p>
                    <p class="overline white--text">
                        The total costs for your order.
                    </p>
                    <v-simple-table>
                        <template v-slot:default>
                            <tbody>
                                <tr>
                                    <td>Order Subtotal</td>
                                    <td class="" style="width:50px">Price</td>
                                    <td class="" style="width:50px">Quantity</td>
                                    <td class="text-right" style="width:50px">Total Price</td>
                                </tr>
                                <tr v-for="item in $store.getters.getCartItems" :key="item.id">
                                    <td>
                                        {{ item.name }}
                                        
                                    </td>
                                    <td class="" style="width:50px">{{ item.price }}</td>
                                    <td class="" style="width:50px">{{ item.quantity }}</td>
                                    <td class="text-right" style="width:50px">{{ multiplication(item)}}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                    <div class="text-center">
                        <v-btn class="white mt-5" outlined>PROCEED TO PAY</v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            qprice: ''
        }
    },
    methods: {
        removeItemFromCart(item) {
            this.$store.dispatch('removeItemFromCart', item)
        },
        multiplication(item) {
            var multiplication = item.price*item.quantity            
            return multiplication
        },
        addQuantity(item) {  
            this.$store.dispatch('addOneQuantity', item)
            
        },
        substractOneQuantity(item) {
            if (item.quantity > 1) {
                this.$store.dispatch('substractOneQuantity', item)
           } 
            
        }
    },
    

    
}
</script>

<style scoped>
.ajouter-retirer{
    width:2px;

}
</style>