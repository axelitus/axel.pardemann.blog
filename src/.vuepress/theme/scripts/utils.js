import moment from 'moment'

export const formatDate = (date) => moment(date).format('lll')

export const onlyPosts = (pages) => pages.filter(page => page.isPost)

export const relativeDate = (date) => moment(date).fromNow()

export const sortByDate = (a, b) => new Date(b.isoDate) - new Date(a.isoDate)
