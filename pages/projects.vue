<template>
    <div class="w-full h-full md:p-4 view-transition-projects">
        <div
            class="absolute w-full top-1/16 h-15/16 md:h-14/16 md:px-1/8"
            ref="swipableContainer"
        >
            <div
                class="rounded-2rem p-4 w-full h-full rounded-t-10 md:rounded-b-10 bg-dark-8 border-gray border-2"
            >
                <div
                    class="w-full h-full overflow-x-hidden overflow-y-auto px-4 c-slate-1"
                >
                    <div class="mt-6">
                        <h2 class="text-5xl ml-1 pb-6 mt-6">Projects</h2>
                        <HorizontalHero />
                        <div class="flex flex-col md:flex-row gap-4 pt-6">
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
                                    <div class="font-bold text-3xl">
                                        Autonomous Intersection
                                    </div>
                                    <div class="text-lg pt-2">
                                        This project developed an simulation of
                                        a an intersection routing fully
                                        autonomous vehicles through it using
                                        wireless communication. This research
                                        was completed in conjunction with Ford
                                        to help quantify the impact the cyber
                                        attacks might incur on autonomous
                                        traffic flow.
                                    </div>
                                    <div
                                        class="flex flex-row mt-1.5 gap-2 pt-2"
                                    >
                                        <IconBadge
                                            icon="mdi:language-cpp"
                                        ></IconBadge>
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
                        <div class="flex flex-col md:flex-row gap-4 pt-6">
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
                                        This project developed an modification
                                        of typical adversarial attacks against
                                        Deep Reinforcement Learning (DRL)
                                        agents. It trained several DRL models in
                                        different MuJoCo environments and then
                                        attacked them using our proposed method.
                                    </div>
                                    <div
                                        class="flex flex-row mt-1.5 gap-2 pt-2"
                                    >
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
                        <div class="flex flex-col md:flex-row gap-4 pt-6">
                            <img
                                src="/homepage.png"
                                format="png"
                                width="325"
                                height="325"
                                class="rounded-2xl transition"
                            />
                            <div class="grow flex flex-col justify-center pb-4">
                                <div>
                                    <div class="font-bold text-3xl">
                                        Personal Site v1
                                    </div>
                                    <div class="text-lg pt-2">
                                        Although mostly static, this website was
                                        constructed in Nuxt to continue to grow
                                        my familiarity with it. It uses the new
                                        view-transition api to provide smooth
                                        animations between pages. It uses UnoCSS
                                        to construct rules for dynamic classes
                                        for the view transitions.
                                    </div>
                                    <div
                                        class="flex flex-row mt-1.5 gap-2 pt-2"
                                    >
                                        <IconBadge icon="tabler:brand-nuxt">
                                            <span>Nuxt</span>
                                        </IconBadge>
                                        <IconBadge
                                            icon="vscode-icons:file-type-unocss"
                                        >
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
        <NavigationRight
            to=""
            view="main"
            class="md:display-block display-none"
        />
        <NavigationFarRight to="resume" class="md:display-block display-none" />
    </div>
</template>

<script setup lang="ts">
const swipableContainer = ref<HTMLElement | null>(null);

const { isSwiping, lengthX } = useSwipe(swipableContainer);

watch(isSwiping, (val) => {
    if (!val && lengthX.value > 100) {
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
