<template>
  <section>
    <div class="max-w-screen-xl px-4 py-8 mx-auto">
      <div
        v-for="(list, index) in servicesList"
        :key="index"
        class="flex flex-col lg:flex-row lg:gap-8 mb-8"
      >
        <!-- Text Content -->
        <div :class="index % 2 === 0 ? 'lg:w-7/12' : 'lg:w-4/12'">
          <h1
            class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black"
          >
            {{ list.title }}
          </h1>
          <p
            class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          >
            {{ list.description }}
          </p>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              class="w-5 h-5 ml-2 -mr-1"
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
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>

        <!-- Image Content -->
        <div
          :class="index % 2 === 0 ? 'lg:w-5/12 lg:flex ml-auto' : 'lg:w-5/12 lg:flex lg:order-first mr-auto'"
        >
          <img :src="list.image" alt="mockup" class="object-contain" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const servicesList = [
  {
    title: 'Service 1',
    description: 'Description of Service 1',
    image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png',
  },
  {
    title: 'Service 2',
    description: 'Description of Service 2',
    image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png',
  },
  {
    title: 'Service 3',
    description: 'Description of Service 3',
    image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png',
  },
  {
    title: 'Service 4',
    description: 'Description of Service 4',
    image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png',
  },
];
</script>
