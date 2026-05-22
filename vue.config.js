const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './dist/',
  indexPath: '../index.html',

  // chainWebpack: config => { ... } (biarkan komentar ini kalau tidak dipakai)
})