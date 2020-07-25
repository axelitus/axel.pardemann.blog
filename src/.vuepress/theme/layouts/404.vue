<template>
    <div class="flex flex-col md:flex-row items-center md:justify-around w-4/5 mx-auto pt-10 md:pt-20 mb-20"
        >
            <img alt="Image" class="h-40 sm:h-48 md:h-72 xl:h-76 xl:ml-12" src="@theme/assets/img/surprised.svg" />
            <div class="mt-6 sm:mt-10 md:mt-0 md:flex-grow md:pl-10 lg:ml-24 text-center xl:text-left text-xl sm:text-2xl xl:text-2xl text-neutral-500">
                <h2 class="text-4xl sm:text-5xl xl:text-6xl font-bold font-fira-code text-primary-800">Ooops!</h2>
                <p class="mt-4">
                    I'm not sure what your are trying to do, but the page your looking for is not here.
                </p>
                <p class="mt-4">
                    Let's try it again this again. Go <a class="text-primary-400 hover:text-primary-600 cursor-pointer" @click="$router.go(-1)">back</a> or <a class="text-primary-400 hover:text-primary-600 cursor-pointer" href="/">start over</a>. 
                </p>
            </div>
        </div>
</template>

<script>
    export default {
        name: "NotFound",
    }
</script>

