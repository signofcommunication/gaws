<script setup>
const props = defineProps(['title','department','location','type','id'])
</script>

<template>
  <div
    class="bg-blue-50 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 my-4 rounded-md mx-auto"
  >
    <div>
      <span class="text-blue-700 text-sm">{{ props.department }}</span>
      <h3 class="font-semibold mt-px text-blue-900">{{ props.title }}</h3>
      <div class="flex items-center gap-3 mt-2">
        <span
          class="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm"
          >{{ props.type }}</span
        >
        <span class="text-blue-600 text-sm flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {{ props.location }}, Indonesia
        </span>
      </div>
    </div>
    <div>
      <NuxtLink
        :to="`/careers/${props.id}`"
        class="bg-blue-600 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-blue-700 transition"
      >
        Apply Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>
