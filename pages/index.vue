<template>
  <!-- Our Services -->

  <section class="container max-w-screen-xl mx-auto">
    <h1 class="text-4xl text-center">Our Services</h1>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div
        v-for="service in servicesImages"
        :key="service.title"
        class="bg-pink-100 p-6 rounded-lg"
      >
        <img
          :src="service.logo"
          alt="Service Logo"
          class="w-16 h-16 mx-auto mb-4"
        />
        <h2 class="text-2xl font-bold mb-2">{{ service.title }}</h2>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </section>

  <!-- Trusted By -->
  <section
    class="container max-w-screen-xl flex flex-col mx-auto items-center justify-center section-gap"
  >
    <h1 class="text-40px font-bold">Trusted By</h1>
    <div class="grid grid-cols-6 gap-8 w-full">
      <div
        v-for="(link, index) in trustedByImages"
        :key="index"
        class="flex justify-center items-center h-24"
      >
        <img
          :src="link.link"
          alt="clients"
          class="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const trustedByImages = ref([
  { link: new URL(`../assets/Daihatsu.png`, import.meta.url).href },
  { link: new URL(`../assets/meiden.png`, import.meta.url).href },
  { link: new URL(`../assets/Daihatsu.png`, import.meta.url).href },
  { link: new URL(`../assets/Wuerth 1.png`, import.meta.url).href },
  { link: new URL(`../assets/Daihatsu.png`, import.meta.url).href },
  { link: new URL(`../assets/pokphand.png`, import.meta.url).href },
  { link: new URL(`../assets/toyota-indonesia.png`, import.meta.url).href },
  { link: new URL(`../assets/perodua.png`, import.meta.url).href },
  { link: new URL(`../assets/brt.png`, import.meta.url).href },
  { link: new URL(`../assets/ranch-market.png`, import.meta.url).href },
  { link: new URL(`../assets/astra-ud.png`, import.meta.url).href }
]);

const servicesImages = ref([
  {
    title: 'Education Solutions',
    logo: new URL('/assets/Graduation Cap.png',import.meta.url).href,
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida viverra vestibulum. Aenean eros tortor, sagittis id lorem quis, auctor facilisis nunc.'
  },
  {
    title: 'Embedded Systems',
    logo: new URL('/assets/Processor.png',import.meta.url).href,
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida viverra vestibulum. Aenean eros tortor, sagittis id lorem quis, auctor facilisis nunc.'
  },
  {
    title: 'Industrial Solutions',
    logo: new URL('/assets/Gears.png',import.meta.url).href,
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida viverra vestibulum. Aenean eros tortor, sagittis id lorem quis, auctor facilisis nunc.'
  },
  {
    title: 'Manufacturing Solutions',
    logo: new URL('/assets/Deployment.png',import.meta.url).href,
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida viverra vestibulum. Aenean eros tortor, sagittis id lorem quis, auctor facilisis nunc.'
  }
])
</script>
