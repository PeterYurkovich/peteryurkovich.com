<template>
    <div class="w-full h-full view-transition-main">
        <div class="absolute w-full top-1/16 h-15/16 md:h-14/16 md:px-1/8">
            <div
                class="p-4 w-full h-full rounded-t-10 md:rounded-b-10 grid md:grid-rows-4 grid-rows-2 bg-dark-8 border-gray border-2"
                ref="swipableContainer"
            >
                <div class="display-none md:display-block" />
                <div class="flex flex-col w-2/3 mx-4">
                    <div class="c-slate-1 md:text-8xl text-6xl mt-6 md:mt-0">
                        howdy yall.
                    </div>
                    <div class="c-slate-1 pt-16 text-2xl pl-4">
                        I'm Peter Yurkovich a full stack developer based in
                        Asheville, North Carolina. Check out my
                        <div class="inline-block">
                            <NuxtLink
                                to="/resume"
                                class="pyn-transition-300 underline underline-dashed c-orange-3 hover:c-orange-4"
                            >
                                resume
                            </NuxtLink>
                        </div>
                        or some of my
                        <div class="inline-block">
                            <NuxtLink
                                to="/projects"
                                class="pyn-transition-300 underline underline-dashed c-orange-3 hover:c-orange-4"
                            >
                                projects.
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NavigationLeft to="resume" class="display-none md:display-block" />
        <NavigationRight to="projects" class="display-none md:display-block" />
    </div>
</template>

<script setup lang="ts">
const swipableContainer = ref<HTMLElement | null>(null);

const { isSwiping, direction, lengthX } = useSwipe(swipableContainer);

watch(isSwiping, (val) => {
    if (!val && Math.abs(lengthX.value) > 100) {
        if (direction.value === "left") {
            navigateTo("resume");
        } else if (direction.value === "right") {
            navigateTo("projects");
        }
    }
});
</script>
