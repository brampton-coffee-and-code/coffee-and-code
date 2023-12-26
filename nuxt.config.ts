// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,

    pages: true,

    generate: {
        routes: [
            '/',
            '/api/calendar'
        ]
    }
})
