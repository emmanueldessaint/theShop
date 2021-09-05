<template>
    <div class="d-flex justify-center pt-5">
        <router-link class="router-link router-menu nav-selections mt-5" to="/">
            <h2>PowerBike</h2>
            
        </router-link>
        
        <div class="div-search mt-3">
            <v-text-field
            label="Search"
            placeholder="parts & accessories"
            filled
            rounded
            dense
            block
        ></v-text-field>
        </div>
            
        <div>
            <div class="d-flex flex-row cart-login mt-5">
                <router-link class="router-link router-menu" to="/login"><font-awesome-icon class="icon-navigator" icon="user" /></router-link>
                <router-link class="router-link router-menu" to="/cart"><font-awesome-icon class="icon-navigator icon-cart" icon="shopping-cart" /></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.div-search{
    width:600px;
}
h2{
    margin-right:100px;
}
.cart-login{
    margin-left:100px;
}
.icon-navigator{
    font-size:160%;
}
.icon-cart{
    margin-left:40px;
}
.router-menu{
    text-decoration: none;
    color:inherit;
}
.logo-bike{
    width:160px;
}
</style>