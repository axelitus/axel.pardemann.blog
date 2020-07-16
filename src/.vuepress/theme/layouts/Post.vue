<template>
    <div>
        <app-post-display :post="$page" />
    </div>
</template>

<script>
    import AppPostDisplay from "@theme/components/posts/PostDisplay";
    
    export default {
        name: "Post",
        components: {
            AppPostDisplay,
        },
    }
</script>

