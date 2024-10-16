<template>
  <div
    class="container max-w-screen-xl mx-auto bg-dark h-screen flex flex-col items-center justify-center"
  >
    <header class="text-center flex flex-col justify-center items-center">
      <h1 class="font-bold text-40px">
        Gaws Simplifying Complexity. <br />
        We make IT simple.
      </h1>
      <div class="description mt-8">
        <p class="max-w-3xl">
          GAWS was established in 1998 with a strong foundation of expertise and
          a highly capable team. From the very beginning, we’ve been committed
          to actively supporting our clients in achieving their goals through
          the most effective and reliable IT solutions. Over the years, we’ve
          continuously evolved, becoming a trusted partner across diverse
          industries.
        </p>
        <p class="max-w-3xl mt-8">
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
    class="max-w-full mx-auto bg-dark h-screen flex flex-col items-center justify-center"
  >
    <div class="container max-w-screen-xl h-full flex">
      <div class="w-2/4 flex justify-center items-center">
        <img src="/assets/brainstorming.png" alt="" />
      </div>
      <div class="flex flex-col justify-center w-2/4">
        <h1 class="font-bold vision">Vision</h1>
        <p>
          Menjadi perusahaan teknologi terdepan yang memberikan solusi inovatif
          untuk memajukan kehidupan masyarakat dan dunia bisnis secara
          berkelanjutan.
        </p>
        <h1 class="font-bold mission">Mission</h1>
        <ol class="list-decimal">
          <li>
            Mengembangkan produk dan layanan yang dapat memberikan manfaat nyata
            bagi pelanggan melalui teknologi yang efisien dan ramah lingkungan.
          </li>
          <li>
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
    class="container max-w-screen-xl h-full flex flex-col mx-auto section-gap"
  >
    <h1 class="text-center why font-bold">Why Gaws?</h1>

    <div class="flex items-center justify-center">
      <div class="flex flex-col justify-center items-center">
        <img src="/assets/Startup launch, ideas and metrics.png" alt="" />
        <h1 class="font-bold text-2xl my-2">Weekly / Biweekly Meeting</h1>
        <p class="max-w-md text-center text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          diam erat. Aenean euismod velit id dignissim ultrices. Aliquam non
          quam sit amet lacus mattis consequat.
        </p>
      </div>
      <div class="flex flex-col justify-center items-center">
        <img src="/assets/Ai assistant in retail.png" alt="" />
        <h1 class="font-bold text-2xl my-2">Flexible Changes</h1>
        <p class="max-w-md text-center text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          diam erat. Aenean euismod velit id dignissim ultrices. Aliquam non
          quam sit amet lacus mattis consequat.
        </p>
      </div>
    </div>
  </div>

  <!-- Happy Clients -->
  <div
    class="container max-w-screen-xl flex flex-col mx-auto items-center justify-center section-gap"
  >
    <h1 class="why font-bold">Happy Clients</h1>
    <p class="text-base">
      Many companies have trusted GAWS. You still have doubts? contact us now
    </p>
    <div class="flex justify-between items-center w-full">
      <img src="/assets/Daihatsu.png" alt="" class="clients" />
      <img src="/assets/Isuzu.png" alt="" class="clients" />
      <img src="/assets/meiden.png" alt="" class="clients" />
      <img src="/assets/Wuerth 1.png" alt="" class="clients" />
      <img src="/assets/pokphand.png" alt="" class="clients" />
      <img src="/assets/toyota-indonesia.png" alt="" class="clients" />
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
</style>
