<template>
  <div class="w-full h-full p-4 view-transition-resume">
    <div class="absolute w-full h-14/16 top-1/16 px-1/8">
      <div
        class="rounded-2rem p-4 w-full h-full rounded-10 backdrop-blur-3xl"
        style="background-color: rgba(15, 23, 42, 0.5)"
      >
        <div
          class="w-full h-full overflow-x-hidden overflow-y-auto px-4 c-slate-1"
        >
          <div class="mt-6">
            <h2 class="text-5xl ml-1">Education</h2>
            <div class="flex flex-row pt-4">
              <div class="bg-orange-4 mx-2 w-0.75"></div>
              <div class="flex flex-col grow">
                <div>
                  <span class="font-bold text-xl">Virginia Tech</span>
                  <i class="text-xl"> - Blacksburg, VA</i>
                  <div class="flex flex-row pt-2 text-lg">
                    <h3>Master of Science in Civil Engineering</h3>
                    <div class="grow" />
                    <b class="mr-2"> May 2022 </b>
                  </div>
                  <i class="ml-4">
                    Transportation Infrastructure and Systems Engineering
                  </i>
                  <div class="ml-4">
                    Thesis:
                    <NuxtLink
                      to="https://vtechworks.lib.vt.edu/handle/10919/109308"
                      class="group"
                      target="_blank"
                    >
                      <span
                        class="pyn-transition-300 underline underline-dashed decoration-orange-3 group-hover:decoration-orange-4 group-hover:c-orange-4 underline-offset-2"
                      >
                        "RSU-Based Intrusion Detection and Autonomous
                        Intersection Response Systems"
                      </span>
                      <Icon
                        name="ic:baseline-open-in-new"
                        class="mb-0.75 pyn-transition-300 ease-in-out c-orange-3 group-hover:c-orange-4"
                      />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <h2 class="text-5xl ml-1">Work Experience</h2>
            <div class="flex flex-row pt-4">
              <div class="bg-orange-4 mx-2 w-0.75"></div>
              <div class="flex flex-col grow">
                <div>
                  <span class="font-bold text-xl">Accrisoft</span>
                  <div class="flex flex-row pt-2 text-lg">
                    <h3>Full Stack Developer</h3>
                    <div class="grow" />
                    <b class="mr-2"> July 2022 - Present </b>
                  </div>
                  Developed
                  <div class="flex flex-row mt-1.5 gap-2">
                    <IconBadge icon="akar-icons:php-fill">
                      <span>PHP</span>
                    </IconBadge>
                    <IconBadge icon="akar-icons:vue-fill">
                      <span>Vue</span>
                    </IconBadge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavigationLeft to="" view="main" />
    <NavigationFarLeft to="projects" />
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 0.25em;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(51, 65, 85);
  border-radius: 1em;
}
</style>
