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

        <!-- Image Content -->
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

const servicesList = [
  {
    title: 'Industrial Solutions',
    description: 'Since 2011, we got some experiences in multiple industries in Indonesia and SEA Region, from Financial Institutions to Education. See our industries experience and use case for more information:',
    image: industrial,
  },
  {
    title: 'Embedded Systems',
    description: 'Since 2011, we got some experiences in multiple industries in Indonesia and SEA Region, from Financial Institutions to Education. See our industries experience and use case for more information:',
    image: embedded,
  },
  {
    title: 'Educational Solutions',
    description: 'Since 2011, we got some experiences in multiple industries in Indonesia and SEA Region, from Financial Institutions to Education. See our industries experience and use case for more information:',
    image: education,
  },
  {
    title: 'Manufacturing Solutions',
    description: 'Since 2011, we got some experiences in multiple industries in Indonesia and SEA Region, from Financial Institutions to Education. See our industries experience and use case for more information:',
    image: manufacturing,
  },
  {
    title: 'Finance Solutions',
    description: 'Since 2011, we got some experiences in multiple industries in Indonesia and SEA Region, from Financial Institutions to Education. See our industries experience and use case for more information:',
    image: manufacturing,
  },
  {
    title: 'Sales & Marketing Solutions',
    description: 'Service Solutions',
    image: manufacturing,
  },
  {
    title: 'RFID Solutions',
    description: 'Since 2011, we got some experiences in multiple industries in Indonesia and SEA Region, from Financial Institutions to Education. See our industries experience and use case for more information:',
    image: manufacturing,
  },
  {
    title: 'Telecommunication Solutions',
    description: 'Since 2011, we got some experiences in multiple industries in Indonesia and SEA Region, from Financial Institutions to Education. See our industries experience and use case for more information:',
    image: manufacturing,
  },
  {
    title: 'Integration',
    description: 'Since 2011, we got some experiences in multiple industries in Indonesia and SEA Region, from Financial Institutions to Education. See our industries experience and use case for more information:',
    image: manufacturing,
  },
];
</script>
