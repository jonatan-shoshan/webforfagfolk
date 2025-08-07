// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'WebForFagfolk.dk - Professionelle hjemmesider til fagfolk',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Vi laver simple, effektive hjemmesider til fagfolk og små erhverv. Ingen bøvl, ingen smarte ord – bare noget der virker og skaffer dig kunder.' 
        },
        { property: 'og:title', content: 'WebForFagfolk.dk - Professionelle hjemmesider til fagfolk' },
        { 
          property: 'og:description', 
          content: 'Vi laver simple, effektive hjemmesider til fagfolk og små erhverv. Ingen bøvl, ingen smarte ord – bare noget der virker og skaffer dig kunder.' 
        },
        // { property: 'og:image', content: '#' },
        { property: 'og:url', content: 'https://webforfagfolk.dk' },
        { property: 'og:type', content: 'website' },
        { property: 'og:author', content: 'WebForFagfolk' },
        { property: 'og:site_name', content: 'WebForFagfolk.dk' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@webforfagfolk' },
        { property: 'twitter:title', content: 'WebForFagfolk.dk - Professionelle hjemmesider til fagfolk' },
        { 
          property: 'twitter:description', 
          content: 'Vi laver simple, effektive hjemmesider til fagfolk og små erhverv. Ingen bøvl, ingen smarte ord – bare noget der virker og skaffer dig kunder.' 
        },
        // { property: 'twitter:image', content: '#' }
      ],
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: 'https://mocha-cdn.com/favicon.ico' },
        // { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://mocha-cdn.com/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' 
        }
      ]
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css'
  }
})
