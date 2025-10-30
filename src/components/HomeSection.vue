<script setup>
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
</script>

<template>
  <section>
    <div v-if="width < 640" class="pt-4">
      <!-- first mobile image-->
      <img src="/images/food1.jpg" class="w-full h-128 object-cover" />
    </div>
    <div
      class="sm:absolute flex flex-col bg-bordeaux justify-center text-white text-center sm:mt-4 py-8 px-4 font-kingred text-md leading-relaxed col-span-2"
    >
      <p class="py-2">
        With a focus on rejuvenating local coastal cuisine and integrating
        unique global flavors, NOBLE’s approach emphasizes fresh, locally
        sourced ingredients and a dynamic menu to support our community and make
        the most of every season.
      </p>
      <div v-if="width < 640" class="py-2 bottom-0">
        <router-link
          to="/menu"
          tag="button"
          class="bg-white border border-noblenavy h-200 px-6 py-2 text-noblenavy text-inter rounded hover:bg-bordeaux hover:text-white shadow-lg"
          >Explore Our Menu</router-link
        >
      </div>
    </div>
    <div v-if="width < 640">
      <!-- second mobile image-->
      <img src="/images/food5.jpg" class="w-full h-128 object-cover" />
    </div>
    <div
      v-if="width >= 640"
      class="py-4 grid grid-cols-2 md:grid-cols-4 place-items-center"
    >
      <!-- grid images-->
      <img
        v-for="i in 4"
        :key="i"
        :src="`/images/food${i}.jpg`"
        class="w-full h-128 object-cover"
      />
      <div class="absolute flex justify-center pt-100">
        <router-link
          to="/menu"
          tag="button"
          class="bg-white border border-noblenavy px-6 py-2 text-noblenavy text-inter rounded hover:bg-bordeaux hover:text-white shadow-lg"
          >Explore Our Menu</router-link
        >
      </div>
    </div>
  </section>
</template>
