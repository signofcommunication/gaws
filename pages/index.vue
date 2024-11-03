<template>
  <!-- Header -->
  <header
    class="relative bg-[url('/assets/heading.jpg')] bg-cover bg-no-repeat h-screen"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <div
      class="relative container max-w-screen-xl mx-auto text-white h-full flex flex-col justify-center p-4"
    >
      <!-- Responsive Heading -->
      <h1
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
        ref="textElement"
      ></h1>

      <!-- Responsive Paragraph -->
      <p class="my-4 sm:my-6 text-sm sm:text-base md:text-lg">
        Our mission is to deliver IT solutions that enhance product quality,
        <br />
        streamline processes, and empower quick, strategic decisions—driving
        efficiency and growth for your business.
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
    data-aos="fade-right"
    data-aos-easing="ease-in-back"
    data-aos-delay="300"
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
      class=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 z-20 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl px-5 py-2.5 text-center mt-10 mb-2"
    >
      View More
    </a>
  </section>

  <!-- Trusted By -->
  <section
    class="container max-w-screen-xl flex flex-col mx-auto items-center justify-center my-16 px-4"
    data-aos="fade-left"
  >
    <h1 class="text-40px font-bold mb-12">Trusted By</h1>
    <ResponsiveMarquee />
  </section>
</template>

<script setup>
import {
    ref,
    onMounted
} from 'vue'
import {
    gsap,
    TextPlugin
} from 'gsap/all'
// Service Logos
import graduationCapLogo from '@/assets/Graduation Cap.png';
import processorLogo from '@/assets/Processor.png';
import gearsLogo from '@/assets/Gears.png';
import deploymentLogo from '@/assets/Deployment.png';

// Initialise GSAP
gsap.registerPlugin(TextPlugin)

const servicesImages = [{
        title: 'Education Solutions',
        logo: graduationCapLogo,
        description: 'Developing e-learning platforms and digital tools to enhance engagement, interaction, and the effectiveness of learning experiences.'
    },
    {
        title: 'Embedded Systems',
        logo: processorLogo,
        description: 'Providing customized embedded systems development for smart devices, automation, and the Internet of Things (IoT).'
    },
    {
        title: 'Industrial Solutions',
        logo: gearsLogo,
        description: 'Industrial software solutions that automate workflows, minimize risks, and significantly boost productivity.'
    },
    {
        title: 'Manufacturing Solutions',
        logo: deploymentLogo,
        description: 'Delivering smart manufacturing solutions with real-time monitoring, resource optimization, and enhanced efficiency.'
    }
];

const text = "Gaws Simplifying Complexity. We make IT simple."

const textElement = ref(null)

onMounted(() => {
  textElement.value.textContent = ''

  gsap.to(textElement.value, {
    text: text, // Use the `text` property with `TextPlugin`
    duration: 6, // Adjust speed for the typing effect
    ease: "power4.out",
    delay: 0.1 // Optional delay before animation starts
  })
})

definePageMeta({
  title: 'Gaws IT Solutions | Home',
})
</script>
