<template>
  <Navbar />
  <NuxtPage :key="route.fullPath" />
  <CTA v-if="!isContactPage" />
  <Footer />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const isContactPage = computed(() => route.path === '/contact-us')
</script>
