module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'redd.house',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Reddhouse's Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Arimo' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css', '~assets/font-awesome-4.7.0/css/font-awesome.min.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Reduce the size of our bundle by including external libraries only once
  ** in our application.
  */
  build: {
    vendor: ['axios']
  }
}
