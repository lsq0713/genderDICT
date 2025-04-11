<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection('content').path(route.path).first()
})
</script>

<template>
    <NuxtLayout>
        <template v-if="page">
            <div class="py-10 m-auto sm:px-8">
                <main class="px-4 mx-auto max-w-2xl prose">
                    <ContentRenderer :value="page" />
                </main>
            </div>

        </template>
        <template v-else>
            <div class="empty-page">
                <h1>Page Not Found</h1>
                <p>Oops! The content you're looking for doesn't exist.</p>
                <NuxtLink to="/">Go back home</NuxtLink>
            </div>
        </template>
    </NuxtLayout>
</template>
