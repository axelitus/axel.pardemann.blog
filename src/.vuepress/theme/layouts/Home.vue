<template>
    <div>
        <app-posts-list :posts="$pinnedPosts" />
        <app-posts-list :posts="$regularPosts" />
    </div>
</template>

<script>
    import onlyPosts from "@theme/scripts/utils"
    import AppPostsList from "../components/posts/PostsList";

    export default {
        name: "Home",
        components: {
            AppPostsList
        },
    }
</script>

