<template>
    <div>
        <app-posts-list :posts="$featuredPosts" />
        <app-posts-list :posts="$regularPosts" />
    </div>
</template>

<script>
    import AppPostsList from "@theme/components/posts/PostsList";

    export default {
        name: "Home",
        components: {
            AppPostsList,
        },
    }
</script>

