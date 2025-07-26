<script setup>
import { ref, computed } from "vue";

const selectedMenu = ref("NOBLELunchMenu");

const pdfSrc = computed(() => {
  return `/menus/${selectedMenu.value}.pdf`;
});
</script>

<template>
  <section class="p-6 max-w-4xl mx-auto">
    <h1 class="text-3xl font-homemadeapple mb-4 text-center text-noblenavy">Our Menus</h1>

    <div class="mb-6 text-center">
      <label for="menuSelect" class="mr-2 font-inter text-noblenavy">Choose a menu:</label>
      <select
        id="menuSelect"
        v-model="selectedMenu"
        class="border border-noblenavy px-2 py-1 rounded text-noblenavy"
      >
        <option value="NOBLELunchMenu">Lunch</option>
        <option value="NOBLEDinnerMenu">Dinner</option>
      </select>
    </div>

    <div class="relative w-full h-[600px] border shadow-md">
      <iframe
        :src="pdfSrc"
        class="w-full h-full"
        frameborder="0"
        title="Menu PDF"
      ></iframe>
    </div>
    <div class="font-inter text-noblenavy py-2">
      ** Due to Noble's mission to source our ingredients fresh from local
      artisans and farmers, our menu is subject to change every day.
    </div>
  </section>
</template>
