const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',  // <--- TAMBAHKAN BARIS INI (Wajib!)
  
  // chainWebpack: config => { ... } (biarkan komentar ini kalau tidak dipakai)
})