// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  // app: {
  //   baseURL: '/gender/' // 必须结尾有斜杠
  // },

  // 确保启用了文件系统路由
  pages: true,

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@nuxt/content'],

  content: {
    // Removed invalid 'sources' property
    // highlight: {
    //   theme: 'github-dark'
    // }
  }
})