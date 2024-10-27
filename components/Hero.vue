<template>
  <section>
    <div class="max-w-screen-xl px-6 py-12 mx-auto">
      <div
        v-for="(list, index) in servicesList"
        :key="index"
        class="flex flex-col lg:flex-row lg:gap-12 mb-12"
      >
        <!-- Text Content -->
        <div
          :class="{
            'lg:w-7/12': index % 2 === 0,
            'lg:w-5/12': index % 2 !== 0,
            'w-full': true,
          }"
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
