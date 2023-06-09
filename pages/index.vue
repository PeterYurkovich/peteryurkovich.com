<template>
  <div class="w-full h-full p-4">
    <div
      class="bg-primary rounded-2rem p-4 w-full h-full flex flex-row bg-slate-9 rounded-10"
    >
      <div
        class="display-none md-display-grid bg-slate-8 -m-4 mr-0 rounded-2rem"
      >
        <div class="w-64 flex flex-col" @click="scrollToSection(firstSection)">
          <div class="flex-grow" />
          <div
            class="c-slate-3 rounded-2rem m-4 bg-slate-7"
            ref="firstLocation"
          >
            <h3 class="text-xl text-center relative z-20">Education</h3>
            <p class="text-center relative z-20">2016-2022</p>
          </div>
          <div class="flex-grow" />
        </div>
        <div class="w-64 flex flex-col" @click="scrollToSection(secondSection)">
          <div class="flex-grow" />
          <div
            class="c-slate-3 rounded-2rem m-4 bg-slate-7"
            ref="secondLocation"
          >
            <h3 class="text-xl text-center relative z-20">second</h3>
            <p class="text-center relative z-20">2020-2021</p>
          </div>
          <div class="flex-grow" />
        </div>
        <div class="w-64 flex flex-col" @click="scrollToSection(thirdSection)">
          <div class="flex-grow" />
          <div
            class="c-slate-3 rounded-2rem m-4 bg-slate-7"
            ref="thirdLocation"
          >
            <h3 class="text-xl text-center relative z-20">third</h3>
            <p class="text-center relative z-20">2020-2021</p>
          </div>
          <div class="flex-grow" />
        </div>
        <div class="w-64 flex flex-col" @click="scrollToSection(fourthSection)">
          <div class="flex-grow" />
          <div
            class="c-slate-3 rounded-2rem m-4 bg-slate-7"
            ref="fourthLocation"
          >
            <h3 class="text-xl text-center relative z-20">fourth</h3>
            <p class="text-center relative z-20">2020-2021</p>
          </div>
          <div class="flex-grow" />
        </div>
        <div class="w-64 flex flex-col" @click="scrollToSection(fifthSection)">
          <div class="flex-grow" />
          <div
            class="c-slate-3 rounded-2rem m-4 bg-slate-7"
            ref="fifthLocation"
          >
            <h3 class="text-xl text-center relative z-20">fifth</h3>
            <p class="text-center relative z-20">2020-2021</p>
          </div>
          <div class="flex-grow" />
        </div>
        <div class="w-64 flex flex-col" @click="scrollToSection(sixthSection)">
          <div class="flex-grow" />
          <div
            class="c-slate-3 rounded-2rem m-4 bg-slate-7"
            ref="sixthLocation"
          >
            <h3 class="text-xl text-center relative z-20">sixth</h3>
            <p class="text-center relative z-20">2020</p>
          </div>
          <div class="flex-grow" />
        </div>
        <div
          class="absolute bg-slate-5 w-225px h-53px rounded-2rem transition-transform duration-400 z-10"
          :style="`top: ${firstBounding.top.value}px; left: ${firstBounding.left.value}px; transform: translateY(${boundingDifference}px)`"
        />
      </div>
      <div class="w-full h-full overflow-x-hidden overflow-y-auto px-4">
        <div ref="firstSection" class="bg-slate-8 rounded c-slate-1 py-3">
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
        <div ref="secondSection">
          <h2 class="c-slate-1">This is the second section</h2>
          <p class="c-slate-1">
            {{ exampleText }}
          </p>
        </div>
        <div ref="thirdSection">
          <h2 class="c-slate-1">This is the third section</h2>
          <p class="c-slate-1">
            {{ exampleText }}
          </p>
        </div>
        <div ref="fourthSection">
          <h2 class="c-slate-1">This is the fourth section</h2>
          <p class="c-slate-1">
            {{ exampleText }}
          </p>
        </div>
        <div ref="fifthSection">
          <h2 class="c-slate-1">This is the fifth section</h2>
          <p class="c-slate-1">
            {{ exampleText }}
          </p>
        </div>
        <div ref="sixthSection">
          <h2 class="c-slate-1">This is the sixth section</h2>
          <p class="c-slate-1">
            {{ exampleText }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const exampleText = ref(
  "this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. resume this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. resume this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. resume this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen. this is a bunch of text that is automatically generated from a database and is displayed on the screen."
);
const firstSection = ref<HTMLElement | null>(null);
const firstVisible = useElementVisibility(firstSection);
const secondSection = ref<HTMLElement | null>(null);
const secondVisible = useElementVisibility(secondSection);
const thirdSection = ref<HTMLElement | null>(null);
const thirdVisible = useElementVisibility(thirdSection);
const fourthSection = ref<HTMLElement | null>(null);
const fifthSection = ref<HTMLElement | null>(null);
const fifthVisible = useElementVisibility(fifthSection);
const sixthSection = ref<HTMLElement | null>(null);
const sixthVisible = useElementVisibility(sixthSection);

const firstLocation = ref<HTMLElement | null>(null);
const firstBounding = useElementBounding(firstLocation);
const secondLocation = ref<HTMLElement | null>(null);
const secondBounding = useElementBounding(secondLocation);
const thirdLocation = ref<HTMLElement | null>(null);
const thirdBounding = useElementBounding(thirdLocation);
const fourthLocation = ref<HTMLElement | null>(null);
const fourthBounding = useElementBounding(fourthLocation);
const fifthLocation = ref<HTMLElement | null>(null);
const fifthBounding = useElementBounding(fifthLocation);
const sixthLocation = ref<HTMLElement | null>(null);
const sixthBounding = useElementBounding(sixthLocation);

const scrollToSection = (section: HTMLElement | null) => {
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const activeNumber = computed(() => {
  if (firstVisible.value) {
    return 1;
  } else if (sixthVisible.value) {
    return 6;
  } else if (fifthVisible.value) {
    return 5;
  } else if (secondVisible.value) {
    return 2;
  } else if (thirdVisible.value) {
    return 3;
  } else return 4;
});

const realBounding = computed(() => {
  if (activeNumber.value === 1) {
    return firstBounding;
  } else if (activeNumber.value === 2) {
    return secondBounding;
  } else if (activeNumber.value === 3) {
    return thirdBounding;
  } else if (activeNumber.value === 4) {
    return fourthBounding;
  } else if (activeNumber.value === 5) {
    return fifthBounding;
  } else return sixthBounding;
});

const boundingDifference = computed(() => {
  return realBounding.value.top.value - firstBounding.top.value - 1;
});
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
