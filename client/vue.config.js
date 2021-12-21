module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/api/*': {
        target: 'http://localhost:8000',
        secure: false
      }
    }
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  },

  transpileDependencies: ['quasar']
};
