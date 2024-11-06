<script setup>
import gsap from "gsap";
import {
    ScrollToPlugin,
    TextPlugin
} from "gsap/all";
import {
    onMounted,
    ref
} from "vue";
import Hero from "@/components/Hero.vue";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(TextPlugin);

const scrollToSelection = (selector) => {
    gsap.to(window, {
        duration: 1,
        scrollTo: selector,
        ease: "power1.inOut",
    });
};

const text = "Make Your Problems Simple.";
const textElement = ref(null);

onMounted(() => {
    textElement.value.textContent = "";

    gsap.to(textElement.value, {
        text: text,
        duration: 6,
        ease: "power4.out",
        delay: 0.1,
    });
});

useSeoMeta({
    title: "Services",
});
</script>

<template>
  <!-- Single Root Element -->
  <div>
    <!-- Header Section -->
    <section class="bg-gaws-base-color py-16">
      <div
        id="header-services"
        class="container mx-auto px-6 text-center text-white flex flex-col items-center justify-center space-y-6"
      >
        <h2 class="text-6xl font-bold" ref="textElement"></h2>
        <p class="mt-4 text-lg max-w-3xl mx-auto">
          GAWS has a mission to help enterprises in their digital transformation
          initiatives. We offer multiple choices of technology services, from
          strategy, implementation, and maintenance.
        </p>
        <button
          @click="scrollToSelection('#services-list')"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 z-20 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 sm:px-5 sm:py-3 me-2 mb-2"
        >
          View More
        </button>
      </div>
    </section>

    <!-- Services List Section -->
    <section id="services-list" class="py-16">
      <header class="flex flex-col items-center justify-center mt-10">
        <h1 class="font-bold text-6xl">Capabilities</h1>
        <p class="max-w-2xl mx-auto text-center text-lg my-10">
          Our capabilities will help organizations transform their business,
          increase efficiency, and reach their customers.
        </p>
      </header>
      <Hero />
    </section>
  </div>
  <!-- End of single root div -->
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
    position: relative;
    top: -20%;
}
</style>
