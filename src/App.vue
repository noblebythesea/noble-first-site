<script setup>
import Banner from "../src/components/Banner.vue";
import SidebarMenu from "../src/components/SidebarMenu.vue";
import Footer from "../src/components/Footer.vue";
</script>

<template>
  <Banner
    :announcements="[
      'Now serving Saturday and Sunday Brunch! Start your weekend right with a grapefruit mimosa &#9728;',
      'Menu offerings can change each day. Come and see if we have your favourite, or try something new!',
      'Check our social media for live music updates! &#9834;',
    ]"
  />
  <SidebarMenu />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
