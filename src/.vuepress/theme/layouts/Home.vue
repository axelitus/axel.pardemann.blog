<template>
    <div>
        <app-posts-list :posts="$featuredPosts" />
        <app-posts-list :posts="$regularPosts" />

        <div class="flex flex-col md:flex-row items-center md:justify-around w-4/5 mx-auto pt-10 md:pt-20"
             v-if="postsListsEmpty"
        >
            <img alt="Image" class="h-40 sm:h-48 md:h-72 xl:h-76" src="@theme/assets/img/surprised.svg" />
            <div class="mt-6 sm:mt-10 md:mt-0 md:flex-grow md:pl-10 text-center lg:text-left text-xl sm:text-2xl xl:text-2xl text-neutral-500">
                <h2 class="text-4xl sm:text-5xl xl:text-6xl font-bold font-fira-code text-primary-800">Ooops!</h2>
                <p class="mt-4">
                    I'm sorry to tell you that there are currently no posts published...
                </p>
                <p class="mt-4">
                    Check back soon to see if I already published something new!
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import AppPostsList from "@theme/components/posts/PostsList"
    import {isEmpty} from "@theme/scripts/utils"

    export default {
        name: "Home",
        components: {
            AppPostsList,
        },
        computed: {
            postsListsEmpty() {
                return isEmpty(this.$featuredPosts) && isEmpty(this.$regularPosts)
            }
        }
    }
</script>

