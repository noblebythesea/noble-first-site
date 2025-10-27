<script setup>
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
</script>

<template>
  <div class="grid grid-cols-2">
    <img
      src="/images/food6.jpg"
      alt="Duck Drumsticks served with spicy cherry, sesame, five spice sauce & mango salad."
      class="w-full h-100 object-cover border-solid border-4 border-collapse border-bordeaux"
    />
    <img
      src="/images/food9.jpg"
      class="w-full h-100 object-cover border-solid border-4 border-collapse border-bordeaux"
    />
  </div>

  <div
    class="bg-bordeaux w-full grid sm:grid-cols-2 grid-cols-1 py-3 px-2 gap-2 lg:divide-white"
  >
    <div class="contact-div px-1.5">
      <p class="font-homemadeapple text-white text-2xl py-1.5">Contact us!</p>
      <div class="text-inter text-white px-2">
        <p class="py-1">Email Address: lysa@noblebythesea.com</p>
        <p class="py-1">Civic Address: 132 Water St., Saint Andrews, NB</p>
        <p>The main level of the historic Windsor House is home to Noble.</p>
      </div>
    </div>

    <div class="hours-div px-1.5">
      <p class="font-homemadeapple text-white text-2xl py-1.5">Noble Hours</p>
      <div class="text-inter text-white px-2">
        <p class="py-1">Closed on Mondays</p>
        <p class="py-1">Tuesday to Friday 5:00pm - 11:00pm</p>
        <p class="py-1">Saturday and Sunday 11:00am - 10:00pm</p>
      </div>
    </div>
  </div>
</template>
