<script setup>
import {
    useRoute
} from 'vue-router';
import {
    ref,
    onMounted
} from 'vue';

const job = ref({})
const route = useRoute()

onMounted(async () => {
  const jobId = route.params.id

  try {
    const response = await fetch('/jobs.json');
    const data = await response.json()

    job.value = data.find(job => job.id === parseInt(jobId))

    if (!job.value) {
      console.log(`job with id ${jobId} not found`)
    }
  } catch (error) {
    console.error('Error fetching job data:', error);
  }
})
</script>

<template>
  <CareerDetail :details="job" />
</template>
