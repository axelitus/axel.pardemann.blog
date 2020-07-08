<template>
    <nav>
        <div class="flex justify-between">
            <!-- Logo and Name -->
            <div class="flex items-center">
                <a href="/" class="items-baseline text-neutral-400 tracking-tighter no-underline text-2xl antialiased hover:translateY-1px hover:transition-1s">
                    <img class="inline-block lg:hidden h-12 w-auto" src="../../public/img/runestone.svg" alt="Axel Pardemann" />
                    <img class="hidden lg:inline-block h-12 w-auto" src="../../public/img/runestone.svg" alt="Axel Pardemann" />
                    {{ $site.themeConfig.nav.title }}
                    <span class="font-semibold">{{ $site.themeConfig.nav.subtitle }}</span>
                </a>
            </div>

            <!-- Normal Menu -->
            <div class="font-medium antialiased hidden md:block">
                <a v-for="(link, index) in links"
                   :class="index === 0 ? '': 'ml-4'"
                   class="inline-block text-neutral-400 hover:text-primary-300 hover:bg-neutral-800 rounded p-3 no-underline"
                   v-bind="link.attrs"
                >
                    {{ link.name }}
                </a>
            </div>
        </div>

        <!-- Mobile menu button -->
        <div class="-mt-10 -mr-2 flex justify-end block md:hidden">
            <button class="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-primary-300 hover:bg-neutral-800 focus:outline-none focus:bg-neutral-800 focus:text-primary-700 transition duration-150 ease-in-out"
                    :class="open ? 'bg-neutral-800' : ''"
                    aria-label="Main menu"
                    :aria-expanded="open ? 'true' : 'false'"
                    @click="open = !open"
            >
                <!-- Icon when menu is closed. -->
                <svg v-show="!open" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <!-- Icon when menu is open. -->
                <svg v-show="open" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Dropdown Menu -->
        <div :class="open ? 'block' : 'hidden'" class="md:hidden -mt-2 -mr-2 pt-1 px-2 bg-neutral-800 rounded-md shadow">
            <div class="px-2 pt-2 pb-3">
                <a v-for="(link, index) in links"
                   :class="index === 0 ? '': 'mt-1'"
                   class="block px-3 py-2 rounded-md text-base font-medium text-neutral-400 hover:text-white hover:bg-neutral-700 focus:outline-none focus:text-white focus:bg-neutral-700 transition duration-150 ease-in-out"
                   v-bind="link.attrs"
                   @click="open = !open"
                >
                    {{ link.name }}
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar",
        props: {
            links: {
                type: Array,
                required: true,
            }
        },
        data: () => {
            return {
                open: false,
            }
        }
    }
</script>

<style scoped>

</style>
