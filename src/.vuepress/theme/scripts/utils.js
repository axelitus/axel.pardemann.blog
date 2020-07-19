import moment from 'moment-timezone'

export const formatDate = (date) => moment(date).format('lll')

export const onlyPosts = (pages) => pages.filter(page => page.isPublished && page.isPost)

export const relativeDate = (date) => moment(date).fromNow()

export const sortByDate = (a, b) => new Date(b.published_at) - new Date(a.published_at)
