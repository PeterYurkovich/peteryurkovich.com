<template>
  <div class="w-full h-full p-4 view-transition-resume">
    <div class="absolute w-full h-14/16 top-1/16 px-1/8">
      <div
        class="rounded-2rem p-4 w-full h-full rounded-10 backdrop-blur-3xl"
        style="background-color: rgba(15, 23, 42, 0.5)"
      >
        <div class="w-full h-full overflow-x-hidden overflow-y-auto px-4">
          <div class="bg-slate-8 rounded c-slate-1 py-3">
            <div class="grow">
              <h2 class="text-xl text-center">Education</h2>
              <div class="flex flex-row pt-4">
                <div class="bg-slate-2 mx-2 w-0.75"></div>
                <div class="flex flex-col grow">
                  <div class="">
                    <div>
                      <span class="font-bold">Virginia Tech</span>
                      <i> - Blacksburg, VA</i>
                    </div>
                    <div class="flex flex-row pt-2">
                      <h3>Master of Science in Civil Engineering</h3>
                      <div class="grow" />
                      <b class="mr-2"> May 2022 </b>
                    </div>
                    <div class="ml-4">
                      Transportation Infrastructure and Systems Engineering
                    </div>
                    <div class="ml-4">
                      Thesis: "RSU-Based Intrusion Detection and Autonomous
                      Intersection Response Systems"
                      <NuxtLink
                        to="https://vtechworks.lib.vt.edu/handle/10919/109308"
                        target="_blank"
                      >
                        <Icon name="ic:baseline-open-in-new" class="mb-0.75" />
                      </NuxtLink>
                    </div>
                  </div>
                  <div class="flex flex-row pt-2">
                    <h3>Bachelors of Science in Civil Engineering</h3>
                    <div class="grow" />
                    <b class="mr-2"> May 2020 </b>
                  </div>
                  <div class="ml-4">Minor In Computer Science</div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 class="c-slate-1">This is the second section</h2>
            <p class="c-slate-1">
              {{ exampleText }}
            </p>
          </div>
          <div>
            <h2 class="c-slate-1">This is the third section</h2>
            <p class="c-slate-1">
              {{ exampleText }}
            </p>
          </div>
          <div>
            <h2 class="c-slate-1">This is the fourth section</h2>
            <p class="c-slate-1">
              {{ exampleText }}
            </p>
          </div>
          <div>
            <h2 class="c-slate-1">This is the fifth section</h2>
            <p class="c-slate-1">
              {{ exampleText }}
            </p>
          </div>
          <div>
            <h2 class="c-slate-1">This is the sixth section</h2>
            <p class="c-slate-1">
              {{ exampleText }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <NuxtLink
      to="/"
      class="fixed top-1/8 -left-100px h-3/4 w-200px rounded-10 bg-slate-9 bg-opacity-50 hover:bg-opacity-70 group transition duration-1000 ease-in-out view-transition-main"
    >
      <div class="absolute top-1/2 right-1/4">
        <Icon
          name="bx:bxs-chevron-left"
          size="2rem"
          class="c-transparent transition duration-1000 ease-in-out group-hover:c-slate-1"
        />
      </div>
    </NuxtLink>
    <NuxtLink
      to="/projects"
      class="fixed top-1/4 -left-300px h-1/2 w-200px rounded-10 bg-slate-9 bg-opacity-50 hover:bg-opacity-70 group transition duration-1000 ease-in-out view-transition-projects"
    >
      <div class="absolute top-1/2 right-1/4">
        <Icon
          name="bx:bxs-chevron-left"
          size="2rem"
          class="c-transparent transition duration-1000 ease-in-out group-hover:c-slate-1"
        />
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const exampleText = ref(
  "this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. resume this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. resume this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. resume this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen."
);
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0.25em;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(51, 65, 85);
  border-radius: 1em;
}
</style>
