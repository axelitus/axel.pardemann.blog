<template>
    <article class="post-card my-8 px-3 py-2 bg-neutral-050 rounded shadow-lg">
        <header class="relative mb-1">
            <span class="absolute top-0 right-0" v-if="post.isFeatured">
                <svg class="text-support-fifth-500 h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <title>Featured!</title>
                    <path fill-rule="evenodd" d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z" clip-rule="evenodd" />
                </svg>
            </span>
            <h2 class="border-b-4 border-neutral-300">
                <a v-html="post.renderedTitle" class="font-semibold text-xl xl:text-2xl text-neutral-600 hover:text-primary-800" :href="post.path" />
            </h2>
            <div class="flex flex-col md:flex-row justify-between mt-1 text-sm text-neutral-400">
                <div>
                    <app-post-card-permalink :date="post.isoDate" :permalink="post.frontmatter.permalink" />
                </div>
                <div class="flex mt-1 md:mt-0">
                    <a class="rounded p-1 bg-neutral-200 hover:bg-support-first-200 text-xs text-neutral-400 hover:text-support-first-600 mr-2 ml-0 md:mr-0 md:ml-2"
                       href="#"
                       title="tag: general"
                    >
                        <svg class="inline-block h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                        </svg>
                        <span>general</span>
                    </a>
                    <a class="rounded p-1 bg-neutral-200 hover:bg-support-first-200 text-xs text-neutral-400 hover:text-support-first-600 mr-2 ml-0 md:mr-0 md:ml-2"
                       href="#"
                       title="tag: tech"
                    >
                        <svg class="inline-block h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                        </svg>
                        <span>tech</span>
                    </a>
                </div>
            </div>
        </header>
        <div class="mt-3 mb-2 text-neutral-600">
            <div class="prose prose-sm max-w-none md:prose md:max-w-none lg:prose-lg xl:prose-xl">
                {{ post.frontmatter.description }}
            </div>
        </div>
        <div class="text-right">
            <a class="text-sm text-neutral-400 hover:text-primary-500" :href="post.path">
                Continue reading
                <svg class="inline h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </a>
        </div>
    </article>
</template>

<script>
    import AppPostCardPermalink from "@theme/components/posts/PostCardPermalink";

    export default {
        name: "PostCard",
        components: {
            AppPostCardPermalink,
        },
        props: {
            post: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<style scoped>

</style>
