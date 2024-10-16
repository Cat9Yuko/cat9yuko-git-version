const appConfig = require('./src/app.config')

module.exports = {
  // baseUrl
  publicPath: process.env.NODE_ENV === 'production' ? '/xxfbshd/' : '/',
  configureWebpack: {
    name: appConfig.title,
    resolve: {
      alias: require('./aliases.config').webpack
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          black: '#000',
          white: '#fff',
          red: '#f44',
          blue: '#3366cc',
          orange: '#ff976a',
          'orange-dark': '#ed6a0c',
          'orange-light': '#fffbe8',
          green: '#3366cc',
          gray: '#c9c9c9',
          'gray-light': '#e5e5e5',
          'gray-darker': '#666',
          'gray-dark': '#999',
          'text-color': '#303049',
          'border-color': '#eee',
          'active-color': '#e8e8e8',
          'background-color': '#f8f8f8',
          'background-color-light': '#fafafa'
        }
      }
    }
  },
  productionSourceMap: false,
  devServer: {
    host: 'localhost',
    open: true,
    port: 8888,
    overlay: true
  }
}
