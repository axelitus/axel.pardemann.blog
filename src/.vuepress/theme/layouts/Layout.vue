<template>
    <div :class="$site.themeConfig.theme" class="flex flex-col min-w-3xs bg-neutral-300 font-sans min-h-screen">
        <Header />
        <Content class="flex-grow w-3/4 my-2 mx-auto p-2" />
        <Footer :links="$site.themeConfig.nav.links" />
    </div>
</template>

<script>
    import Header from "../global-components/Header";
    import Footer from "../global-components/Footer";

    export default {
        name: "Layout",
        components: {Footer, Header}
    }
</script>

<style lang="css">
    @import "../styles/app.css";
</style>

