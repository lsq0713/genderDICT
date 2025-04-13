import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        entries: defineCollection({
            type: 'page',
            source: 'entries/**'
        }),
        docs: defineCollection({
            type: 'page',
            source: 'docs/**',
        }),
    }
})
