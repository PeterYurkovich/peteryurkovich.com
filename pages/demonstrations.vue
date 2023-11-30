<template>
    <div class="w-full h-full md:p-4 view-transition-demonstrations">
        <div
            class="absolute w-full top-1/16 h-15/16 md:h-14/16 md:px-1/8"
            ref="swipableContainer"
        >
            <div
                class="p-4 w-full h-full rounded-t-10 md:rounded-b-10 border-2 border-gray bg-dark-8"
            >
                <div
                    class="w-full h-full overflow-x-hidden overflow-y-auto px-4 c-slate-1"
                >
                    <h2 class="text-5xl ml-1 pb-6 mt-6">Projects</h2>
                    <div class="mt-6">
                        <div class="text-xl font-bold">PicoServices</div>
                        <p>
                            Microservices have become all the rage, with their
                            ability to scale up at to a nearly infinite scale at
                            a nearly instant pace. However, microservices can
                            sometime spiral out of control in complexity,
                            leading to distributed requests which bloom in size
                            and response time. Our solution? PicoServices.
                            Miniature services which are so small, they can be
                            run on a single core of a single CPU. This allows
                            for the most efficient and fastest possible response
                            times, with the least amount of overhead. By
                            offloading complex arithmetic tasks to PicoServices,
                            we can have our microservices focus more on what
                            they do best, without worrying about the rest.
                        </p>
                    </div>
                    <Terminal />
                </div>
            </div>
        </div>
        <NavigationLeft to="projects" class="display-none md:display-block" />
        <NavigationFarLeft
            to=""
            view="main"
            class="display-none md:display-block"
        />
    </div>
</template>
