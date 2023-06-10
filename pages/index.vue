<template>
  <div class="w-full h-full view-transition-main">
    <div class="absolute w-full h-14/16 top-1/16 px-1/8">
      <div
        class="rounded-2rem p-4 w-full h-full rounded-10 grid grid-rows-4 backdrop-blur-3xl"
        style="background-color: rgba(15, 23, 42, 0.5)"
      >
        <div />
        <div class="flex flex-col w-2/3 mx-4">
          <div class="c-slate-1 text-8xl">howdy yall.</div>
          <div class="c-slate-1 pt-16 text-2xl pl-4">
            I'm Peter Yurkovich a full stack developer based in Asheville, North
            Carolina. Check out some of my
            <div class="inline-block">
              <NuxtLink
                to="/projects"
                class="pyn-transition-300 underline underline-dashed c-orange-3 hover:c-orange-4"
              >
                projects
              </NuxtLink>
            </div>
            or my
            <div class="inline-block">
              <NuxtLink
                to="/resume"
                class="pyn-transition-300 underline underline-dashed c-orange-3 hover:c-orange-4"
              >
                resume.
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavigationLeft to="projects" />
    <NavigationRight to="resume" />
  </div>
</template>
