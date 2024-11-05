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
        <div class="flex flex-col sm:flex-row sm:flex-wrap gap-8">
          <!-- About Section -->
          <div class="flex-1 min-w-[200px]">
            <h2 class="mb-4 font-semibold uppercase tracking-wide text-white">
              About
            </h2>
            <ul class="text-white space-y-2 font-light">
              <li>
                <a
                  href="/about"
                  class="hover:underline transition hover:text-underline"
                  >Our Story</a
                >
              </li>
              <li>
                <a
                  href="/about/#vision-mission"
                  class="hover:underline transition hover:text-underline"
                  >Vision & Mission</a
                >
              </li>
            </ul>
          </div>

          <!-- Contact Us Section -->
          <div class="flex-1 min-w-[200px]">
            <h2 class="mb-4 font-semibold text-white uppercase tracking-wide">
              Contact Us
            </h2>
            <ul class="text-white space-y-2 font-light">
              <li>
                <a
                  href="tel:+622142888951"
                  class="hover:underline transition hover:text-underline"
                  >(021) 4288 8951</a
                >
              </li>
              <li>
                <a
                  href="mailto:gaws-it@gaws-it.com"
                  class="hover:underline transition hover:text-underline"
                  >gaws-it@gaws-it.com</a
                >
              </li>
            </ul>
          </div>

          <!-- Our Location Section -->
          <div class="flex-1 min-w-[200px]">
            <h2 class="mb-4 text-white font-semibold uppercase tracking-wide">
              Our Location
            </h2>
            <ul class="text-white space-y-2 font-light">
              <li>
                <a
                  href="https://maps.app.goo.gl/Ap75EXRJUPoPD6xE6"
                  target="_blank"
                  class="hover:underline transition hover:text-underline"
                >
                  ITC Cemp. Mas, Komplek Blok N-10, Jl. Letjen Suprapto,<br />
                  RW.8, Sumur Batu, Kec. Kemayoran,<br />
                  DKI Jakarta, Jakarta 10640
                </a>
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
