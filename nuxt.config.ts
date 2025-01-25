// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // DevTools
  devtools: { enabled: true },

  // Все глобальные стили
  css: [
    '~/assets/styles/reset.scss',
    '~/assets/styles/fonts.scss',
    '~/assets/styles/fontawesome.min.scss',
    '~/assets/styles/global.scss',
  ],

  // Дополниельные модули
  modules: ['@pinia/nuxt'],

  vite: {
    // Подключаем файл с переменными ко всем файлам стилей
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/variables.scss" as *;',
          api: 'modern-compiler',
        },
      },
    },
  },

  // SSR
  ssr: true,

  // Включаем TypeScript
  typescript: {
    typeCheck: true,
  },

  // Конфиг
  runtimeConfig: {
    public: {
      url: 'http://localhost:3000',
      apiUrl: '',
    },
  },

  compatibilityDate: '2025-01-25',
});
