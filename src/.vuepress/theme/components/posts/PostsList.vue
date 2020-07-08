<template>
    <section class="w-full xl:w-3/4 mx-auto">
        <app-post-card v-for="post in posts" :post="post" />
    </section>
</template>

<script>
    import AppPostCard from './PostCard'

    export default {
        name: "PostsList",
        components: {
            AppPostCard
        },
        props: {
            posts: {
                type: Array,
                required: true,
            }
        }
    }
</script>
