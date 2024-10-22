<template>
  <nav class="bg-gaws-base-color">
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
          <li>
            <a
              href="/services"
              :class="isActive('/services')"
              class="block py-2 px-3 text-white"
              >Services</a
            >
          </li>
          <li>
            <a
              href="/about"
              :class="isActive('/about')"
              class="block py-2 px-3 text-white"
              >About Us</a
            >
          </li>
          <li>
            <a
              href="/career"
              :class="isActive('/career')"
              class="block py-2 px-3 text-white"
              >Career</a
            >
          </li>
          <li>
            <a
              href="/blog"
              :class="isActive('/blog')"
              class="block py-2 px-3 text-white"
              >Blog</a
            >
          </li>
          <li>
            <a
              href="/contact-us"
              :class="isActive('/contact-us')"
              class="block py-2 px-3 text-white"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

// Define a reactive state for menu open/close
const isMenuOpen = ref(false);

// Toggle function to show/hide the menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Use vue-router's useRoute to check the current route
const route = useRoute();

// Function to add underline when the route matches
const isActive = (path) => {
  return route.path === path
    ? 'text-blue-700 border-b-2 border-blue-700'
    : 'text-gray-900';
};
</script>
