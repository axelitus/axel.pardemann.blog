<template>
    <footer class="bg-neutral-900">
        <!-- Fix Firefox quirk -->
        <div class="-mb-px h-px bg-neutral-200"></div>
        <svg class="w-full flex-no-shrink -mb-px" preserveAspectRatio="none" style="height:3vw" viewBox="0 0 2340 120">
            <path fill="var(--color-neutral-200)" d="M2340 43.647H0v-43h2340z" />
            <path fill="var(--color-primary-900)" d="M0 120V0l2340 41.044z" />
        </svg>

        <div class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <nav class="-mx-5 -my-2 flex flex-wrap justify-center" role="doc-pagelist">
                <div v-for="link in links"
                     class="px-5 py-2"
                >
                    <a class="text-base leading-6 text-neutral-400 hover:text-primary-300"
                       v-bind="link.attrs"
                    >
                        {{ link.name }}
                    </a>
                </div>
            </nav>
            <div class="mt-8 flex justify-center">
                <a href="https://github.com/axelitus" class="ml-6 text-neutral-700 hover:text-primary-300" rel="noreferrer" target="_blank">
                    <span class="sr-only">GitHub</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                    </svg>
                </a>
                <a href="https://twitter.com/axelpardemann" class="ml-6 text-neutral-700 hover:text-primary-300" rel="noreferrer" target="_blank">
                    <span class="sr-only">Twitter</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/axelpardemann" class="ml-6 text-neutral-700 hover:text-primary-300" rel="noreferrer" target="_blank">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.429 1H2.567C1.702 1 1 1.712 1 2.586v18.828C1 22.288 1.702 23 2.567 23h18.862c.864 0 1.571-.712 1.571-1.586V2.586C23 1.712 22.293 1 21.429 1zM7.649 19.857H4.39V9.358h3.265v10.5zM6.02 7.924a1.891 1.891 0 010-3.781c1.04 0 1.89.85 1.89 1.89 0 1.046-.844 1.891-1.89 1.891zm13.853 11.933h-3.26V14.75c0-1.218-.025-2.784-1.695-2.784-1.7 0-1.96 1.326-1.96 2.696v5.195h-3.26V9.358h3.128v1.434h.044c.437-.825 1.503-1.694 3.089-1.694 3.3 0 3.914 2.175 3.914 5.004z"/>
                    </svg>
                </a>
            </div>
            <div class="mt-8">
                <p class="text-center text-base leading-6 text-neutral-400">
                    &copy; 2020 Axel Pardemann. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        props: {
            links: {
                type: Array,
                required: true,
            }
        },
    }
</script>

<style scoped>

</style>
