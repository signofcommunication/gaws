<template>
  <section class="min-h-screen mt-16">
    <!-- Job Header -->
    <header class="bg-white">
      <div class="container mx-auto px-4 py-8">
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <div>
            <nav class="text-sm mb-4">
              <NuxtLink to="/careers" class="text-blue-600 hover:text-blue-800"
                >Careers</NuxtLink
              >
              <span class="mx-2 text-gray-500">/</span>
              <span class="text-gray-500">{{ job.department }}</span>
            </nav>
            <h1 class="text-3xl font-bold text-gray-900 mb-2">
              {{ job.title }}
            </h1>
            <div class="flex flex-wrap gap-4 items-center text-gray-600">
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {{ job.location }}
              </div>
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {{ job.type }}
              </div>
            </div>
          </div>
          <div class="mt-6 md:mt-0">
            <button
              class="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-12 border flex justify-center">
      <div class="flex flex-col lg:flex-row gap-8 max-w-6xl w-full">
        <!-- Job Details -->
        <div class="flex-1 lg:mr-8">
          <!-- About the Role -->
          <section class="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 class="text-xl font-semibold mb-4">About the Role</h2>
            <div class="prose max-w-none">
              <p class="text-gray-600 mb-4">{{ job.description }}</p>
            </div>
          </section>

          <!-- Responsibilities -->
          <section class="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 class="text-xl font-semibold mb-4">Key Responsibilities</h2>
            <ul class="space-y-3">
              <li
                v-for="(responsibility, index) in job.responsibilities"
                :key="index"
                class="flex items-start"
              >
                <svg
                  class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-gray-600">{{ responsibility }}</span>
              </li>
            </ul>
          </section>

          <!-- Requirements -->
          <section class="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 class="text-xl font-semibold mb-4">Requirements</h2>
            <ul class="space-y-3">
              <li
                v-for="(requirement, index) in job.requirements"
                :key="index"
                class="flex items-start"
              >
                <svg
                  class="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="text-gray-600">{{ requirement }}</span>
              </li>
            </ul>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="flex-1">
          <!-- Company Info -->
          <section class="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 class="text-xl font-semibold mb-4">About the Company</h2>
            <p class="text-gray-600 mb-4">{{ job.companyDescription }}</p>
            <div class="border-t pt-4 mt-4">
              <h3 class="font-medium text-gray-900 mb-2">Company Benefits</h3>
              <ul class="space-y-2">
                <li
                  v-for="(benefit, index) in job.benefits"
                  :key="index"
                  class="flex items-center text-gray-600"
                >
                  <svg
                    class="w-4 h-4 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {{ benefit }}
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['details']);
const job = ref({
  department: '',
  title: '',
  location: '',
  type: '',
  description: '',
  responsibilities: [],
  requirements: [],
  companyDescription: '',
  benefits: [],
});

// Watch for changes in `details` to update `job`
watch(
  () => props.details,
  (newDetails) => {
    if (newDetails) {
      job.value = { ...newDetails };
    }
  },
  { immediate: true }
);

console.log(job.value);
</script>
