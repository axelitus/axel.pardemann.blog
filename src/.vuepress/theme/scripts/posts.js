import { onlyPosts, sortByDate } from "@theme/scripts/utils"

export default ({ Vue }) => {
    Vue.mixin({
        computed: {
            $featuredPosts() {
                return onlyPosts(this.$site.pages)
                    .filter(post => post.isFeatured)
                    .sort(sortByDate)
            },
            $regularPosts () {
                return onlyPosts(this.$site.pages)
                    .filter(post => !post.isFeatured)
                    .sort(sortByDate)
            },
        }
    })
}
