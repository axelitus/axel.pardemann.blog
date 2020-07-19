<template>
    <article class="post-card my-8 px-4 lg:px-6 pt-2 pb-4 lg:pt-4 bg-neutral-050 rounded shadow-lg">
        <header class="relative mb-1 pb-1 border-b-4 border-neutral-300">
            <div class="flex items-center justify-between">
                <h2 class="font-semibold text-xl xl:text-2xl ">
                    <a v-html="post.renderedTitle" class="text-neutral-600 hover:text-primary-800" :href="post.path" />
                </h2>
                <svg v-if="post.isFeatured" class="text-support-fifth-500 h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <title>Featured!</title>
                    <path fill-rule="evenodd" d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex flex-col md:flex-row justify-between text-sm text-neutral-400">
                <div>
                    <app-post-card-permalink :date="post.published_at" :permalink="post.frontmatter.permalink" />
                </div>
                <app-post-tags-list :tags="post.frontmatter.tags" />
            </div>
        </header>
        <div class="text-xs lg:text-sm text-neutral-350 text-right">
            <app-date-display :date="post.lastUpdated" :show-relative="true" prefix="Last updated: " />
        </div>
        <div class="mt-3 mb-2 text-neutral-600">
            <div v-html="excerpt" class="prose prose-sm max-w-none md:prose md:max-w-none lg:prose-lg xl:prose-xl" />
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
    import AppPostTagsList from "@theme/components/posts/PostTagsList"
    import AppDateDisplay from "@theme/components/general/DateDisplay"

    export default {
        name: "PostCard",
        components: {
            AppPostCardPermalink,
            AppPostTagsList,
            AppDateDisplay,
        },
        computed: {
            excerpt() {
                return this.post.excerpt === undefined || this.post.excerpt === '' ? this.post.frontmatter.description : this.post.excerpt
            }
        },
        props: {
            post: {
                type: Object,
                required: true,
            }
        }
    }
</script>
