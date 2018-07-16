module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'gen_ui',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'GKN Driveline Global Expert Network Website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  // plugins: ['~plugins/buefy'],
  /*
  ** Build configuration
  */
  modules: [
    // Simple usage
    'nuxt-buefy'
  ],
  buefy: { /* buefy options */
    materialDesignIcons: false,
    defaultIconPack: 'fa'
  },
  css: [
    // node.js module but we specify the pre-processor
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' },
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
