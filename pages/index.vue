<template>
  <div class="w-full h-full p-4">
    <div class="w-full h-full px-1/8">
      <div
        class="bg-primary rounded-2rem p-4 w-full h-full rounded-10 grid grid-rows-4"
        style="background-color: rgba(15, 23, 42, 0.5)"
      >
        <div />
        <div class="flex flex-col w-2/3 mx-4">
          <div class="c-slate-1 text-8xl">Hey yall</div>
          <div class="c-slate-1 pt-10 text-2xl">
            I'm Peter Yurkovich a full stack developer based in Asheville, North
            Carolina.
          </div>
        </div>
      </div>
    </div>
    <NuxtLink
      to="/projects"
      class="fixed top-1/8 -left-100px h-3/4 w-200px rounded-10 bg-slate-9 bg-opacity-50 hover:bg-opacity-70 group transition duration-1000 ease-in-out"
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
      class="fixed top-1/8 -right-100px h-3/4 w-200px rounded-10 bg-slate-9 bg-opacity-50 hover:bg-opacity-70 group transition duration-1000 ease-in-out"
    >
      <div class="absolute top-1/2 left-1/4">
        <Icon
          name="bx:bxs-chevron-right"
          size="2rem"
          class="c-transparent transition duration-1000 ease-in-out group-hover:c-slate-1"
        />
      </div>
    </NuxtLink>
  </div>
</template>
