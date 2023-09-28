<template>
    <div class="w-full h-full md:p-4 view-transition-resume">
        <div
            class="absolute w-full top-1/16 h-15/16 md:h-14/16 md:px-1/8"
            ref="swipableContainer"
        >
            <div
                class="p-4 w-full h-full rounded-t-10 md:rounded-b-10 backdrop-blur-3xl"
                style="background-color: rgba(15, 23, 42, 0.5)"
            >
                <div
                    class="w-full h-full overflow-x-hidden overflow-y-auto px-4 c-slate-1"
                >
                    <div class="mt-6">
                        <h2 class="md:text-5xl text-3xl ml-1">Education</h2>
                        <div class="flex flex-row pt-4">
                            <div class="bg-orange-4 mx-2 w-1 shrink-0"></div>
                            <div class="flex flex-col grow">
                                <div>
                                    <span class="font-bold text-2xl"
                                        >Virginia Tech</span
                                    >
                                    <div class="md:display-none" />
                                    <i class="text-2xl"> - Blacksburg, VA</i>
                                    <div
                                        class="flex flex-col md:flex-row pt-2 text-xl mb-2"
                                    >
                                        <h3>
                                            Master of Science in Civil
                                            Engineering
                                        </h3>
                                        <div class="grow" />
                                        <b class="mr-2"> May 2022 </b>
                                    </div>
                                    <i class="md:ml-4 text-lg">
                                        Transportation Infrastructure and
                                        Systems Engineering
                                    </i>
                                    <div class="md:ml-4 text-lg">
                                        Thesis:
                                        <NuxtLink
                                            to="https://vtechworks.lib.vt.edu/handle/10919/109308"
                                            class="group"
                                            target="_blank"
                                        >
                                            <span
                                                class="pyn-transition-300 underline underline-dashed decoration-orange-3 group-hover:decoration-orange-4 group-hover:c-orange-4 underline-offset-2"
                                            >
                                                "RSU-Based Intrusion Detection
                                                and Autonomous Intersection
                                                Response Systems"
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
                            <div class="bg-orange-4 mx-2 w-1 shrink-0"></div>
                            <div class="grow">
                                <span class="font-bold text-2xl"
                                    >Accrisoft</span
                                >
                                <div
                                    class="flex flex-col md:flex-row pt-2 text-xl"
                                >
                                    <h3>Full Stack Developer</h3>
                                    <div class="grow" />
                                    <b class="mr-2"> July 2022 - Present </b>
                                </div>
                                <ul
                                    class="list-outside list-disc ml-6 text-lg mt-2"
                                >
                                    <li>
                                        Co-led rewrite of financial system for a
                                        total software solution. Including
                                        leading development of recurring
                                        billing, installment payments,
                                        deferrals, accounting and more.
                                    </li>
                                    <li>
                                        Introduced and drove usage of best
                                        practices including foreign keys, vue
                                        composition api and more.
                                    </li>
                                    <li>
                                        Helped plan sprints, manage deadlines
                                        and allocate tasks to developers
                                        effectively.
                                    </li>
                                </ul>
                                <div class="flex flex-row mt-1.5 gap-2">
                                    <IconBadge icon="akar-icons:php-fill">
                                        <span>PHP</span>
                                    </IconBadge>
                                    <IconBadge icon="akar-icons:vue-fill">
                                        <span>Vue</span>
                                    </IconBadge>
                                    <IconBadge icon="tabler:brand-mysql">
                                        <span>MySQL</span>
                                    </IconBadge>
                                    <IconBadge icon="mdi:jira">
                                        <span>Jira</span>
                                    </IconBadge>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row pt-6">
                            <div class="bg-orange-4 mx-2 w-1 shrink-0"></div>
                            <div class="grow">
                                <span class="font-bold text-2xl"
                                    >Virginia Tech</span
                                >
                                <div
                                    class="flex flex-col md:flex-row pt-2 text-xl"
                                >
                                    <h3>Graduate Research Assistant</h3>
                                    <div class="grow" />
                                    <b class="mr-2"> Sep 2019 - Dec 2021 </b>
                                </div>
                                <ul
                                    class="list-outside list-disc ml-6 text-lg mt-2"
                                >
                                    <li>
                                        Developed a simulation of a fully
                                        autonomous intersection for self driving
                                        cars to model cyber-attacks and their
                                        impact.
                                    </li>
                                    <li>
                                        Designed a sensor model to simulate the
                                        impact of degradation on the performance
                                        of a road network simulation.
                                    </li>
                                    <li>
                                        Simulated the impact of connected
                                        vehicle market penetration on vehicle
                                        density.
                                    </li>
                                    <li>
                                        Modelled industrial machining and
                                        manufacturing processes to identify and
                                        reduce waste.
                                    </li>
                                </ul>
                                <div class="flex flex-row mt-1.5 gap-2">
                                    <IconBadge icon="mdi:language-python">
                                        <span>Python</span>
                                    </IconBadge>
                                    <IconBadge
                                        icon="devicon-plain:jupyter-wordmark"
                                    >
                                        <span>Jupyter</span>
                                    </IconBadge>
                                    <IconBadge icon="simple-icons:pandas">
                                        <span>Pandas</span>
                                    </IconBadge>
                                    <IconBadge
                                        icon="mdi:language-cpp"
                                    ></IconBadge>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NavigationLeft
            to=""
            view="main"
            class="display-none md:display-block"
        />
        <NavigationFarLeft
            to="projects"
            class="display-none md:display-block"
        />
        <NavigationFarLeft
            to=""
            view="main"
            class="display-block md:display-none"
        />
    </div>
</template>

<script setup lang="ts">
const swipableContainer = ref<HTMLElement | null>(null);

const { isSwiping, lengthX } = useSwipe(swipableContainer);

watch(isSwiping, (val) => {
    if (!val && lengthX.value < -100) {
        navigateTo("/");
    }
});
</script>

<style scoped>
::-webkit-scrollbar {
    width: 0.25em;
}

::-webkit-scrollbar-thumb {
    background-color: rgb(253, 186, 116);
    border-radius: 1em;
}
</style>
