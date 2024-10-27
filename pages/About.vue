<template>
  <div
    class="container max-w-screen-xl mx-auto bg-dark min-h-screen flex flex-col items-center justify-center px-4"
  >
    <header class="text-center flex flex-col justify-center items-center">
      <h1 class="font-bold text-3xl sm:text-4xl md:text-5xl">
        Gaws Simplifying Complexity. <br />
        We make IT simple.
      </h1>
      <div class="description mt-8">
        <p class="max-w-xl sm:max-w-2xl md:max-w-3xl text-base md:text-lg">
          GAWS was established in 1998 with a strong foundation of expertise and
          a highly capable team. From the very beginning, we’ve been committed
          to actively supporting our clients in achieving their goals through
          the most effective and reliable IT solutions. Over the years, we’ve
          continuously evolved, becoming a trusted partner across diverse
          industries.
        </p>
        <p class="max-w-xl sm:max-w-2xl md:max-w-3xl mt-8 text-base md:text-lg">
          Our experience spans a wide array of sectors, developing systems for
          industrial, manufacturing, logistics, finance, sales & marketing,
          services, telecommunications, RFID, education, and even embedded
          systems. At GAWS, we take pride in delivering tailored solutions that
          drive efficiency and success for our clients.
        </p>
      </div>
    </header>
  </div>

  <!-- Vision & Mission -->
  <div
    id="vision-mission"
    class="max-w-full mx-auto bg-dark min-h-screen flex flex-col items-center justify-center px-4"
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
          Menjadi perusahaan teknologi terdepan yang memberikan solusi inovatif
          untuk memajukan kehidupan masyarakat dan dunia bisnis secara
          berkelanjutan.
        </p>
        <h1 class="font-bold text-2xl md:text-3xl mission mb-4">Mission</h1>
        <ol class="list-decimal pl-5 text-base md:text-lg">
          <li class="mb-4">
            Mengembangkan produk dan layanan yang dapat memberikan manfaat nyata
            bagi pelanggan melalui teknologi yang efisien dan ramah lingkungan.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          diam erat. Aenean euismod velit id dignissim ultrices.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          diam erat. Aenean euismod velit id dignissim ultrices.
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
    <div class="marquee">
      <div class="marquee-content">
        <img
          src="/assets/Daihatsu.png"
          alt="Daihatsu"
          class="clients w-20 h-auto"
        />
        <img src="/assets/Isuzu.png" alt="Isuzu" class="clients w-20 h-auto" />
        <img
          src="/assets/meiden.png"
          alt="Meiden"
          class="clients w-20 h-auto"
        />
        <img
          src="/assets/Wuerth 1.png"
          alt="Wuerth"
          class="clients w-20 h-auto"
        />
        <img
          src="/assets/pokphand.png"
          alt="Pokphand"
          class="clients w-20 h-auto"
        />
        <img
          src="/assets/toyota-indonesia.png"
          alt="Toyota Indonesia"
          class="clients w-20 h-auto"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
#vision-mission {
  background-color: #FFFBF5;
}

.mission,.vision {
  font-size: 24px;
}

.why {
  font-size: 40px;
}

.section-gap {
  padding: 100px 0;
}

.clients {
  filter: grayscale(100%)
}

.container {
  position: relative;
  overflow: hidden; /* Prevents overflow */
}

.marquee {
  width: 100%; /* Full width of the container */
  overflow: hidden; /* Prevents overflow */
  white-space: nowrap; /* Prevents items from wrapping to the next line */
}

.marquee-content {
  display: inline-flex; /* Arrange items in a line */
  animation: marquee 15s linear infinite; /* Animation settings */
}

.clients {
  margin-right: 20px; /* Spacing between images */
}

@keyframes marquee {
  0% {
    transform: translateX(100%); /* Start off-screen to the right */
  }
  100% {
    transform: translateX(-100%); /* Move to off-screen to the left */
  }
}
</style>
