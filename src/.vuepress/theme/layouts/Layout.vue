<template>
    <div :class="$site.themeConfig.theme" class="flex flex-col min-w-3xs bg-neutral-300 font-sans min-h-screen">
        <Header />
        
    </div>
</template>

<script>
    import Header from "../global-components/Header";
    export default {
        name: "Layout",
        components: {Header}
    }
</script>

<style lang="css">
    @import "../styles/app.css";
</style>

