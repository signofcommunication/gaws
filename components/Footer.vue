<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between items-center">
        <!-- Left Section with Logo and Text -->
        <div class="mb-6 md:mb-0">
          <a href="/" class="flex items-center mb-4">
            <img src="/assets/gaws-logo.svg" class="h-48" alt="Gaws Logo" />
          </a>
          <span class="text-white text-xl font-semibold">
            Let's start your <br />
            Digital Journey with us
          </span>
          <p class="text-white mt-4">
            Gaws is the best partner for you to reach your <br />
            digital market with maximum potential
          </p>
        </div>

        <!-- Right Section with Links -->
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-2">
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              About
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="/about" class="hover:underline">Our Story</a>
              </li>
              <li class="mb-4">
                <a href="/about/#vision-mission" class="hover:underline"
                  >Visi & Misi Perusahaan</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Contact Us
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">(021) 42888951</a>
              </li>
              <li>
                <a href="#" class="hover:underline">gaws-it@gaws-it.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #070051;
}
</style>
