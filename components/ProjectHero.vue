<template>
    <div class="flex flex-col md:flex-row gap-4">
        <div class="h-full relative">
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
                loading="lazy"
            />
        </div>
        <div class="grow flex flex-col justify-center pb-4">
            <div>
                <NuxtLink
                    to="https://github.com/PeterYurkovich/PocketFives"
                    class="group font-bold text-3xl"
                    target="_blank"
                >
                    <span
                        class="pyn-transition-300 underline underline-dashed decoration-orange-3 group-hover:decoration-orange-4 group-hover:c-orange-4 underline-offset-2"
                    >
                        Pocket Fives
                    </span>
                    <Icon
                        name="tabler:brand-github"
                        class="mb-0.5 mr-1 text-2xl pyn-transition-300 ease-in-out c-orange-3 group-hover:c-orange-4"
                    />
                </NuxtLink>
                <div class="">Pocket Fives</div>
                <div class="text-lg pt-2">
                    This project came about from my teams frustration with
                    making split decisions on pointing stories. While working on
                    Pocket Fives I learned about OAuth using GitHub and
                    WebSocket communication through Liveblocks.
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
</template>

<script lang="ts" setup></script>

<style scoped></style>
