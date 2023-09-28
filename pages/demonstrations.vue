<template>
  <div class="w-full h-full md:p-4 view-transition-resume">
    <div class="absolute w-full top-1/16 h-15/16 md:h-14/16 md:px-1/8">
      <div
        class="p-4 w-full h-full rounded-t-10 md:rounded-b-10 backdrop-blur-3xl"
        style="background-color: rgba(15, 23, 42, 0.5)"
      >
        <div
          class="w-full h-full overflow-x-hidden overflow-y-auto px-4 c-slate-1"
        >
          <div class="text-2xl font-bold">Demonstrations</div>
          <div class="mt-6">
            <div class="text-xl font-bold">PicoServices</div>
            <p>
              Microservices have become all the rage, with their ability to
              scale up at to a nearly infinite scale at a nearly instant pace.
              However, microservices can sometime spiral out of control in
              complexity, leading to distributed requests which bloom in size
              and response time. Our solution? PicoServices. Miniature services
              which are so small, they can be run on a single core of a single
              CPU. This allows for the most efficient and fastest possible
              response times, with the least amount of overhead. By offloading
              complex arithmetic tasks to PicoServices, we can have our
              microservices focus more on what they do best, without worrying
              about the rest.
            </p>
          </div>
          <p v-if="pending" class="mt-6">Loading...</p>
          <p v-else-if="error" class="mt-6">{{ error }}</p>
          <p v-else class="mt-6">{{ data }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data, pending, error } = await useFetch("/api/sum", {
  query: {
    num1: 1,
    num2: 2,
  },
});
</script>
