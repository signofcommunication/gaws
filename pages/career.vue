<template>
  <div class="max-w-screen mx-auto">
    <header
      class="w-full h-screen career-bg bg-no-repeat bg-cover bg-center relative"
    >
      <div class="absolute inset-0 bg-black opacity-30 blur-overlay"></div>
      <div
        class="container flex flex-col items-center justify-center text-white mx-auto h-full px-4 text-center relative"
      >
        <h1 class="text-xl sm:text-2xl md:text-3xl z-50">
          Join Our Growing Team!
        </h1>
        <h1
          class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl my-4 font-bold z-50"
        >
          We are looking for hardworking, passionate
          <br class="hidden sm:block" />
          and inquisitive people.
        </h1>
        <a
          href="#job-listing"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 z-50 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 sm:px-5 sm:py-3 me-2 mb-2"
        >
          View Opening Positions
        </a>
      </div>
    </header>

    <section class="py-8 px-4" id="job-listing">
      <div class="header flex flex-col items-center justify-center text-center">
        <h1 class="font-bold text-3xl sm:text-4xl">Opening Positions</h1>
        <p class="max-w-4xl sm:max-w-6xl my-6 text-sm sm:text-base lg:text-lg">
          We strive to create rockstar teams instead of rockstar individuals. If
          you are a team player who is always eager to learn new things or
          create valuable applications and make innovations, then maybe you are
          the right person/talent for our team. Join us immediately!
        </p>
      </div>
      <JobListing />
    </section>
  </div>
</template>

<style scoped>
.career-bg {
    background-image: url('/assets/career.png');
}

/* Blur overlay */
.blur-overlay {
  backdrop-filter: blur(10px); /* Adjust the blur amount as needed */
  z-index: 1; /* Make sure the overlay is behind the text */
}
</style>
