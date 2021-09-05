<template>
  <v-carousel hide-delimiters class="carousel">
    <v-carousel-item
    
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'assets/background/vtt-1.jpg',
          },
          {
            src: 'assets/background/vtt-2.jpg',
          },
          {
            src: 'assets/background/vtt-3.jpg',
          },
          {
            src: 'assets/background/vtt-4.png',
          },
        ],
      }
    },
  }
</script>

<style>
.carousel{
    
}
.img-carousel{
    height:200%;
}
</style>