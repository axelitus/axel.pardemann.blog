<template>
    <article class="my-8 p-2 bg-neutral-100 rounded shadow">
        <header class="relative mb-1">
            <span class="absolute top-0 right-0" v-if="post.isPinned">Pin</span>
            <h2 class="border-b-4 border-neutral-300">
                <a class="font-semibold text-xl text-neutral-600 hover:text-primary-800" :href="post.path">{{ post.title }}</a>
            </h2>
            <div class="flex flex-col md:flex-row justify-between text-sm text-neutral-400">
                <span>{{ formattedDate }} ({{ relativeDate }})</span>
                <div>
                    <span>tags</span>
                </div>
            </div>
        </header>
        <div class="my-2 text-neutral-600">
            <p class="text-justify">{{ post.frontmatter.description }}</p>
        </div>
        <div class="text-right">
            <a class="text-sm text-neutral-400 hover:text-primary-300" href="#">Continue reading →</a>
        </div>
    </article>
</template>

<script>
    import {formatDate, relativeDate} from "@theme/scripts/utils";

    export default {
        name: "PostCard",
        computed: {
            formattedDate() {
                return formatDate(this.post.isoDate)
            },
            relativeDate() {
                return relativeDate(this.post.isoDate)
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

<style scoped>

</style>
