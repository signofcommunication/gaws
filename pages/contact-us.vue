<template>
  <section class="contact-section">
    <div class="max-w-screen-xl mx-auto py-24" id="about">
      <header>
        <div class="gradient-container">
          <div class="gradient"></div>
          <div class="gradient"></div>
        </div>
        <section id="contact">
          <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div class="mb-4 text-center">
              <div class="mb-6 max-w-3xl mx-auto">
                <p class="text-black font-semibold uppercase tracking-wide">
                  Contact
                </p>
                <h2
                  class="font-heading mb-4 font-bold tracking-tight text-black text-3xl sm:text-5xl"
                >
                  Get in Touch
                </h2>
              </div>
            </div>
            <div
              class="flex flex-col items-center md:flex-row md:justify-center md:space-x-12"
            >
              <div class="w-full md:w-1/2 mb-6 md:mb-0">
                <ul>
                  <li class="flex mb-6">
                    <div
                      class="flex flex-shrink-0 h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path
                          d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                        ></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <h3 class="mb-2 text-lg font-medium text-black">
                        Our Address
                      </h3>
                      <p class="text-gray-600">
                        ITC Cemp. Mas, Komplek Blok N-10, Jl. Letjen Suprapto,
                        RW.8, Sumur Batu, Kec. Kemayoran, DKI Jakarta, Daerah
                        Khusus Ibukota Jakarta 10640
                      </p>
                      <p class="text-gray-600">Jakarta</p>
                    </div>
                  </li>
                  <li class="flex mb-6">
                    <div
                      class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path
                          d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                        ></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <h3 class="mb-2 text-lg font-medium text-black">
                        Contact
                      </h3>
                      <p class="text-gray-600">Mobile: (021) 42888951</p>
                      <p class="text-gray-600">Mail: gaws-it@gaws-it.com</p>
                    </div>
                  </li>
                  <li class="flex mb-6">
                    <div
                      class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <h3 class="mb-2 text-lg font-medium text-black">
                        Working hours
                      </h3>
                      <p class="text-gray-600">
                        Monday - Friday: 08:00 - 17:00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="w-full md:w-1/2">
                <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                  <h2 class="mb-4 text-2xl font-bold text-black">
                    Ready to Get Started?
                  </h2>
                  <form @submit.prevent="handleSubmit" id="contactForm">
                    <div class="mb-6">
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="name"
                          class="pb-1 text-xs uppercase tracking-wider text-black"
                          >Name</label
                        >
                        <input
                          type="text"
                          id="name"
                          v-model="formData.name"
                          placeholder="Your name"
                          class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-900 sm:mb-0"
                          name="name"
                        />
                      </div>
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="email"
                          class="pb-1 text-xs uppercase tracking-wider text-black"
                          >Email</label
                        >
                        <input
                          type="email"
                          id="email"
                          v-model="formData.email"
                          placeholder="Your email address"
                          class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-900 sm:mb-0"
                          name="email"
                        />
                      </div>
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="service"
                          class="pb-1 text-xs uppercase tracking-wider text-black"
                          >Select Service</label
                        >
                        <select
                          id="service"
                          v-model="formData.service"
                          class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-900 sm:mb-0"
                        >
                          <option disabled value="">Select a service</option>
                          <option
                            v-for="service in servicesList"
                            :key="service.title"
                            :value="service.title"
                          >
                            {{ service.title }}
                          </option>
                        </select>
                      </div>
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="textarea"
                          class="pb-1 text-xs uppercase tracking-wider text-black"
                          >Message</label
                        >
                        <textarea
                          id="textarea"
                          v-model="formData.message"
                          cols="30"
                          rows="5"
                          placeholder="Write your message..."
                          class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-900 sm:mb-0"
                        ></textarea>
                      </div>
                    </div>
                    <div class="text-center">
                      <button
                        type="submit"
                        class="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <!-- Gmaps Location -->
      <div
        class="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center p-4"
      >
        <!-- Google Maps (Left) -->
        <div class="w-full lg:w-1/2 h-64 lg:h-96 flex-shrink-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.743892625814!2d106.87086327353825!3d-6.165042393822192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f505ac4492bd%3A0xda2b749b8f08e8cb!2sGaws%20Inti%20Solusi.%20PT!5e0!3m2!1sen!2sid!4v1729058173989!5m2!1sen!2sid"
            class="w-full h-full"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <!-- Address and Text Information (Right) -->
        <div
          class="w-full lg:w-1/2 mt-4 lg:mt-0 text-left lg:text-right lg:pl-8"
        >
          <h2 class="text-xl lg:text-2xl font-light text-gray-500">
            Our Location
          </h2>
          <h1 class="text-2xl lg:text-4xl font-bold text-black my-2">
            Connecting Near and Far
          </h1>
          <h3 class="text-lg font-semibold text-black">Headquarters</h3>
          <p class="text-gray-700 leading-relaxed mt-2 max-w-md lg:ml-auto">
            ITC Cemp. Mas, Komplek Blok N-10, Jl. Letjen Suprapto, RW.8, Sumur
            Batu, Kec. Kemayoran, DKI Jakarta, Daerah Khusus Ibukota Jakarta
            10640
          </p>
          <p class="text-gray-700 mt-2 lg:ml-auto">Indonesia</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const formData = ref({
  name: '',
  email: '',
  service: '',
  message: ''
});

onMounted(() => {
  const serviceFromQuery = route.query.service

  if (route.query.service) {
    formData.value.service = route.query.service
  }
})

const servicesList = [
  {
    title: 'Industrial Solutions',
    description: 'Since 2011, we got some experiences in multiple industries in Indonesia and SEA Region, from Financial Institutions to Education. See our industries experience and use case for more information:',
  },
  {
    title: 'Embedded Systems',
    description: 'Since 2011, we got some experiences in multiple industries in Indonesia and SEA Region, from Financial Institutions to Education. See our industries experience and use case for more information:',
  },
  {
    title: 'Educational Solutions',
    description: 'Since 2011, we got some experiences in multiple industries in Indonesia and SEA Region, from Financial Institutions to Education. See our industries experience and use case for more information:',
  },
  {
    title: 'Manufacturing Solutions',
    description: 'Since 2011, we got some experiences in multiple industries in Indonesia and SEA Region, from Financial Institutions to Education. See our industries experience and use case for more information:',
  },
  {
    title: 'Finance Solutions',
    description: 'Since 2011, we got some experiences in multiple industries in Indonesia and SEA Region, from Financial Institutions to Education. See our industries experience and use case for more information:',
  },
  {
    title: 'Sales & Marketing Solutions',
    description: 'Service Solutions',
  },
  {
    title: 'RFID Solutions',
    description: 'Since 2011, we got some experiences in multiple industries in Indonesia and SEA Region, from Financial Institutions to Education. See our industries experience and use case for more information:',
  },
  {
    title: 'Telecommunication Solutions',
    description: 'Since 2011, we got some experiences in multiple industries in Indonesia and SEA Region, from Financial Institutions to Education. See our industries experience and use case for more information:',
  },
  {
    title: 'Integration',
    description: 'Since 2011, we got some experiences in multiple industries in Indonesia and SEA Region, from Financial Institutions to Education. See our industries experience and use case for more information:',
  },
];

const handleSubmit = () => {
  // Handle the form submission
  console.log(formData.value);
};
</script>

<style scoped>
.contact-section {
  /* Full-width background */
  width: 100%;
  background: hsl(239, 100%, 95%);
  padding: 2rem 0;
}

.gradient-container {
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(50px);
    opacity: 0.5;
    pointer-events: none;
}
</style>
