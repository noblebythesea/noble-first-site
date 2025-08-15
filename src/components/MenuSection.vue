<script setup>
import { ref, computed } from "vue";

const selectedMenu = ref("NOBLELunchMenu");

const jpgSrc1 = computed(() => {
  return `/menus/${selectedMenu.value}P1.jpg`;
});
const jpgSrc2 = computed(() => {
  return `/menus/${selectedMenu.value}P2.jpg`;
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
        <option value="NOBLEHappyHourMenu">Happy Hour</option>
        <option value="NOBLEDinnerMenu">Dinner</option>
      </select>
    </div>

    <div class="relative w-full h-full border border-noblenavy shadow-md">
      <img
        :src="jpgSrc1"
        alt="Noble Menu Page 1"
        class="border border-noblenavy w-full h-full"
      />
      <img
        v-if="selectedMenu !== 'NOBLEHappyHourMenu'"
        :src="jpgSrc2"
        alt="Noble Menu Page 2"
        class="border border-noblenavy w-full h-full"
      />
    </div>
    <div class="font-inter text-noblenavy py-2">
      ** Due to Noble's mission to source our ingredients fresh from local
      artisans and farmers, our menu is subject to change every day.
    </div>
  </section>
</template>
