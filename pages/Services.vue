<template>
  <section class="bg-gaws-base-color py-10">
    <!-- Header Section -->
    <div
      id="header-services"
      class="container mx-auto px-6 text-center text-white flex flex-col items-center justify-center"
    >
      <h2 class="text-3xl font-bold">Make Your Problems Simple</h2>
      <p class="mt-4 text-lg">
        GAWS has a mission to help enterprises in their digital transformation
        initiatives. We offer multiple choices of technology services, from
        strategy, implementation, and maintenance.
      </p>
    </div>
  </section>

  <!-- Cards Section -->
  <div class="container mx-auto px-6 relative">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
      <!-- Card 1 -->
      <div class="bg-white shadow-lg rounded-lg p-6 text-center services-card">
        <div class="mb-4">
          <!-- Replace this with an actual icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8c-1.1 0-2 .9-2 2v2a2 2 0 004 0v-2a2 2 0 00-2-2z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4M15 17l4-4M5 7l14 0"
            />
          </svg>
        </div>
        <h3 class="font-semibold text-lg">Education Solutions</h3>
        <p class="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          et metus id eros porta vehicula.
        </p>
      </div>

      <!-- Card 2 -->
      <div class="bg-white shadow-lg rounded-lg p-6 text-center services-card">
        <div class="mb-4">
          <!-- Replace this with an actual icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3H3v18h18V10H13zM3 10h18"
            />
          </svg>
        </div>
        <h3 class="font-semibold text-lg">Embedded Systems</h3>
        <p class="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          et metus id eros porta vehicula.
        </p>
      </div>

      <!-- Card 3 -->
      <div class="bg-white shadow-lg rounded-lg p-6 text-center services-card">
        <div class="mb-4">
          <!-- Replace this with an actual icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
        </div>
        <h3 class="font-semibold text-lg">Manufacture Solutions</h3>
        <p class="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          et metus id eros porta vehicula.
        </p>
      </div>

      <!-- Card 4 -->
      <div class="bg-white shadow-lg rounded-lg p-6 text-center services-card">
        <div class="mb-4">
          <!-- Replace this with an actual icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h18v18H3V3z"
            />
          </svg>
        </div>
        <h3 class="font-semibold text-lg">Industrial Solutions</h3>
        <p class="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          et metus id eros porta vehicula.
        </p>
      </div>
    </div>

    <!-- Services List -->

    <section>
      <header class="flex flex-col items-center justify-center">
        <h1 class="font-bold text-4xl">Capabilities</h1>
        <p>
          Our capabilities will help organizations transform their business,
          increase efficiency, and reach their customers.
        </p>
      </header>
      <Hero />
    </section>
  </div>
</template>

<script>
export default {
  name: "SolutionsSection",
};
</script>

<style scoped>
#header-services {
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.services-card {
  /* transform: translateY(-20%); */
  position: relative;
  top: -20%;
}
</style>
