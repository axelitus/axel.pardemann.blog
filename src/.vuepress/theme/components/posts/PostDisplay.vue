<template>
    <div>
        <a class="inline-block text-neutral-400 hover:text-primary-500 cursor-pointer" @click="$router.go(-1)">
            <svg class="inline-block align-middle h-4 w-4 -mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
            <span>Go back</span>
        </a>
        <article class="post-display mt-4 mb-8 px-3 py-2 sm:py-4 md:px-5 lg:px-7 lg:py-6 xl:px-9">
            <header class="relative mx-4 pt-4 pb-2 border-b-4 border-neutral-300">
                <span class="absolute top-4 right-0 -mr-2" v-if="post.isFeatured">
                    <svg class="text-support-fifth-500 h-8 w-8 lg:h-10 lg:w-10" fill="currentColor" viewBox="0 0 20 20">
                        <title>Featured!</title>
                        <path fill-rule="evenodd" d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z" clip-rule="evenodd" />
                    </svg>
                </span>
                <div class="prose prose-sm max-w-none md:prose md:max-w-none lg:prose-lg xl:prose-xl">
                    <h1 v-html="post.renderedTitle" class="post-display-title inline-block border-b-4 border-neutral-300 mr-8" />
                </div>
                <div class="flex flex-col md:flex-row justify-between mt-1 text-sm text-neutral-400">
                    <div>
                        <app-post-card-permalink class="text-sm md:text-md lg:text-lg" :date="post.published_at" :permalink="post.frontmatter.permalink" />
                    </div>
                    <app-post-tags-list :tags="post.frontmatter.tags" />
                </div>
            </header>
            <Content class="post-content prose prose-sm max-w-none md:prose md:max-w-none lg:prose-lg xl:prose-xl" />
        </article>
    </div>
</template>

<script>
    import AppPostCardPermalink from "@theme/components/posts/PostCardPermalink";
    import AppPostTagsList from "@theme/components/posts/PostTagsList"

    export default {
        name: "PostDisplay",
        components: {
            AppPostCardPermalink,
            AppPostTagsList,
        },
        props: {
            post: {
                type: Object,
                required: true,
            }
        }
    }
</script>
