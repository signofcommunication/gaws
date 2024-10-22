<template>
  <!-- Our Services -->
  <section
    class="container max-w-screen-xl mx-auto flex flex-col justify-center items-center"
  >
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
    <button
      type="button"
      class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-xl px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    >
      Purple
    </button>
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
// Import images
import daihatsuLogo from '@/assets/Daihatsu.png';
import meidenLogo from '@/assets/meiden.png';
import wuerthLogo from '@/assets/Wuerth 1.png';
import pokphandLogo from '@/assets/pokphand.png';
import toyotaLogo from '@/assets/toyota-indonesia.png';
import peroduaLogo from '@/assets/perodua.png';
import brtLogo from '@/assets/brt.png';
import ranchMarketLogo from '@/assets/ranch-market.png';
import astraUdLogo from '@/assets/astra-ud.png';

// Service Logos
import graduationCapLogo from '@/assets/Graduation Cap.png';
import processorLogo from '@/assets/Processor.png';
import gearsLogo from '@/assets/Gears.png';
import deploymentLogo from '@/assets/Deployment.png';

const trustedByImages = [
  { link: daihatsuLogo },
  { link: meidenLogo },
  { link: wuerthLogo },
  { link: pokphandLogo },
  { link: toyotaLogo },
  { link: peroduaLogo },
  { link: brtLogo },
  { link: ranchMarketLogo },
  { link: astraUdLogo }
];

const servicesImages = [
  {
    title: 'Education Solutions',
    logo: graduationCapLogo,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida viverra vestibulum. Aenean eros tortor, sagittis id lorem quis, auctor facilisis nunc.'
  },
  {
    title: 'Embedded Systems',
    logo: processorLogo,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida viverra vestibulum. Aenean eros tortor, sagittis id lorem quis, auctor facilisis nunc.'
  },
  {
    title: 'Industrial Solutions',
    logo: gearsLogo,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida viverra vestibulum. Aenean eros tortor, sagittis id lorem quis, auctor facilisis nunc.'
  },
  {
    title: 'Manufacturing Solutions',
    logo: deploymentLogo,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida viverra vestibulum. Aenean eros tortor, sagittis id lorem quis, auctor facilisis nunc.'
  }
];
</script>
