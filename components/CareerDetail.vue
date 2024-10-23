<template>
  <section class="min-h-screen">
    <!-- Job Header -->
    <header class="bg-white">
      <div class="container mx-auto px-4 py-8">
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <div>
            <nav class="text-sm mb-4">
              <a href="#" class="text-blue-600 hover:text-blue-800">Careers</a>
              <span class="mx-2 text-gray-500">/</span>
              <span class="text-gray-500">{{ job.department }}</span>
            </nav>
            <h1 class="text-3xl font-bold text-gray-900 mb-2">
              {{ job.title }}
            </h1>
            <div class="flex flex-wrap gap-4 items-center text-gray-600">
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {{ job.location }}
              </div>
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {{ job.type }}
              </div>
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {{ job.salary }}
              </div>
            </div>
          </div>
          <div class="mt-6 md:mt-0">
            <button
              @click="showApplyModal = true"
              class="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 
                           transition-colors font-medium"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->

    <main class="container mx-auto px-4 py-12 border flex justify-center">
      <div class="flex flex-col lg:flex-row gap-8 max-w-6xl w-full">
        <!-- Job Details -->
        <div class="flex-1 lg:mr-8">
          <!-- About the Role -->
          <section class="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 class="text-xl font-semibold mb-4">About the Role</h2>
            <div class="prose max-w-none">
              <p class="text-gray-600 mb-4">{{ job.description }}</p>
            </div>
          </section>

          <!-- Responsibilities -->
          <section class="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 class="text-xl font-semibold mb-4">Key Responsibilities</h2>
            <ul class="space-y-3">
              <li
                v-for="(responsibility, index) in job.responsibilities"
                :key="index"
                class="flex items-start"
              >
                <svg
                  class="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-gray-600">{{ responsibility }}</span>
              </li>
            </ul>
          </section>

          <!-- Requirements -->
          <section class="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 class="text-xl font-semibold mb-4">Requirements</h2>
            <ul class="space-y-3">
              <li
                v-for="(requirement, index) in job.requirements"
                :key="index"
                class="flex items-start"
              >
                <svg
                  class="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="text-gray-600">{{ requirement }}</span>
              </li>
            </ul>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="flex-1">
          <!-- Company Info -->
          <section class="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 class="text-xl font-semibold mb-4">About the Company</h2>
            <p class="text-gray-600 mb-4">{{ job.companyDescription }}</p>
            <div class="border-t pt-4 mt-4">
              <h3 class="font-medium text-gray-900 mb-2">Company Benefits</h3>
              <ul class="space-y-2">
                <li
                  v-for="(benefit, index) in job.benefits"
                  :key="index"
                  class="flex items-center text-gray-600"
                >
                  <svg
                    class="w-4 h-4 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {{ benefit }}
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showApplyModal: false,
      application: {
        name: '',
        email: '',
        phone: '',
        coverLetter: '',
        resume: null
      },
      job: {
        id: 1,
        title: 'Senior Frontend Developer',
        department: 'Engineering',
        location: 'Remote',
        type: 'Full-time',
        salary: '$120,000 - $160,000',
        description: 'We are seeking an experienced Frontend Developer to join our engineering team. You will be responsible for building and maintaining high-quality web applications using modern JavaScript frameworks.',
        responsibilities: [
          'Develop new user-facing features using Vue.js',
          'Build reusable components and libraries for future use',
          'Translate designs and wireframes into high-quality code',
          'Optimize applications for maximum speed and scalability',
          'Collaborate with backend developers and designers'
        ],
        requirements: [
          '5+ years of experience in frontend development',
          'Strong proficiency in JavaScript, HTML5, and CSS3',
          'Experience with Vue.js and modern frontend frameworks',
          'Understanding of server-side CSS preprocessing',
          'Familiarity with RESTful APIs and modern frontend best practices',
          'Strong problem-solving skills and attention to detail'
        ],
        companyDescription: 'We are a fast-growing technology company focused on building innovative solutions that transform how businesses operate.',
        benefits: [
          'Competitive salary and equity',
          'Health, dental, and vision insurance',
          'Unlimited PTO',
          'Remote work options',
          '401(k) with company match',
          'Professional development budget'
        ]
      },
      similarJobs: [
        {
          id: 2,
          title: 'Frontend Developer',
          location: 'New York, NY'
        },
        {
          id: 3,
          title: 'Full Stack Developer',
          location: 'Remote'
        },
        {
          id: 4,
          title: 'UI Engineer',
          location: 'San Francisco, CA'
        }
      ]
    }
  },
  methods: {
    handleFileUpload(event) {
      this.application.resume = event.target.files[0]
    },
    submitApplication() {
      // Handle application submission
      console.log('Application submitted:', this.application)
      this.showApplyModal = false
      // Reset form
      this.application = {
        name: '',
        email: '',
        phone: '',
        coverLetter: '',
        resume: null
      }
    }
  }
}
</script>
