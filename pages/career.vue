<template>
  <div class="max-w-screen mx-auto">
    <header class="w-full h-screen career-bg bg-no-repeat bg-cover bg-center">
      <div
        class="container flex flex-col items-center justify-center text-white mx-auto h-full"
      >
        <h1 class="text-2xl">Join Our Growing Team!</h1>
        <h1 class="text-4xl text-center my-4">
          We are looking for hardworking, passionate <br />
          and inquisitive people.
        </h1>
        <a
          href="#job-listing"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          View Opening Positon
        </a>
      </div>
    </header>
    <section class="py-8" id="job-listing">
      <div class="header flex flex-col items-center justify-center text-center">
        <h1 class="font-bold text-4xl">Opening Position</h1>
        <p class="max-w-6xl my-6">
          We strive to create rockstar teams instead of rockstar individuals. If
          you are a team player who always eager to learn new things or create
          valuable application and make innovation, then maybe you are the right
          person/talent for our team. Join us immediately!
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
</style>
