<template>
  <section>
    <div class="max-w-screen-xl px-6 py-12 mx-auto">
      <div
        v-for="(list, index) in servicesList"
        :key="index"
        class="flex flex-col lg:flex-row lg:gap-12 mb-16 lg:mb-24"
      >
        <!-- Text Content -->
        <div
          :class="{
            'lg:w-7/12': index % 2 === 0,
            'lg:w-5/12': index % 2 !== 0,
            'w-full': true,
          }"
          class="mb-8 lg:mb-0"
        >
          <h1
            class="mb-6 text-3xl font-extrabold tracking-tight leading-tight md:text-4xl xl:text-5xl dark:text-black"
          >
            {{ list.title }}
          </h1>
          <p
            class="mb-8 font-light text-gray-500 md:mb-10 md:text-lg lg:text-xl dark:text-gray-400"
          >
            {{ list.description }}
          </p>
          <div class="flex flex-wrap gap-4">
            <a
              href="#"
              @click.prevent="handleGetStarted(list.title)"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                class="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Image Content remains the same -->
        <div
          :class="{
            'lg:w-5/12 lg:flex ml-auto': index % 2 === 0,
            'lg:w-5/12 lg:flex lg:order-first mr-auto': index % 2 !== 0,
            'w-full': true,
          }"
          class="mb-8 lg:mb-0"
        >
          <img
            :src="list.image"
            alt="mockup"
            class="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import education from '../assets/Services/educational solutions.png'
import industrial from '../assets/Services/Industrial Solutions.png'
import embedded from '../assets/Services/embedded systems.png'
import manufacturing from '../assets/Services/manufacturing solutions.png'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleGetStarted = (service) => {
  // Navigate to form page with the selected service as a query parameter
  router.push({
    path: '/contact-us', // Update this path to match your actual form route
    query: { service: service }
  })
}

const servicesList = [
  {
    title: 'Industrial Solutions',
    description: 'Empowering industries with advanced software solutions that drive automation, improve operational efficiency, and ensure safety compliance across manufacturing, logistics, and beyond.',
    image: industrial,
  },
  {
    title: 'Embedded Systems',
    description: 'Providing custom embedded system development for IoT devices, smart solutions, and automation, ensuring seamless integration and optimal performance in a connected world.',
    image: embedded,
  },
  {
    title: 'Educational Solutions',
    description: 'Creating engaging and effective e-learning platforms and tools to enhance education, boost engagement, and provide innovative digital learning experiences.',
    image: education,
  },
  {
    title: 'Manufacturing Solutions',
    description: 'Delivering robust manufacturing software solutions that optimize production, enable real-time monitoring, and streamline workflows to maximize output and reduce costs.',
    image: manufacturing,
  },
  {
    title: 'Finance Solutions',
    description: 'Developing secure and compliant financial software for institutions, enabling efficient operations, streamlined transactions, and enhanced customer experiences.',
    image: manufacturing,
  },
  {
    title: 'Sales & Marketing Solutions',
    description: 'Creating tools and platforms to enhance sales processes, improve marketing efficiency, and provide data-driven insights to support strategic business growth.',
    image: manufacturing,
  },
  {
    title: 'RFID Solutions',
    description: 'Offering RFID technology solutions for asset tracking, inventory management, and security, enabling seamless data capture and management for smarter operations.',
    image: manufacturing,
  },
  {
    title: 'Telecommunication Solutions',
    description: 'Providing reliable telecommunication software solutions to enhance connectivity, improve data security, and streamline operations for telecom providers.',
    image: manufacturing,
  },
  {
    title: 'Integration',
    description: 'Specializing in seamless integration services to connect disparate systems, optimize data flow, and create unified solutions for enhanced business agility.',
    image: manufacturing,
  },
];
</script>
