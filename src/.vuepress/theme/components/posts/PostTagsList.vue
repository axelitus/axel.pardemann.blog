<template>
    <div class="flex mt-1 md:mt-0">
        <app-post-tag v-for="slug in tags" :slug="slug" />
    </div>
</template>

<script>
    import AppPostTag from "@theme/components/posts/PostTag"

    export default {
        name: "PostTagsList",
        components: {
            AppPostTag,
        },
        props: {
            tags: {
                type: Array,
                required: true,
            }
        }
    }
</script>
