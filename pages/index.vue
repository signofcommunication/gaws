<template>
  <!-- Header -->
  <div
    id="about"
    class="bg-dark min-h-screen flex flex-col items-center justify-center px-4"
  >
    <div class="gradient-container">
      <div class="gradient" ref="element"></div>
      <div class="gradient"></div>
    </div>
    <transition name="fade" @before-enter="beforeEnter" @enter="enter">
      <header
        class="text-center flex flex-col justify-center items-center content"
      >
        <!-- Add ref="textElement" to the h1 tag -->
        <h1
          ref="textElement"
          class="font-bold text-3xl sm:text-4xl md:text-5xl xl:text-[70px] text-gaws-base-color tracking-[-2px]"
        ></h1>
        <p class="max-w-[70%] mx-auto mt-[20px] text-[#6767df] mb-[40px]">
          Our mission is to deliver IT solutions that enhance product quality,
          streamline processes, and empower quick, strategic decisions—driving
          efficiency and growth for your business.
        </p>
        <a
          href="#services"
          class="text-base text-white sm:text-lg bg-gaws-base-color hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-center inline-flex max-w-max me-2 mb-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800 animate-pulse items-center"
          ><span class="mr-2">Get Started </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </header>
    </transition>
  </div>

  <!-- Our Services -->
  <section
    id="services"
    class="container max-w-screen-xl mx-auto flex flex-col justify-center items-center my-16 px-4"
    data-aos="fade-right"
    data-aos-easing="ease-in-back"
    data-aos-delay="300"
    data-aos-once="true"
  >
    <h1 class="text-4xl text-center mb-12">Our Services</h1>
    <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <div
        v-for="service in servicesImages"
        :key="service.title"
        class="p-6 rounded-lg shadow-lg bg-[#f0f5ff] text-center"
      >
        <img
          :src="service.logo"
          alt="Service Logo"
          class="w-16 h-16 mx-auto mb-4"
        />
        <h2 class="text-2xl font-bold mb-2 text-black">
          {{ service.title }}
        </h2>
        <p class="text-gray-800">{{ service.description }}</p>
      </div>
    </div>

    <a
      href="/services"
      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 z-20 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl px-5 py-2.5 text-center mt-10 mb-2"
    >
      View More
    </a>
  </section>

  <!-- Our Client -->
  <section
    class="container max-w-screen-xl flex flex-col mx-auto items-center justify-center my-16 px-4"
    data-aos="fade-left"
    data-aos-once="true"
  >
    <h1 class="text-40px font-bold mb-12">Our Client</h1>
    <ResponsiveMarquee />
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap, TextPlugin } from "gsap/all";
import AOS from "aos";
import graduationCapLogo from "@/assets/education-cap.svg";
import processorLogo from "@/assets/iconmonstr-cpu-2.svg";
import gearsLogo from "@/assets/gear.svg";
import deploymentLogo from "@/assets/manufacture.svg";

useSeoMeta({
  title: "Home",
  description:
    "Gaws IT Solutions is a leading provider of IT solutions that enhance productivity, streamline processes, and empower quick, strategic decisions. Our mission is to deliver IT solutions that make complex tasks simple and empower employees to make informed decisions.",
})

// Initialise GSAP and register TextPlugin
gsap.registerPlugin(TextPlugin);

const textElement = ref(null);
const text = "Gaws Simplifying Complexity. <br/> We make IT simple.";

// Element fade animations
const beforeEnter = (el) => {
  el.style.opacity = 0;
};
const enter = (el, done) => {
  el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 }).onfinish = done;
};

const servicesImages = [
  {
    title: "Education Solutions",
    logo: graduationCapLogo,
    description:
      "Developing e-learning platforms and digital tools to enhance engagement, interaction, and the effectiveness of learning experiences.",
  },
  {
    title: "Embedded Systems",
    logo: processorLogo,
    description:
      "Providing customized embedded systems development for smart devices, automation, and the Internet of Things (IoT).",
  },
  {
    title: "Industrial Solutions",
    logo: gearsLogo,
    description:
      "Industrial software solutions that automate workflows, minimize risks, and significantly boost productivity.",
  },
  {
    title: "Manufacturing Solutions",
    logo: deploymentLogo,
    description:
      "Delivering smart manufacturing solutions with real-time monitoring, resource optimization, and enhanced efficiency.",
  },
];


onMounted(() => {
  // Initialize AOS
  AOS.init();

  // GSAP text typing effect
  if (textElement.value) {
    textElement.value.innerHTML = ""; // Clear initial content
    gsap.to(textElement.value, {
      text: text,
      duration: 6,
      ease: "power4.out",
      delay: 0.1,
    });
  }

  // Gradients animation setup
  const gradients = document.querySelectorAll(".gradient");
  function randomizeTranslation(element) {
    const randomX = Math.random() * 55 + 20;
    const randomY = Math.random() * 55 + 20;
    element.style.top = `${randomY}%`;
    element.style.left = `${randomX}%`;
  }
  if (gradients.length > 0) {
    gradients.forEach((e) => randomizeTranslation(e));
    setInterval(() => {
      gradients.forEach((e) => randomizeTranslation(e));
    }, 3000);
  }
});

onBeforeUnmount(() => {
  AOS.refresh();
});
</script>

<style scoped>
header {
  z-index: 5;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#about {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.gradient-container {
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(50px);
  opacity: 0.5;
}

.gradient {
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    hsl(239, 100%, 70%) 0%,
    rgba(255, 99, 99, 0) 70%
  );
  transition: top 3s linear, left 3s linear;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.gradient:nth-child(2) {
  background: radial-gradient(
    circle,
    hsl(239, 100%, 60%) 0%,
    rgba(45, 45, 45, 0) 70%
  );
  animation-delay: -5s;
}

@keyframes move {
  0% {
    transform: translate(-50%, -50%);
    left: 30%;
    top: 10%;
  }

  50% {
    transform: translate(0%, 0%);
    left: 30%;
    top: 10%;
  }

  100% {
    transform: translate(-50%, -50%);
    left: 30%;
    top: 10%;
  }
}
</style>
