<template>
  <div class="relative py-4 sm:py-6 md:py-8 w-full overflow-hidden">
    <!-- Main marquee container with width constraint -->
    <div class="flex animate-marquee w-full">
      <!-- First set of images -->
      <div class="flex shrink-0">
        <div
          v-for="(image, index) in trustedByImages"
          :key="index"
          class="w-[200px] sm:w-[250px] flex justify-center items-center px-2 sm:px-4"
        >
          <div
            class="w-full min-h-[120px] sm:min-h-[140px] md:min-h-[160px] flex items-center justify-center"
          >
            <img
              :src="image.link"
              :alt="image.name"
              class="w-auto min-h-[100px] h-full max-h-[120px] sm:max-h-[140px] md:max-h-[160px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      <!-- Duplicate set for seamless loop -->
      <div class="flex shrink-0">
        <div
          v-for="(image, index) in trustedByImages"
          :key="`dup-${index}`"
          class="w-[200px] sm:w-[250px] flex justify-center items-center px-2 sm:px-4"
        >
          <div
            class="w-full min-h-[120px] sm:min-h-[140px] md:min-h-[160px] flex items-center justify-center"
          >
            <img
              :src="image.link"
              :alt="image.name"
              class="w-auto min-h-[100px] h-full max-h-[120px] sm:max-h-[140px] md:max-h-[160px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 25s linear infinite;
  will-change: transform;
  width: fit-content;
  display: flex;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

/* Base mobile styles */
.marquee-image {
  min-width: 120px;
  width: auto;
  height: auto;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .animate-marquee {
    animation-duration: 15s; /* Slightly faster on mobile */
  }

  /* Ensure images don't get too small on very small devices */
  img {
    min-width: 100px !important;
    min-height: 100px !important;
  }
}

/* Prevent images from being too large on bigger screens */
@media (min-width: 1024px) {
  img {
    max-width: 200px;
  }
}

/* Optional: Add smooth scaling when hovering */
img:hover {
  transform: scale(1.05);
  transition: transform 5s ease;
}
</style>

<script setup>
  // Import images
import meidenLogo from '@/assets/meiden.png';
import wuerthLogo from '@/assets/Wuerth 1.png';
import pokphandLogo from '@/assets/pokphand.png';
import toyotaLogo from '@/assets/toyota-indonesia.png';
import peroduaLogo from '@/assets/perodua.png';
import brtLogo from '@/assets/brt.png';
import ranchMarketLogo from '@/assets/ranch-market.png';
import astraUdLogo from '@/assets/astra-ud.png';

const trustedByImages = [
  { link: astraUdLogo },
  { link: meidenLogo },
  { link: wuerthLogo },
  { link: pokphandLogo },
  { link: toyotaLogo },
  { link: peroduaLogo },
  { link: brtLogo },
  { link: ranchMarketLogo },
];
</script>
