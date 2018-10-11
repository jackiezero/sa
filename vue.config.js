module.exports = {
    baseURL: process.env.NODE_ENV === 'production'
        ? '/production-sub-path/'
        : '/'

}
