<template>
   <v-app>
    <v-container>
      <v-carousel show-arrows="hover" class="test">
        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-container>
  </v-app>
</template>

<script setup>
  //
</script>

<style scoped>
 

 .v-img__img v-img__img--cover{
  filter: grayscale(11%) brightness(22%) !important;
    -webkit-filter: grayscale(11%) brightness(22%) !important;
    -moz-filter: grayscale(11%) brightness(22%) !important;
 }


 
</style>