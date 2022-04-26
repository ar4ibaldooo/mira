const path = require('path')

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, on Mac: sudo npm run / sudo yarn
const devServerPort = 80;
const mockServerPort = 8000 ;
const name = 'Training';

// publicPath: process.env.NODE_ENV === 'production' ? '/vue-typescript-admin-template/' : '/',

module.exports = {
  publicPath: '/test/dist/',
  devServer: {
    port: devServerPort,
    open: false,
    proxy: {
      // change xxx-api/login => /mock-api/v1/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      "/api": {
        // target: `http://dummy.restapiexample.com/api/v1`,
        target: `http://10.66.66.58/test/api`,
        changeOrigin: true, // needed for virtual hosted sites
        ws: true, // proxy websockets
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

}
