module.exports = {
  devServer: {
    proxy: {
      '^/': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  },

  transpileDependencies: [
    'quasar'
  ]
};
