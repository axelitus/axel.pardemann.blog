<template>
    <header class="bg-neutral-900 bg-top bg-no-repeat bg-shapes">
        <div class="w-full mx-auto px-10 sm:px-16 lg:px-16 xl:px-20 2xl:max-w-xl">
            <div class="pt-10 pb-8">
                <app-navbar :links="$site.themeConfig.nav.links" />
            </div>
        </div>

        <svg class="w-full flex-no-shrink -mb-px" style="height: 3vw" preserveAspectRatio="none" viewBox="0 0 2340 120">
            <path fill="var(--color-neutral-300)" d="M0 76.353h2340v43H0z" />
            <path fill="var(--color-primary-900)" d="M2340 0v120L0 78.956z" />
        </svg>
        <!-- Fix Firefox quirk -->
        <div class="h-px bg-neutral-300"></div>
    </header>
</template>

<script>
    import AppNavbar from './Navbar';

    export default {
        name: "Header",
        components: {
            AppNavbar,
        },
        data() {
            return {}
        },
    }
</script>
