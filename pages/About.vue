<script setup>
import {
    onBeforeUnmount,
    onMounted
} from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const beforeEnter = (el) => {
    el.style.opacity = 0; // Set initial opacity
};

const enter = (el, done) => {
    // Animate the opacity to 1 over 0.5 seconds
    el.animate([{
            opacity: 0
        }, {
            opacity: 1
        }], {
            duration: 500
        })
        .onfinish = done; // Call done when the animation is finished
};

onMounted(() => {
  AOS.init(); // Initialize AOS

  function randomizeTranslation(element) {
    // Randomize between -50% and 25%
    const randomX = Math.random() * 55 + 20;
    const randomY = Math.random() * 55 + 20;
    console.log(randomX, randomY);

    element.style.top = `${randomY}%`
    element.style.left = `${randomX}%`
  }

  // Run the function on each animation iteration
  document.querySelectorAll('.gradient').forEach(e => randomizeTranslation(e));
  setInterval(() => document.querySelectorAll('.gradient').forEach(e => randomizeTranslation(e)),
    3000);
});

onBeforeUnmount(() => {
    AOS.refresh(); // Refresh AOS on component unmount
});
</script>

<template>
  <section>
    <div
      id="about"
      class=" bg-dark min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div class="gradient-container">
        <div class="gradient" ref="element"></div>
        <div class="gradient"></div>
      </div>
      <transition name="fade" @before-enter="beforeEnter" @enter="enter">
        <header
          class="text-center flex flex-col justify-center items-center content"
        >
          <h1
            class="font-bold text-3xl sm:text-4xl md:text-5xl text-gaws-base-color"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Gaws Simplifying Complexity. <br />
            We make IT simple.
          </h1>
        </header>
      </transition>
    </div>

    <!-- Description -->
    <section
      class="container max-w-screen-xl mx-auto flex flex-col items-center justify-center my-12"
    >
      <div class="description">
        <p
          class="max-w-xl sm:max-w-2xl md:max-w-3xl text-base md:text-2xl text-center mb-8"
        >
          GAWS was established in 1998 with a strong foundation of expertise and
          a highly capable team. From the very beginning, we’ve been committed
          to actively supporting our clients in achieving their goals through
          the most effective and reliable IT solutions. Over the years, we’ve
          continuously evolved, becoming a trusted partner across diverse
          industries.
        </p>
        <p
          class="max-w-xl sm:max-w-2xl md:max-w-3xl text-base md:text-2xl text-center mb-8"
        >
          Our experience spans a wide array of sectors, developing systems for
          industrial, manufacturing, logistics, finance, sales & marketing,
          services, telecommunications, RFID, education, and even embedded
          systems. At GAWS, we take pride in delivering tailored solutions that
          drive efficiency and success for our clients.
        </p>
      </div>
    </section>

    <!-- Vision & Mission -->
    <div
      id="vision-mission"
      class="max-w-full mx-auto bg-dark min-h-screen flex flex-col items-center justify-center px-4"
      data-aos="fade-right"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
    >
      <div class="container max-w-screen-xl h-full flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/assets/brainstorming.png"
            alt="Brainstorming"
            class="w-64 sm:w-80 md:w-full"
          />
        </div>
        <div
          class="flex flex-col justify-center w-full md:w-1/2 mt-8 md:mt-0 px-4"
        >
          <h1 class="font-bold text-2xl md:text-3xl vision mb-4">Vision</h1>
          <p class="text-base md:text-lg mb-6">
            Menjadi perusahaan teknologi terdepan yang memberikan solusi
            inovatif untuk memajukan kehidupan masyarakat dan dunia bisnis
            secara berkelanjutan.
          </p>
          <h1 class="font-bold text-2xl md:text-3xl mission mb-4">Mission</h1>
          <ol class="list-decimal pl-5 text-base md:text-lg">
            <li class="mb-4">
              Mengembangkan produk dan layanan yang dapat memberikan manfaat
              nyata bagi pelanggan melalui teknologi yang efisien dan ramah
              lingkungan.
            </li>
            <li class="mb-4">
              Memberikan pengalaman pelanggan yang unggul melalui layanan yang
              cepat, responsif, dan personalisasi.
            </li>
            <li>
              Meningkatkan kompetensi karyawan dengan program pelatihan dan
              pengembangan berkelanjutan untuk mendorong inovasi.
            </li>
          </ol>
        </div>
      </div>
    </div>

    <!-- Why Gaws -->
    <div
      class="container max-w-screen-xl h-full flex flex-col mx-auto section-gap px-4"
      data-aos="fade-left"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
    >
      <h1 class="text-center why font-bold text-3xl md:text-4xl mb-12">
        Why Gaws?
      </h1>
      <div class="flex flex-col md:flex-row items-center justify-center gap-8">
        <div
          class="flex flex-col justify-center items-center text-center max-w-md"
        >
          <img
            src="/assets/Startup launch, ideas and metrics.png"
            alt="Startup Launch"
            class="w-48 sm:w-56 md:w-64 mb-4"
          />
          <h1 class="font-bold text-2xl my-2">Weekly / Biweekly Meeting</h1>
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
            amet diam erat. Aenean euismod velit id dignissim ultrices.
          </p>
        </div>
        <div
          class="flex flex-col justify-center items-center text-center max-w-md"
        >
          <img
            src="/assets/Ai assistant in retail.png"
            alt="AI Assistant"
            class="w-48 sm:w-56 md:w-64 mb-4"
          />
          <h1 class="font-bold text-2xl my-2">Flexible Changes</h1>
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
            amet diam erat. Aenean euismod velit id dignissim ultrices.
          </p>
        </div>
      </div>
    </div>

    <!-- Happy Clients -->
    <div
      class="container max-w-screen-xl flex flex-col mx-auto items-center justify-center section-gap px-4 relative flex overflow-x-hidden"
    >
      <h1 class="why font-bold text-3xl md:text-4xl mb-8">Happy Clients</h1>
      <p class="text-center text-base md:text-lg mb-8">
        Many companies have trusted GAWS. You still have doubts? contact us now
      </p>
      <ResponsiveMarquee />
    </div>
  </section>
</template>

<style scoped>
/* #vision-mission {
    background-color: #FFFBF5;
} */

.mission,
.vision {
    font-size: 24px;
}

.why {
    font-size: 40px;
}

.section-gap {
    padding: 100px 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
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
    background: radial-gradient(circle, hsl(239, 100%, 70%) 0%, rgba(255, 99, 99, 0) 70%);
    transition: top 3s linear, left 3s linear;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.gradient:nth-child(2) {
    background: radial-gradient(circle, hsl(239, 100%, 60%) 0%, rgba(45, 45, 45, 0) 70%);
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

.content {
    position: relative;
    z-index: 1;
    color: white;
    font-family: system-ui, -apple-system, sans-serif;
    text-align: center;
}
</style>
