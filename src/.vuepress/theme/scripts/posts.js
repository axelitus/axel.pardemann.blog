import { onlyPosts, sortByDate } from "@theme/scripts/utils"

export default ({ Vue }) => {
    Vue.mixin({
        computed: {
            $pinnedPosts() {
                return onlyPosts(this.$site.pages)
                    .filter(post => post.isPinned)
                    .sort(sortByDate)
            },
            $regularPosts () {
                return onlyPosts(this.$site.pages)
                    .filter(post => !post.isPinned)
                    .sort(sortByDate)
            },
        }
    })
}
