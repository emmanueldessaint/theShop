<template>
  
    <nav>
  <ul class="d-flex justify-center">
    <li><router-link class="router-link router-menu nav-selections" to="/products">products</router-link></li>
    <li><router-link class="router-link router-menu nav-selections" to="/products">offers</router-link></li>
    <li><router-link class="router-link router-menu nav-selections" to="/products">Catalog</router-link></li>
    <li><router-link class="router-link router-menu nav-selections" to="/products">Who are we ?</router-link></li>
  </ul>
</nav>
  
</template>

<script>
export default {
    data() {
      return {
        
      }
    },
    methods: {
        removeItemFromCart(item) {
            this.$store.dispatch('removeItemFromCart', item)
        },
        
    },
    
  
  
}
</script>

<style scoped>

html, body {
  height: 200%;
}

nav {
  position: sticky;
  position: -webkit-sticky;
  top: 0; /* required */
  margin-top:20px;
  z-index:1000;
}

.nav-selections {
  text-transform: uppercase;
  letter-spacing: 4px;
  font: 18px "lato", sans-serif;
  display: inline-block;
  text-decoration: none;
  color:black;
  padding: 14px;

  margin-left: 50px;
  transition: 1.5s;
}

.nav-selections:hover {
  transition: 1.5s;
  color: rgb(161, 161, 161);
}

ul {
  background-color: #f0f0f0;
  overflow: auto;
  border-bottom: solid 1px rgb(221, 221, 221);
  border-top: solid 1px rgb(221, 221, 221);
}

li {
  list-style-type: none;
}
</style>