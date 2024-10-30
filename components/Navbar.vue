<template>
  <nav
    :class="[ 
      'fixed w-full top-0 transition-colors duration-300 z-50',
      isScrolled ? 'bg-gaws-white-opacity' : 'bg-gaws-white-transparent',
      'backdrop-blur-sm'
    ]"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/assets/gaws-logo.png" class="h-26" alt="Gaws Logo" />
      </a>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <!-- Menu List (Collapsed for mobile) -->
      <div
        :class="isMenuOpen ? 'block' : 'hidden'"
        class="w-full md:block md:w-auto"
        id="navbar-default"
      >
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700"
        >
          <li v-for="(link, index) in navLinks" :key="index">
            <NuxtLink
              :to="link.path"
              :class="[ 
                'block py-2 px-3 transition ease-in-out duration-300 hover:border-b-2 hover:border-blue-700', 
                isActive(link.path), 
                textColorClass 
              ]"
            >
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';

// Define reactive states for menu open/close and scroll detection
const isMenuOpen = ref(false);
const isScrolled = ref(false);

// Array of navigation links
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Careers', path: '/careers' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact-us' },
];

// Toggle function for mobile menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Use vue-router's useRoute to check the current route for active link
const route = useRoute();

// Function to add underline when the route matches
const isActive = (path) => {
  return route.path === path
    ? 'text-blue-700 border-b-2 border-blue-700'
    : '';
};

// Scroll event listener to change navbar background on scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50; // Adjust scroll position threshold if needed
};

// Computed property to determine text color based on background
const textColorClass = computed(() => {
  return isScrolled.value ? 'text-black' : 'text-white text-opacity-80'; // Change colors as needed
});

// // Register scroll event listener when component mounts and remove on unmount
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.bg-gaws-transparent {
  background-color: rgba(255, 255, 255, 0); /* Semi-transparent white */
}

.bg-gaws-white-opacity {
  background-color: rgba(255, 255, 255, 0.5); /* Semi-transparent white */
}
</style>
