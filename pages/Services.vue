<script setup>
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const scrollToSelection = (selector) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: selector,
    ease: "power1.inOut",
  });
};
useSeoMeta({
  title: "Services",
});
</script>

<template>
  <section class="bg-gaws-base-color py-16">
    <!-- Header Section -->
    <div
      id="header-services"
      class="container mx-auto px-6 text-center text-white flex flex-col items-center justify-center space-y-6">
      <h2 class="text-3xl font-bold">Make Your Problems Simple</h2>
      <p class="mt-4 text-lg text-lg max-w-3xl mx-auto">
        GAWS has a mission to help enterprises in their digital transformation
        initiatives. We offer multiple choices of technology services, from
        strategy, implementation, and maintenance.
      </p>
      <button
        @click="scrollToSelection('#services-list')"
        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 z-20 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 sm:px-5 sm:py-3 me-2 mb-2">
        View More
      </button>
    </div>
  </section>

  <!-- Cards Section -->

  <!-- Services List -->

  <section id="services-list" class="py-16">
    <header class="flex flex-col items-center justify-center space-y-4">
      <h1 class="font-bold text-4xl">Capabilities</h1>
      <p class="max-w-2xl mx-auto text-center">
        Our capabilities will help organizations transform their business,
        increase efficiency, and reach their customers.
      </p>
    </header>
    <Hero />
  </section>
</template>

<style scoped>
#header-services {
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.services-card {
  /* transform: translateY(-20%); */
  position: relative;
  top: -20%;
}
</style>
