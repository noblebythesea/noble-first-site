<script setup></script>

<template>
  <section>
    <div
      class="flex absolute bg-bordeaux text-white text-center mt-4 py-8 px-4 font-kingred text-md leading-relaxed col-span-2"
    >
      With a focus on rejuvenating local coastal cuisine and integrating unique
      global flavors, NOBLE’s approach emphasizes fresh, locally sourced
      ingredients and a dynamic menu to support our community and make the most
      of every season.
    </div>
    <div class="py-4 grid grid-cols-2 md:grid-cols-4 place-items-center">
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
          class="bg-white border border-gray-600 px-6 py-2 text-black text-inter rounded hover:bg-bordeaux hover:text-white shadow-lg"
          >Explore Our Menu</router-link
        >
      </div>
    </div>
  </section>
</template>
