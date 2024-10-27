<template>
  <!-- Header -->
  <header
    class="relative bg-[url('/assets/heading.jpg')] bg-cover bg-no-repeat h-screen"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <div
      class="relative container mx-auto text-white h-full flex flex-col justify-center p-4"
    >
      <!-- Responsive Heading -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
        We Simplify IT for Your Success
      </h1>

      <!-- Responsive Paragraph -->
      <p class="my-4 sm:my-6 text-sm sm:text-base md:text-lg">
        Our mission is to deliver IT solutions that enhance product quality,
        <br />
        streamline processes, and empower quick,<br />
        strategic decisions—driving efficiency and growth for your business.
      </p>

      <!-- Responsive Button -->
      <a
        href="#"
        class="text-base sm:text-lg bg-gaws-base-color hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-center inline-flex max-w-max me-2 mb-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Get Started</a
      >
    </div>
  </header>

  <!-- Our Services -->
  <section
    class="container max-w-screen-xl mx-auto flex flex-col justify-center items-center my-16 px-4"
  >
    <h1 class="text-4xl text-center mb-12">Our Services</h1>
    <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <div
        v-for="service in servicesImages"
        :key="service.title"
        class="p-6 rounded-lg shadow-custom bg-[#ecf1f9] text-center"
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

    <a
      href="/services"
      class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-xl px-5 py-2.5 text-center mt-10 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    >
      View More
    </a>
  </section>

  <!-- Trusted By -->
  <section
    class="container max-w-screen-xl flex flex-col mx-auto items-center justify-center my-16 px-4"
  >
    <h1 class="text-40px font-bold mb-12">Trusted By</h1>
    <div class="relative py-12 overflow-hidden">
      <div class="animate-marquee flex">
        <div
          v-for="(link, index) in trustedByImages"
          :key="index"
          class="flex justify-center items-center h-40 md:h-24 lg:h-24 px-4"
        >
          <img
            :src="link.link"
            alt="clients"
            class="max-w-full max-h-full object-contain grayscale"
          />
        </div>
        <div
          v-for="(link, index) in trustedByImages"
          :key="'duplicate-' + index"
          class="flex justify-center items-center h-40 md:h-24 lg:h-24 px-4"
        >
          <img
            :src="link.link"
            alt="clients"
            class="max-w-full max-h-full object-contain grayscale"
          />
        </div>
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
  { link: astraUdLogo },
  { link: meidenLogo },
  { link: wuerthLogo },
  { link: pokphandLogo },
  { link: toyotaLogo },
  { link: peroduaLogo },
  { link: brtLogo },
  { link: ranchMarketLogo },
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

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* Move to the left by half the total width */
  }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
  display: flex;
  min-width: 200%; /* Ensures the marquee is wide enough */
}
</style>
