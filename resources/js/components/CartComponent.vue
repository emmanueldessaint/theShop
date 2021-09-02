<template>
    <div style="background-color:white;height:100vh">
        <v-container>
            <p class="display-3 font-weight-light text-center pa-4">SHOPPING CART</p>
            <v-row>
                <v-col :cols="12" md="8" sm="12">
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">ITEM</th>
                                    <th class="text-left">ITEM NAME</th>
                                    <th class="text-left">ITEM PRICE</th>
                                    <th class="text-left">ITEM QUANTITY</th>
                                    <th class="text-left">REMOVE</th>
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
                                        <span>
                                            <v-btn small class="ml-3 ajouter-retirer">+</v-btn>
                                            <v-btn  small class="ajouter-retirer">-</v-btn>
                                        </span>
                                    </td>
                                    <td><v-btn class="white--text" color="black" @click="() => removeItemFromCart(item)">X</v-btn></td>
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
                                    <td class="text-right" style="width:50px">{{ item.price }}*{{ item.quantity }}</td>
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
    methods: {
        removeItemFromCart(item) {
            this.$store.dispatch('removeItemFromCart', item)
        },
        multiplication(item) {
            var multiplication = item.price*item.quantity
            
        }
    }
}
</script>

<style scoped>
.ajouter-retirer{
   
}
</style>