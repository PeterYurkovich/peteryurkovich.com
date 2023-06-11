<template>
  <div class="w-full h-full p-4 view-transition-projects">
    <div class="absolute w-full h-14/16 top-1/16 px-1/8">
      <div
        class="rounded-2rem p-4 w-full h-full rounded-10 backdrop-blur-3xl"
        style="background-color: rgba(15, 23, 42, 0.5)"
      >
        <div
          class="w-full h-full overflow-x-hidden overflow-y-auto px-4 c-slate-1"
        >
          <div class="mt-6">
            <h2 class="text-5xl ml-1">Projects</h2>
            <div class="flex flex-row gap-4 pt-6">
              <div class="h-full">
                <NuxtLink
                  to="https://pocket-fives.vercel.app/"
                  class="absolute w-325px h-325px hover:bg-slate-9 hover:bg-opacity-50 rounded-2xl group pyn-transition-300"
                >
                  <div
                    class="absolute rounded-2xl bottom-0 group-hover:c-orange-4 c-transparent text-2xl group-hover:bg-opacity-70 group-hover:bg-slate-9 w-full text-center pb-16 pt-4 pyn-transition-300"
                  >
                    pocket-fives.vercel.app
                  </div>
                </NuxtLink>
                <iframe
                  src="https://pocket-fives.vercel.app/"
                  width="325"
                  height="325"
                  scrolling="no"
                  class="rounded-2xl"
                />
              </div>
              <div class="grow flex flex-col justify-center pb-4">
                <div>
                  <div class="font-bold text-3xl">Pocket Fives</div>
                  <div class="text-lg pt-2">
                    This project came about from my teams frustration with
                    making split decisions on pointing stories. While working on
                    pocket fives I learned about oauth using github and
                    websocket communication through liveblocks.
                  </div>
                  <div class="flex flex-row mt-1.5 gap-2 pt-2">
                    <IconBadge icon="tabler:brand-nuxt">
                      <span>Nuxt</span>
                    </IconBadge>
                    <IconBadge icon="bxl:tailwind-css">
                      <span>Tailwind</span>
                    </IconBadge>
                    <Badge>
                      <LiveblocksLogo class="w-8rem h-1.75rem -mt-0.25" />
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row gap-4 pt-6">
              <div class="flex flex-col justify-center pb-4">
                <iframe
                  width="325"
                  height="183"
                  src="https://www.youtube.com/embed/ABccb6EJfFo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  class="rounded-2xl"
                ></iframe>
              </div>
              <div class="grow flex flex-col justify-center pb-4">
                <div>
                  <div class="font-bold text-3xl">Autonomous Intersection</div>
                  <div class="text-lg pt-2">
                    This project developed an simulation of a an intersection
                    routing fully autonomous vehicles through it through
                    wireless communication. This research was completed in
                    conjunction with Ford to help quantify the impact the cyber
                    attacks might incur on traffic flow.
                  </div>
                  <div class="flex flex-row mt-1.5 gap-2 pt-2">
                    <IconBadge icon="mdi:language-cpp"></IconBadge>
                    <IconBadge icon="mdi:language-python">
                      <span>Python</span>
                    </IconBadge>
                    <Badge>
                      <span>Tkinter</span>
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row gap-4 pt-6">
              <div class="flex flex-col justify-center pb-4">
                <iframe
                  width="325"
                  height="183"
                  src="https://youtube.com/embed/qT3Psxm0CbE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  class="rounded-2xl"
                ></iframe>
              </div>
              <div class="grow flex flex-col justify-center pb-4">
                <div>
                  <NuxtLink
                    to="/MI-RFGSM.pdf"
                    class="group"
                    target="_blank"
                    download=""
                  >
                    <div class="font-bold text-3xl">
                      <span
                        class="pyn-transition-300 underline underline-dashed decoration-orange-3 group-hover:decoration-orange-4 group-hover:c-orange-4 underline-offset-2"
                      >
                        Adversarial Attacks Against DRL
                      </span>
                      <Icon
                        name="material-symbols:download"
                        class="mb-0.75 pyn-transition-300 ease-in-out c-orange-3 group-hover:c-orange-4"
                      />
                    </div>
                  </NuxtLink>
                  <div class="text-lg pt-2">
                    This project developed an modification of typical
                    adversarial attacks against deep reinforcement learning
                    agents. It trained several Deep Reinforcement Learning (DRL)
                    models on MuJoCo environments and then attacked them using
                    our proposed method.
                  </div>
                  <div class="flex flex-row mt-1.5 gap-2 pt-2">
                    <IconBadge icon="mdi:language-python">
                      <span>Python</span>
                    </IconBadge>
                    <IconBadge icon="simple-icons:pytorch">
                      <span>PyTorch</span>
                    </IconBadge>
                    <IconBadge icon="simple-icons:pandas">
                      <span>Pandas</span>
                    </IconBadge>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row gap-4 pt-6">
              <div class="h-full">
                <NuxtLink
                  to="https://peteryurkovich.com/"
                  class="absolute w-325px h-325px hover:bg-slate-9 hover:bg-opacity-50 rounded-2xl group pyn-transition-300"
                >
                  <div
                    class="absolute rounded-2xl bottom-0 group-hover:c-orange-4 c-transparent text-2xl group-hover:bg-opacity-70 group-hover:bg-slate-9 w-full text-center pb-16 pt-4 pyn-transition-300"
                  >
                    peteryurkovich.com
                  </div>
                </NuxtLink>
                <iframe
                  src="https://peteryurkovich.com/"
                  width="325"
                  height="325"
                  scrolling="no"
                  class="rounded-2xl"
                />
              </div>
              <div class="grow flex flex-col justify-center pb-4">
                <div>
                  <div class="font-bold text-3xl">Personal Site v1</div>
                  <div class="text-lg pt-2">
                    Although mostly static this website was constructed in nuxt
                    to continue to grow my familiarity with it. It uses the new
                    view-transition api to provide smooth animations between
                    pages, and can be navigated using the arrow keys. It uses
                    unocss over tailwind for the greater fine grained control
                    over rules.
                  </div>
                  <div class="flex flex-row mt-1.5 gap-2 pt-2">
                    <IconBadge icon="tabler:brand-nuxt">
                      <span>Nuxt</span>
                    </IconBadge>
                    <IconBadge icon="vscode-icons:file-type-unocss">
                      <span>UnoCSS</span>
                    </IconBadge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavigationRight to="" view="main" />
    <NavigationFarRight to="resume" />
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 0.25em;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(253, 186, 116);
  border-radius: 1em;
}
</style>
